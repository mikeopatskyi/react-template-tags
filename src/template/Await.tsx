import { FC, ReactNode, useEffect, useState } from 'react';
import { LazyNode, resolveLazy } from '../utils/render';

export interface AwaitProps<T> {
  promise: Promise<T>;
  children: (data: T) => ReactNode;
  fallback?: LazyNode;
  error?: (err: any) => ReactNode;
}

/**
 * Await component.
 * wrapper to resolve promises. 
 * NOTE: For SSR, this only works if the promise is already resolved or if using a framework that handles effect hydration,
 * otherwise it renders fallback initially.
 */
export const Await = <T,>({ promise, children, fallback, error }: AwaitProps<T>): ReactNode => {
  const [data, setData] = useState<T | null>(null);
  const [err, setErr] = useState<any>(null);
  const [status, setStatus] = useState<'pending' | 'resolved' | 'rejected'>('pending');

  useEffect(() => {
    let canceled = false;
    setStatus('pending');
    promise
      .then((res) => {
        if (!canceled) {
          setData(res);
          setStatus('resolved');
        }
      })
      .catch((e) => {
        if (!canceled) {
          setErr(e);
          setStatus('rejected');
        }
      });
    return () => {
      canceled = true;
    };
  }, [promise]);

  if (status === 'pending') return resolveLazy(fallback) || null;
  if (status === 'rejected') return error ? error(err) : null;
  return children(data as T);
};
