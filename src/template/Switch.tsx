import { ReactNode } from 'react';

interface SwitchProps {
  value: string | number;
  cases: { [key: string]: ReactNode };
  defaultCase?: ReactNode;
}

/**
 * A React component that renders the corresponding ReactNode based on the given value.
 * If the value is not found in the cases object, it renders the defaultCase if provided,
 * or null if not.
 *
 * @param props - The props object containing the value, cases, and defaultCase.
 * @returns The rendered ReactNode.
 */
export const Switch: React.FC<SwitchProps> = ({ value, cases, defaultCase }): ReactNode => {
  /**
   * The value to match against the cases object.
   */
  // Destructure the props object to get the value, cases, and defaultCase.

  // Retrieve the corresponding ReactNode from the cases object based on the value.
  // If the value is not found, return the defaultCase if provided, or null if not.
  return cases[value] || defaultCase;
};
