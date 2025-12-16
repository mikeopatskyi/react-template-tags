import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { If, Show, Maybe, Guard, IfElse } from '../../../index';
describe('If', () => {
    it('renders children when condition is true', () => {
        render(_jsx(If, { condition: true, children: "Content" }));
        expect(screen.getByText('Content')).toBeInTheDocument();
    });
    it('renders null when condition is false', () => {
        const { container } = render(_jsx(If, { condition: false, children: "Content" }));
        expect(container).toBeEmptyDOMElement();
    });
    it('resolves lazy children', () => {
        const spy = vi.fn().mockReturnValue('Lazy Content');
        render(_jsx(If, { condition: true, children: spy }));
        expect(screen.getByText('Lazy Content')).toBeInTheDocument();
        expect(spy).toHaveBeenCalled();
    });
    it('does not resolve lazy children when false', () => {
        const spy = vi.fn();
        render(_jsx(If, { condition: false, children: spy }));
        expect(spy).not.toHaveBeenCalled();
    });
});
describe('IfElse', () => {
    it('renders children when true', () => {
        render(_jsx(IfElse, { condition: true, children: "True", elseChildren: "False" }));
        expect(screen.getByText('True')).toBeInTheDocument();
        expect(screen.queryByText('False')).not.toBeInTheDocument();
    });
    it('renders elseChildren when false', () => {
        render(_jsx(IfElse, { condition: false, children: "True", elseChildren: "False" }));
        expect(screen.getByText('False')).toBeInTheDocument();
    });
});
describe('Show', () => {
    it('renders first matching When', () => {
        render(_jsxs(Show, { children: [_jsx(Show.When, { isTrue: false, children: "A" }), _jsx(Show.When, { isTrue: true, children: "B" }), _jsx(Show.When, { isTrue: true, children: "C" }), _jsx(Show.Else, { children: "D" })] }));
        expect(screen.getByText('B')).toBeInTheDocument();
        expect(screen.queryByText('A')).not.toBeInTheDocument();
        expect(screen.queryByText('C')).not.toBeInTheDocument();
    });
    it('renders Else if no match', () => {
        render(_jsxs(Show, { children: [_jsx(Show.When, { isTrue: false, children: "A" }), _jsx(Show.Else, { children: "Else Content" })] }));
        expect(screen.getByText('Else Content')).toBeInTheDocument();
    });
});
describe('Maybe', () => {
    it('renders content for defined values', () => {
        render(_jsx(Maybe, { of: 'test', children: (val) => val }));
        expect(screen.getByText('test')).toBeInTheDocument();
    });
    it('renders fallback for null/undefined', () => {
        render(_jsx(Maybe, { of: null, fallback: "Fallback", children: () => 'Content' }));
        expect(screen.getByText('Fallback')).toBeInTheDocument();
    });
});
describe('Guard', () => {
    it('renders children if expect true', () => {
        render(_jsx(Guard, { expect: true, children: "Protected" }));
        expect(screen.getByText('Protected')).toBeInTheDocument();
    });
    it('renders fallback if expect false', () => {
        render(_jsx(Guard, { expect: false, fallback: "Blocked", children: "Protected" }));
        expect(screen.queryByText('Protected')).not.toBeInTheDocument();
        expect(screen.getByText('Blocked')).toBeInTheDocument();
    });
    it('throws if error prop is true', () => {
        // Prevent console.error from jsdom for this test
        const spy = vi.spyOn(console, 'error').mockImplementation(() => { });
        expect(() => render(_jsx(Guard, { expect: false, error: true, message: "Boom", children: "Content" }))).toThrow('Boom');
        spy.mockRestore();
    });
});
//# sourceMappingURL=ControlFlow.test.js.map