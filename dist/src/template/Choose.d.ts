import { FC, ReactNode } from 'react';
import { LazyNode } from '../utils/render';
export interface WhenProps {
    condition: boolean | undefined | null;
    children: LazyNode;
}
export interface OtherwiseProps {
    children: LazyNode;
}
export interface ChooseProps {
    children: ReactNode;
}
/**
 * Choose component (Switch with boolean conditions).
 * Renders the first <When /> block with a true condition.
 * Defaults to <Otherwise />.
 *
 * @example
 * <Choose>
 *   <When condition={score > 10}>High</When>
 *   <When condition={score > 5}>Medium</When>
 *   <Otherwise>Low</Otherwise>
 * </Choose>
 */
export declare const Choose: FC<ChooseProps> & {
    When: FC<WhenProps>;
    Otherwise: FC<OtherwiseProps>;
};
