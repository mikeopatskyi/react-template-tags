import { FC, ReactNode } from 'react';
import { LazyNode } from '../utils/render';
export interface WhenProps {
    isTrue: boolean | undefined | null;
    children: LazyNode;
}
export interface ElseProps {
    render?: LazyNode;
    children?: LazyNode;
}
export interface ShowProps {
    children: ReactNode;
}
/**
 * Component that renders its children based on the provided conditions.
 * It looks for `Show.When` and `Show.Else` components among its children.
 *
 * @example
 * <Show>
 *   <Show.When isTrue={data.length > 0}>
 *      <List data={data} />
 *   </Show.When>
 *   <Show.Else>
 *      <Empty />
 *   </Show.Else>
 * </Show>
 */
export declare const Show: FC<ShowProps> & {
    When: FC<WhenProps>;
    Else: FC<ElseProps>;
};
