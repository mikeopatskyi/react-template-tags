import { FC, ReactNode } from 'react';
export interface WhileProps {
    condition: boolean;
    children: ReactNode;
}
/**
 * @deprecated Use <If /> instead. 'While' suggests a loop, but this component only conditionally renders once.
 * For lists, use <Each />.
 */
export declare const While: FC<WhileProps>;
