import { FC, ReactNode } from 'react';
import { LazyNode, resolveLazy } from '../utils/render';

export interface IfElseProps {
  condition: boolean | undefined | null;
  children: LazyNode;
  elseChildren: LazyNode;
}

/**
 * Component that renders its children if the condition is true,
 * otherwise renders elseChildren.
 * 
 * Supports lazy evaluation for both branches.
 */
export const IfElse: FC<IfElseProps> = ({ condition, children, elseChildren }) => {
  return condition ? resolveLazy(children) : resolveLazy(elseChildren);
};
