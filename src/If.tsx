import { FC, ReactNode } from 'react';

interface IfProps {
  condition: boolean;
  children: ReactNode;
}

export const If: FC<IfProps> = ({ condition, children }): ReactNode | null =>
  condition ? children : null;
