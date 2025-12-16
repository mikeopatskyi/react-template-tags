import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Switch, Each } from '../../../index';
describe('Switch', () => {
    it('renders matching case', () => {
        render(_jsxs(Switch, { value: "b", children: [_jsx(Switch.Case, { value: "a", children: "A" }), _jsx(Switch.Case, { value: "b", children: "B" }), _jsx(Switch.Default, { children: "Default" })] }));
        expect(screen.getByText('B')).toBeInTheDocument();
        expect(screen.queryByText('A')).not.toBeInTheDocument();
    });
    it('renders default if no match', () => {
        render(_jsxs(Switch, { value: "x", children: [_jsx(Switch.Case, { value: "a", children: "A" }), _jsx(Switch.Default, { children: "Default" })] }));
        expect(screen.getByText('Default')).toBeInTheDocument();
    });
    it('lazy evaluates children', () => {
        const spyInfoA = vi.fn();
        const spyInfoB = vi.fn();
        render(_jsxs(Switch, { value: "b", children: [_jsx(Switch.Case, { value: "a", children: () => { spyInfoA(); return 'A'; } }), _jsx(Switch.Case, { value: "b", children: () => { spyInfoB(); return 'B'; } })] }));
        expect(spyInfoB).toHaveBeenCalled();
        expect(spyInfoA).not.toHaveBeenCalled();
    });
});
describe('Each', () => {
    it('renders list items', () => {
        const items = ['a', 'b', 'c'];
        render(_jsx(Each, { of: items, render: (item) => _jsx("div", { children: item }, item) }));
        expect(screen.getByText('a')).toBeInTheDocument();
        expect(screen.getByText('b')).toBeInTheDocument();
        expect(screen.getByText('c')).toBeInTheDocument();
    });
    it('renders list items with custom keyFn', () => {
        const items = [{ id: 1, val: 'a' }, { id: 2, val: 'b' }];
        render(_jsx(Each, { of: items, keyFn: (item) => item.id, render: (item) => _jsx("div", { children: item.val }) }));
        expect(screen.getByText('a')).toBeInTheDocument();
        expect(screen.getByText('b')).toBeInTheDocument();
    });
    it('renders fallback when empty', () => {
        render(_jsx(Each, { of: [], render: () => 'Item', fallback: "Empty" }));
        expect(screen.getByText('Empty')).toBeInTheDocument();
    });
    it('renders fallback when null', () => {
        render(_jsx(Each, { of: null, render: () => 'Item', fallback: "Empty" }));
        expect(screen.getByText('Empty')).toBeInTheDocument();
    });
});
//# sourceMappingURL=Collections.test.js.map