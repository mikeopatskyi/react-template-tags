import { Children, FC, ReactElement, ReactNode, isValidElement } from 'react';
import { LazyNode, resolveLazy } from '../utils/render';

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
export const Switch: FC<SwitchProps> & {
  Case: FC<CaseProps>;
  Default: FC<DefaultProps>;
} = ({ value, children }) => {
  let match: ReactNode | null = null;
  let defaultCase: ReactNode | null = null;

  Children.forEach(children, (child) => {
    if (match) return; // Already found a match
    if (!isValidElement(child)) return;

    if (child.type === Switch.Case) {
      if ((child.props as CaseProps).value === value) {
        match = resolveLazy((child.props as CaseProps).children);
      }
    } else if (child.type === Switch.Default) {
      defaultCase = resolveLazy((child.props as DefaultProps).children);
    }
  });

  return (match || defaultCase || null) as ReactNode;
};

Switch.Case = ({ children }) => <>{resolveLazy(children)}</>;
Switch.Default = ({ children }) => <>{resolveLazy(children)}</>;
