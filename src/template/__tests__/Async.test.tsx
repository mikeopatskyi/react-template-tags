import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Await } from '../../../index';

describe('Await', () => {
  it('resolves promise', async () => {
    const p = Promise.resolve('Success');
    render(<Await promise={p} fallback="Loading">{(data: string) => data}</Await>);
    expect(screen.getByText('Loading')).toBeInTheDocument();
    await waitFor(() => expect(screen.getByText('Success')).toBeInTheDocument());
  });

  it('handles rejection', async () => {
    // Suppress unhandled rejection warning in test output if needed
    const p = Promise.reject('Error');
    // We swallow the error to prevent test from failing eagerly in some envs
    p.catch(() => {});
    
    render(
      <Await 
        promise={p} 
        fallback="Loading" 
        error={(e: any) => `Failed: ${e}`} 
      >
        {(data: any) => data}
      </Await>
    );
    
    await waitFor(() => expect(screen.getByText('Failed: Error')).toBeInTheDocument());
  });
});
