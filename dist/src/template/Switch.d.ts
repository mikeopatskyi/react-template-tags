import { FC, ReactNode } from 'react';
import { LazyNode } from '../utils/render';
export interface CaseProps {
    value: any;
    children: LazyNode;
}
export interface DefaultProps {
    children: LazyNode;
}
export interface SwitchProps {
    value: any;
    children: ReactNode;
}
/**
 * Switch component for declarative conditional rendering.
 *
 * @example
 * <Switch value={status}>
 *   <Case value="loading"><Spinner /></Case>
 *   <Case value="success"><Content /></Case>
 *   <Default><Error /></Default>
 * </Switch>
 */
export declare const Switch: FC<SwitchProps> & {
    Case: FC<CaseProps>;
    Default: FC<DefaultProps>;
};
