import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Await } from '../../../index';
describe('Await', () => {
    it('resolves promise', async () => {
        const p = Promise.resolve('Success');
        render(_jsx(Await, { promise: p, fallback: "Loading", children: (data) => data }));
        expect(screen.getByText('Loading')).toBeInTheDocument();
        await waitFor(() => expect(screen.getByText('Success')).toBeInTheDocument());
    });
    it('handles rejection', async () => {
        // Suppress unhandled rejection warning in test output if needed
        const p = Promise.reject('Error');
        // We swallow the error to prevent test from failing eagerly in some envs
        p.catch(() => { });
        render(_jsx(Await, { promise: p, fallback: "Loading", error: (e) => `Failed: ${e}`, children: (data) => data }));
        await waitFor(() => expect(screen.getByText('Failed: Error')).toBeInTheDocument());
    });
});
//# sourceMappingURL=Async.test.js.map