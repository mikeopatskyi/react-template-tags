import { ReactNode } from 'react';
import React = require('react');

interface WhileProps {
  condition: boolean;
  children: React.ReactNode;
}

/**
 * While component.
 *
 * Renders its children recursively while the condition is true.
 *
 * @param {WhileProps} props - The component props.
 * @param {boolean} props.condition - The condition to check.
 * @param {ReactNode} props.children - The children to render.
 * @returns {ReactNode | null} The rendered children, or null if the condition is false.
 */
export const While: React.FC<WhileProps> = ({ condition, children }): ReactNode | null => {
  /**
   * Renders the children recursively if the condition is true.
   *
   * @returns {ReactNode | null} The rendered children, or null if the condition is false.
   */
  return condition ? <>{children}</> : null;
};
