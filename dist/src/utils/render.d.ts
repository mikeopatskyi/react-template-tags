import { ReactNode } from 'react';
export type LazyNode = ReactNode | (() => ReactNode);
/**
 * Resolves a LazyNode to a ReactNode.
 * If the node is a function, it is called.
 * Otherwise, it is returned as is.
 */
export declare const resolveLazy: (node: LazyNode) => ReactNode;
