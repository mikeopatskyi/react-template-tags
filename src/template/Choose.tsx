import { Children, FC, ReactElement, ReactNode, isValidElement } from 'react';
import { LazyNode, resolveLazy } from '../utils/render';

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
export const Choose: FC<ChooseProps> & {
  When: FC<WhenProps>;
  Otherwise: FC<OtherwiseProps>;
} = ({ children }) => {
  let match: ReactNode | null = null;
  let otherwise: ReactNode | null = null;

  Children.forEach(children, (child) => {
    if (match) return;
    if (!isValidElement(child)) return;

    if (child.type === Choose.When) {
      if ((child.props as WhenProps).condition) {
        match = resolveLazy((child.props as WhenProps).children);
      }
    } else if (child.type === Choose.Otherwise) {
      otherwise = resolveLazy((child.props as OtherwiseProps).children);
    }
  });

  return (match || otherwise || null) as ReactNode;
};

Choose.When = ({ children }) => <>{resolveLazy(children)}</>;
Choose.Otherwise = ({ children }) => <>{resolveLazy(children)}</>;
