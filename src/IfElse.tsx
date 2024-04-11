import { ReactNode } from 'react';

interface IfElseProps {
  condition: boolean;
  children: ReactNode;
  elseChildren: ReactNode;
}

export const IfElse: React.FC<IfElseProps> = ({ condition, children, elseChildren }) =>
  condition ? children : elseChildren;
