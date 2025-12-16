# Components Reference

## Core Control Flow

### `<If>`

Conditionally renders its children.

**Props:**
- `condition`: `boolean | undefined | null`
- `children`: `ReactNode | () => ReactNode` (Lazy evaluation supported)

```tsx
<If condition={isLoggedIn}>
  <UserMenu />
</If>
```

### `<IfElse>`

Renders children if true, `elseChildren` otherwise.

**Props:**
- `condition`: `boolean | undefined | null`
- `children`: `ReactNode | () => ReactNode`
- `elseChildren`: `ReactNode | () => ReactNode`

```tsx
<IfElse 
  condition={isLoggedIn}
  children={() => <UserMenu />}
  elseChildren={() => <LoginButton />}
/>
```

### `<Show>` / `<Choose>`

Declarative switch for boolean conditions. Picks the first `<When>` that matches.

**Subcomponents:**
- `<Show.When isTrue={boolean}>`
- `<Show.Else>`

```tsx
<Show>
  <Show.When isTrue={isAdmin}>
    <AdminDashboard />
  </Show.When>
  <Show.When isTrue={isUser}>
    <UserDashboard />
  </Show.When>
  <Show.Else>
    <GuestView />
  </Show.Else>
</Show>
```

### `<Switch>`

Value-matching switch. Picks the first `<Case>` that matches the value.

**Props:**
- `value`: `any`

**Subcomponents:**
- `<Switch.Case value={any}>`
- `<Switch.Default>`

```tsx
<Switch value={status}>
  <Switch.Case value="loading">Loading...</Switch.Case>
  <Switch.Case value="success">Success!</Switch.Case>
  <Switch.Default>Idle</Switch.Default>
</Switch>
```

## Lists & Async

### `<Each>`

Iterates over a list. Safely handles empty/null arrays.

**Props:**
- `of`: `T[] | undefined | null`
- `render`: `(item: T, index: number) => ReactNode`
- `fallback`: `ReactNode` (Rendered if list is empty/null)
- `keyFn`: `(item: T, index: number) => string | number` (Optional, for stable keys)

```tsx
<Each 
  of={users} 
  keyFn={user => user.id}
  render={user => <UserCard user={user} />}
  fallback={<NoUsers />}
/>
```

### `<Await>`

Resolves a promise. Note: On SSR, this will render `fallback` continuously unless you use a framework that supports suspense/streaming properties passed here.

**Props:**
- `promise`: `Promise<T>`
- `children`: `(data: T) => ReactNode`
- `fallback`: `ReactNode`
- `error`: `(err: any) => ReactNode`

```tsx
<Await promise={myDataPromise} fallback={<Skeleton />}>
  {data => <Display data={data} />}
</Await>
```

## Utilities

### `<Maybe>`

Renders children if `of` is not null/undefined.

```tsx
<Maybe of={user}>
  {u => <div>Hello {u.name}</div>}
</Maybe>
```

### `<Guard>`

Renders content only if the expectation is met. Can optionally throw errors (useful for error boundaries).

```tsx
<Guard expect={hasPermission} fallback={<AccessDenied />}>
  <ProtectedContent />
</Guard>
```
