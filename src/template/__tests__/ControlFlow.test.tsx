import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { If, Show, Maybe, Guard, IfElse } from '../../../index';

describe('If', () => {
  it('renders children when condition is true', () => {
    render(<If condition={true}>Content</If>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('renders null when condition is false', () => {
    const { container } = render(<If condition={false}>Content</If>);
    expect(container).toBeEmptyDOMElement();
  });

  it('resolves lazy children', () => {
    const spy = vi.fn().mockReturnValue('Lazy Content');
    render(<If condition={true}>{spy}</If>);
    expect(screen.getByText('Lazy Content')).toBeInTheDocument();
    expect(spy).toHaveBeenCalled();
  });

  it('does not resolve lazy children when false', () => {
    const spy = vi.fn();
    render(<If condition={false}>{spy}</If>);
    expect(spy).not.toHaveBeenCalled();
  });
});

describe('IfElse', () => {
  it('renders children when true', () => {
    render(<IfElse condition={true} children="True" elseChildren="False" />);
    expect(screen.getByText('True')).toBeInTheDocument();
    expect(screen.queryByText('False')).not.toBeInTheDocument();
  });

  it('renders elseChildren when false', () => {
    render(<IfElse condition={false} children="True" elseChildren="False" />);
    expect(screen.getByText('False')).toBeInTheDocument();
  });
});

describe('Show', () => {
  it('renders first matching When', () => {
    render(
      <Show>
        <Show.When isTrue={false}>A</Show.When>
        <Show.When isTrue={true}>B</Show.When>
        <Show.When isTrue={true}>C</Show.When>
        <Show.Else>D</Show.Else>
      </Show>
    );
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.queryByText('A')).not.toBeInTheDocument();
    expect(screen.queryByText('C')).not.toBeInTheDocument();
  });

  it('renders Else if no match', () => {
    render(
      <Show>
        <Show.When isTrue={false}>A</Show.When>
        <Show.Else>Else Content</Show.Else>
      </Show>
    );
    expect(screen.getByText('Else Content')).toBeInTheDocument();
  });
});

describe('Maybe', () => {
  it('renders content for defined values', () => {
    render(<Maybe of={'test'}>{(val: string) => val}</Maybe>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  it('renders fallback for null/undefined', () => {
    render(<Maybe of={null} fallback="Fallback" children={() => 'Content'} />);
    expect(screen.getByText('Fallback')).toBeInTheDocument();
  });
});

describe('Guard', () => {
  it('renders children if expect true', () => {
    render(<Guard expect={true}>Protected</Guard>);
    expect(screen.getByText('Protected')).toBeInTheDocument();
  });

  it('renders fallback if expect false', () => {
    render(<Guard expect={false} fallback="Blocked">Protected</Guard>);
    expect(screen.queryByText('Protected')).not.toBeInTheDocument();
    expect(screen.getByText('Blocked')).toBeInTheDocument();
  });

  it('throws if error prop is true', () => {
    // Prevent console.error from jsdom for this test
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<Guard expect={false} error message="Boom">Content</Guard>)).toThrow('Boom');
    spy.mockRestore();
  });
});
