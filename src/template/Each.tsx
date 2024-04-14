import { ReactNode, Children } from 'react';

interface EachProps<T> {
  render: (item: T, index: number) => ReactNode;
  of: T[];
}

/**
 * Component that renders an array of items using a provided render function for each item.
 *
 * @template T The type of the items in the array.
 * @param {EachProps<T>} props The props object containing the render function and the array of items.
 * @return {ReactNode} The rendered array of items.
 */
export const Each = <T,>({ render, of }: EachProps<T>): ReactNode => {
  /**
   * Map function to render each item in the array.
   *
   * @param {T} item The current item being rendered.
   * @param {number} index The index of the current item being rendered.
   * @return {ReactNode} The rendered item.
   */
  const renderItem = (item: T, index: number): ReactNode => render(item, index);

  // Render the array of items using the provided render function.
  return Children.toArray(of.map(renderItem));
};
