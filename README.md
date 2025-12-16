# react-template-tags

**Lightweight, type-safe control flow components for React.**

[![npm version](https://img.shields.io/npm/v/react-template-tags.svg)](https://www.npmjs.com/package/react-template-tags)
[![License](https://img.shields.io/npm/l/react-template-tags.svg)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue.svg)](https://www.typescriptlang.org/)

Replace cluttered ternary operators (`? :`) and short-circuit logic (`&&`) with readable, declarative tags.

## ✨ Features

- **Zero Dependencies**: < 2kb minified.
- **Strictly Typed**: Full TypeScript support with proper narrowing.
- **Lazy Evaluation**: Supports function children to prevent unnecessary renders.
- **SSR Safe**: Compatible with Next.js, Remix, and standard SSR.
- **Modern**: React 18+ (and React 19 ready).

## 🚀 Quickstart

```bash
npm install react-template-tags
```

```tsx
import { If, Switch, Each } from 'react-template-tags';

function App({ user, items, status }) {
  return (
    <>
      <If condition={user.isLoggedIn}>
        <UserWelcome user={user} />
      </If>

      <Switch value={status}>
        <Switch.Case value="loading"><Spinner /></Switch.Case>
        <Switch.Case value="error"><Error /></Switch.Case>
        <Switch.Default>
          <Each 
            of={items} 
            keyFn={item => item.id}
            render={item => <ItemCard item={item} />} 
            fallback={<EmptyState />}
          />
        </Switch.Default>
      </Switch>
    </>
  );
}
```

## 📚 Documentation

- [**Introduction**](./docs/01-introduction.md) - Why use this?
- [**Components**](./docs/02-components.md) - API Reference for `If`, `Show`, `Switch`, `Each`, etc.
- [**Guides**](./docs/03-guides.md) - TypeScript, SSR, and Performance.

## 📦 Core Components

| Component | Description |
|-----------|-------------|
| `<If>` | Render children if condition is true. |
| `<IfElse>` | Render children (true) or elseChildren (false). |
| `<Show>` / `<Choose>` | Declarative `switch (true)` logic. |
| `<Switch>` | Declarative `switch (value)` logic. |
| `<Each>` | Safe list iteration with empty fallback. |
| `<Maybe>` | Null-safe rendering helper. |
| `<Await>` | Promise resolution helper. |
| `<Guard>` | Assertion-based rendering. |

## 🤝 Contributing

Issues and Pull Requests are welcome!

## License

MIT © [Mike Opatskyi](https://github.com/mikeopatskyi)
