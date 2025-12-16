import { ReactNode, isValidElement } from 'react';

export type LazyNode = ReactNode | (() => ReactNode);

/**
 * Resolves a LazyNode to a ReactNode.
 * If the node is a function, it is called.
 * Otherwise, it is returned as is.
 */
export const resolveLazy = (node: LazyNode): ReactNode => {
  if (typeof node === 'function') {
    return (node as () => ReactNode)();
  }
  return node;
};
