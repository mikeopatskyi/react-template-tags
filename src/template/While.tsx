import { FC, ReactNode } from 'react';
import { If } from './If';

export interface WhileProps {
  condition: boolean;
  children: ReactNode;
}

/**
 * @deprecated Use <If /> instead. 'While' suggests a loop, but this component only conditionally renders once.
 * For lists, use <Each />.
 */
export const While: FC<WhileProps> = (props) => {
  return <If {...props} />;
};
