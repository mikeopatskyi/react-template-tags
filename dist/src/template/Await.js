import { useEffect, useState } from 'react';
import { resolveLazy } from '../utils/render';
/**
 * Await component.
 * wrapper to resolve promises.
 * NOTE: For SSR, this only works if the promise is already resolved or if using a framework that handles effect hydration,
 * otherwise it renders fallback initially.
 */
export const Await = ({ promise, children, fallback, error }) => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);
    const [status, setStatus] = useState('pending');
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
    if (status === 'pending')
        return resolveLazy(fallback) || null;
    if (status === 'rejected')
        return error ? error(err) : null;
    return children(data);
};
//# sourceMappingURL=Await.js.map