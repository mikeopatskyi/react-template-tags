/**
 * Resolves a LazyNode to a ReactNode.
 * If the node is a function, it is called.
 * Otherwise, it is returned as is.
 */
export const resolveLazy = (node) => {
    if (typeof node === 'function') {
        return node();
    }
    return node;
};
//# sourceMappingURL=render.js.map