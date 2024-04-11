## Documentation

### Each Component

The `Each` component iterates over an array and renders each item using the provided render function.

```jsx
import { Each } from 'react-templates-tags';

<Each of={[1, 2, 3]} render={(item, index) => <p key={index}>{item}</p>} />;
```

### If Component

The `If` component renders its children only if the condition is true.

```jsx
import { If } from 'react-templates-tags';

<If condition={true}>
  <p>This will be rendered if the condition is true.</p>
</If>;
```

### IfElse Component

The `IfElse` component renders either children or elseChildren based on the condition.

```jsx
import { IfElse } from 'react-templates-tags';

<IfElse condition={true}>
  <p>This will be rendered if the condition is true.</p>
  <p>Otherwise, this will be rendered.</p>
</IfElse>;
```

### Show Component

The `Show` component renders the first child with `isTrue` set to true, or the last child if none match.

```jsx
import { Show } from 'react-templates-tags';

<Show>
  <Show.When isTrue={true}>
    <p>This will be rendered if isTrue is true.</p>
  </Show.When>
  <Show.Else>
    <p>This will be rendered if isTrue is false.</p>
  </Show.Else>
</Show>;
```

### Switch Component

The `Switch` component renders the case corresponding to the provided value or the default case if specified.

```jsx
import { Switch } from 'react-templates-tags';

<Switch
  value={'two'}
  cases={{ one: <p>Case One</p>, two: <p>Case Two</p> }}
  defaultCase={<p>Default Case</p>}
/>;
```

### While Component

The `While` component renders its children as long as the condition is true.

```jsx
import { While } from 'react-templates-tags';

<While condition={true}>
  <p>This will be rendered as long as the condition is true.</p>
</While>;
```
