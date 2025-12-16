# Guides

## TypeScript Support

This library is written in TypeScript and ships with full type definitions.

### Narrowing with `<Maybe>`

The `<Maybe>` component will narrow the type of its children callback.

```tsx
const user: User | null = getUser();

// 'u' is inferred as 'User' (non-null) here
<Maybe of={user}>
  {u => <UserProfile user={u} />}
</Maybe>
```

### Type Inference in `<Each>`

The `render` prop in `<Each>` correctly infers the type of the item from the array passed to `of`.

```tsx
<Each of={['a', 'b']} render={item => 
  // item is string
  <div>{item}</div>
} />
```

## Server-Side Rendering (SSR)

All components are designed to be SSR-safe.

- **Deterministic**: No random IDs generated during render (unless you explicitly use the `uid` utility improperly).
- **Hydration**: Components like `<If>` and `<Switch>` render consistently on server and client.

### A Note on `<Await>`

The `<Await>` component resolves promises using `useEffect`. This means:
1.  **On Server**: It will render the `fallback` immediately. It does **not** suspend the server renderer.
2.  **On Client**: It will mount, see the promise is pending (or start it), and then update when resolved.

For Next.js App Router or advanced SSR patterns, you might prefer standard React Suspense or `use` hook, but `<Await>` is a great lightweight alternative for client-side data fetching or legacy apps.

## Lazy Evaluation

Performance is a key goal. You can pass functions as children to most control flow components to prevent premature evaluation.

**Bad (Eager Evaluation):**
```tsx
// <ExpensiveComponent /> is created/executed even if condition is false!
<If condition={false}>
  <ExpensiveComponent />
</If>
```

**Good (Lazy Evaluation):**
```tsx
// <ExpensiveComponent /> is ONLY executed if condition is true.
<If condition={true}>
  {() => <ExpensiveComponent />}
</If>
```
