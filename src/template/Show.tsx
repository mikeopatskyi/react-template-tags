import { Children, FC, ReactNode, isValidElement } from 'react';

interface ShowProps {
  children: ReactNode;
}

/**
 * Component that renders its children based on the provided conditions.
 *
 * @param {ShowProps} props - The component props.
 * @param {ReactNode} props.children - The children to render.
 * @returns {ReactNode | null} The rendered children.
 */
export const Show: FC<ShowProps> & {
  /**
   * Renders the children if the provided condition is true.
   *
   * @param {object} props - The component props.
   * @param {boolean} props.isTrue - The condition to check.
   * @param {ReactNode} props.children - The children to render.
   * @returns {ReactNode | null} The rendered children.
   */
  When: ({ isTrue, children }: { isTrue: boolean; children: ReactNode }) => ReactNode;
  /**
   * Renders the children if no When component with a true condition is found.
   *
   * @param {object} props - The component props.
   * @param {ReactNode} [props.render] - The children to render.
   * @param {ReactNode} [props.children] - The children to render.
   * @returns {ReactNode | null} The rendered children.
   */
  Else: ({ render, children }: { render?: ReactNode; children?: ReactNode }) => ReactNode;
} = (props) => {
  // Initialize variables to store the rendered children
  let when: ReactNode | null = null;
  let otherwise: ReactNode | null = null;

  // Iterate over the children and find the first child with a true condition
  Children.forEach(props.children, (child) => {
    // Check if the child is a valid element and has a true condition
    if (isValidElement(child) && (child as any).props.isTrue === true) {
      // Store the child in the when variable
      when = child;
    } else {
      // Store the child in the otherwise variable
      otherwise = child;
    }
  });

  // Return the rendered children, or the otherwise children, or null if none are found
  return when || otherwise || null;
};

Show.When = ({ isTrue, children }) => (isTrue ? children : null);
Show.Else = ({ render, children }) => render || children || null;
