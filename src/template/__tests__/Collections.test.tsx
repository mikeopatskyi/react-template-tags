import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Switch, Each } from '../../../index';

describe('Switch', () => {
  it('renders matching case', () => {
    render(
      <Switch value="b">
        <Switch.Case value="a">A</Switch.Case>
        <Switch.Case value="b">B</Switch.Case>
        <Switch.Default>Default</Switch.Default>
      </Switch>
    );
    expect(screen.getByText('B')).toBeInTheDocument();
    expect(screen.queryByText('A')).not.toBeInTheDocument();
  });

  it('renders default if no match', () => {
    render(
      <Switch value="x">
        <Switch.Case value="a">A</Switch.Case>
        <Switch.Default>Default</Switch.Default>
      </Switch>
    );
    expect(screen.getByText('Default')).toBeInTheDocument();
  });

  it('lazy evaluates children', () => {
    const spyInfoA = vi.fn();
    const spyInfoB = vi.fn();
    render(
      <Switch value="b">
        <Switch.Case value="a">{() => { spyInfoA(); return 'A'; }}</Switch.Case>
        <Switch.Case value="b">{() => { spyInfoB(); return 'B'; }}</Switch.Case>
      </Switch>
    );
    expect(spyInfoB).toHaveBeenCalled();
    expect(spyInfoA).not.toHaveBeenCalled();
  });
});

describe('Each', () => {
  it('renders list items', () => {
    const items = ['a', 'b', 'c'];
    render(<Each of={items} render={(item: string) => <div key={item}>{item}</div>} />);
    expect(screen.getByText('a')).toBeInTheDocument();
    expect(screen.getByText('b')).toBeInTheDocument();
    expect(screen.getByText('c')).toBeInTheDocument();
  });

  it('renders list items with custom keyFn', () => {
    const items = [{ id: 1, val: 'a' }, { id: 2, val: 'b' }];
    render(
      <Each 
        of={items} 
        keyFn={(item) => item.id}
        render={(item) => <div>{item.val}</div>} 
      />
    );
    expect(screen.getByText('a')).toBeInTheDocument();
    expect(screen.getByText('b')).toBeInTheDocument();
  });

  it('renders fallback when empty', () => {
    render(<Each of={[]} render={() => 'Item'} fallback="Empty" />);
    expect(screen.getByText('Empty')).toBeInTheDocument();
  });

  it('renders fallback when null', () => {
    render(<Each of={null} render={() => 'Item'} fallback="Empty" />);
    expect(screen.getByText('Empty')).toBeInTheDocument();
  });
});
