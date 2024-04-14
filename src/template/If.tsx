import { FC, ReactNode } from 'react';

interface IfProps {
  condition: boolean;
  children: ReactNode;
}

/**
 * If component.
 *
 * This component renders its children only if the provided condition is true.
 *
 * @param {IfProps} props - The props object containing the condition and children.
 * @param {boolean} props.condition - The condition to check.
 * @param {ReactNode} props.children - The children to render.
 * @returns {ReactNode | null} The rendered children or null.
 */
export const If: FC<IfProps> = ({ condition, children }): ReactNode | null => {
  /**
   * Renders the children if the condition is true, otherwise returns null.
   *
   * @returns {ReactNode | null} The rendered children or null.
   */
  return condition ? children : null;
};
