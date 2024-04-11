import { ReactNode } from 'react';

interface SwitchProps {
  value: string | number;
  cases: { [key: string]: ReactNode };
  defaultCase?: ReactNode;
}

export const Switch: React.FC<SwitchProps> = ({ value, cases, defaultCase }): ReactNode =>
  cases[value] || defaultCase;
