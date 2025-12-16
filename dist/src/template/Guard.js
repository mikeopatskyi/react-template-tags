import { resolveLazy } from '../utils/render';
/**
 * Guard component.
 * Renders children if expectation is met.
 * Can optionally throw an error or log a warning if expectation fails.
 */
export const Guard = ({ expect, message, children, fallback, error }) => {
    if (!expect) {
        if (process.env.NODE_ENV !== 'production' && message) {
            console.warn(`Guard failed: ${message}`);
        }
        if (error) {
            throw new Error(message || 'Guard expectation failed');
        }
        return resolveLazy(fallback) || null;
    }
    return resolveLazy(children);
};
//# sourceMappingURL=Guard.js.map