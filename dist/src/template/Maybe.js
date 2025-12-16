import { resolveLazy } from '../utils/render';
/**
 * Renders children if 'of' is neither null nor undefined.
 *
 * @example
 * <Maybe of={user} fallback={<LoginLink />}>
 *   {(u) => <UserProfile user={u} />}
 * </Maybe>
 */
export const Maybe = ({ of, children, fallback }) => {
    if (of === null || of === undefined) {
        return resolveLazy(fallback) || null;
    }
    if (typeof children === 'function') {
        return children(of);
    }
    return children;
};
//# sourceMappingURL=Maybe.js.map