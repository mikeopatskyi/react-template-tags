# Introduction

`react-template-tags` is a lightweight, dependency-free React library that provides declarative control flow components. It aims to make your JSX more readable and expressive by replacing complex ternary operators and short-circuit logic with semantic tags.

## Goals

1.  **Readability**: Make conditional rendering and iteration read like a template.
2.  **Safety**: Strict TypeScript typing and SSR safety.
3.  **Performance**: Support for lazy evaluation to avoid unnecessary computations.
4.  **Zero Dependencies**: Keep your bundle size small.

## Why use this over Ternaries?

Ternaries are great for simple conditions, but they can become hard to read when nested or when rendering complex logic.

**Ternary Hell:**

```jsx
{isLoading ? (
  <Spinner />
) : error ? (
  <ErrorDisplay error={error} />
) : data && data.length > 0 ? (
  data.map(item => <Item key={item.id} item={item} />)
) : (
  <EmptyState />
)}
```

**Template Tags:**

```jsx
<Switch value={status}>
  <Switch.Case value="loading"><Spinner /></Switch.Case>
  <Switch.Case value="error"><ErrorDisplay error={error} /></Switch.Case>
  <Switch.Case value="success">
    <Each of={data} fallback={<EmptyState />} render={item => 
      <Item key={item.id} item={item} />
    } />
  </Switch.Case>
</Switch>
```

The intent is clearer, and the structure is more maintainable.
