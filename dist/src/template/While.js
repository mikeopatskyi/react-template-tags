import { jsx as _jsx } from "react/jsx-runtime";
import { If } from './If';
/**
 * @deprecated Use <If /> instead. 'While' suggests a loop, but this component only conditionally renders once.
 * For lists, use <Each />.
 */
export const While = (props) => {
    return _jsx(If, { ...props });
};
//# sourceMappingURL=While.js.map