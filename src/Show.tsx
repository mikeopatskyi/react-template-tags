import { Children, FC, ReactNode, isValidElement } from 'react';

interface ShowProps {
  children: ReactNode;
}

export const Show: FC<ShowProps> & {
  When: ({ isTrue, children }: { isTrue: boolean; children: ReactNode }) => ReactNode;
  Else: ({ render, children }: { render?: ReactNode; children?: ReactNode }) => ReactNode;
} = (props) => {
  let when: ReactNode | null = null;
  let otherwise: ReactNode | null = null;

  Children.forEach(props.children, (child) => {
    isValidElement(child) && (child as any).props.isTrue === true
      ? (when = child)
      : (otherwise = child);
  });

  return when || otherwise || null;
};

Show.When = ({ isTrue, children }) => (isTrue ? children : null);
Show.Else = ({ render, children }) => render || children || null;
