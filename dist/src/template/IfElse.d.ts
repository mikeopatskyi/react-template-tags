import { FC } from 'react';
import { LazyNode } from '../utils/render';
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
export declare const IfElse: FC<IfElseProps>;
