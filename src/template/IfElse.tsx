import { ReactNode } from 'react';

interface IfElseProps {
  condition: boolean;
  children: ReactNode;
  elseChildren: ReactNode;
}

/**
 * Component that renders its children if the condition is true,
 * otherwise renders elseChildren.
 *
 * @param {IfElseProps} props - The component props.
 * @param {boolean} props.condition - The condition to check.
 * @param {ReactNode} props.children - The children to render if the condition is true.
 * @param {ReactNode} props.elseChildren - The children to render if the condition is false.
 * @returns {ReactNode} The rendered children.
 */
export const IfElse: React.FC<IfElseProps> = ({ condition, children, elseChildren }) => {
  /**
   * Renders the children if the condition is true,
   * otherwise renders elseChildren.
   *
   * @returns {ReactNode} The rendered children.
   */
  return condition ? children : elseChildren;
};
