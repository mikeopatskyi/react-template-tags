import { Children, FC, ReactElement, ReactNode, isValidElement } from 'react';
import { LazyNode, resolveLazy } from '../utils/render';

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
export const Show: FC<ShowProps> & {
  When: FC<WhenProps>;
  Else: FC<ElseProps>;
} = ({ children }) => {
  let when: ReactNode | null = null;
  let otherwise: ReactNode | null = null;

  Children.forEach(children, (child) => {
    // If we already found a match, stop looking (optimization not possible with forEach, but we ignore subsequent)
    if (when) return;

    if (!isValidElement(child)) return;

    // Check for When component
    // We check the type directly if possible, or assume based on props for flexibility if minified? 
    // Checking `type` is safer.
    if (child.type === Show.When) {
      if ((child.props as WhenProps).isTrue) {
        when = resolveLazy((child.props as WhenProps).children);
      }
    } else if (child.type === Show.Else) {
      otherwise = resolveLazy((child.props as ElseProps).render || (child.props as ElseProps).children);
    }
  });

  return (when || otherwise || null) as ReactNode;
};

Show.When = ({ children }) => <>{resolveLazy(children)}</>; // This implementation is only for fallback if used differently, but Show handles logic.
// Actually, if Show.When is rendered directly, it should probably return null or children?
// The parent `Show` decides what to render. If `Show.When` is rendered standalone, it should behaves like `If`.
// Let's make `When` functional just in case.
Show.When = ({ isTrue, children }: WhenProps) => (isTrue ? <>{resolveLazy(children)}</> : null);
Show.Else = ({ render, children }: ElseProps) => <>{resolveLazy(render || children)}</>;
