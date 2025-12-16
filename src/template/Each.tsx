import { Children, ReactNode, Fragment } from 'react';

export interface EachProps<T> {
  of: T[] | undefined | null;
  render: (item: T, index: number) => ReactNode;
  /**
   * Content to render when the list is empty or null/undefined.
   */
  fallback?: ReactNode;
  /**
   * Function to generate a unique key for each item.
   * If provided, proper reordering will be supported.
   * If not provided, index will be used (less safe for reordering).
   */
  keyFn?: (item: T, index: number) => string | number;
}

/**
 * Iterates over an array and renders the result of calling the render function for each item.
 * 
 * @template T
 * @param {EachProps<T>} props
 */
export const Each = <T,>({ of, render, fallback, keyFn }: EachProps<T>): ReactNode => {
  if (!of || of.length === 0) {
    return fallback || null;
  }

  return Children.toArray(
    of.map((item, index) => {
      const element = render(item, index);
      // If keyFn is provided, we wrap in a keyed Fragment to ensure the key is respected
      // by Children.toArray (which will prefix it) or just by React in general.
      // However, Children.toArray re-keys things.
      // If we want strict keys, we should probably bypass Children.toArray if we have explicit keys,
      // but Children.toArray is useful for flattening.
      // A better approach for Each is to return the mapped array directly if we have keys.
      
      const key = keyFn ? keyFn(item, index) : index;
      return <Fragment key={key}>{element}</Fragment>;
    })
  );
};
