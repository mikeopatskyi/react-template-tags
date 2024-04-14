## Installation

You can install this package using `npm`:

```sh
npm install react-template-tags
```

## Template Tags

Template tags are reusable components in React that simplify common patterns like conditional rendering, iteration, and more. They provide a declarative way to express logic in JSX, improving code readability and maintainability.

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

# Utility Functions

This package contains a collection of utility functions for common tasks in JavaScript/TypeScript development.

## Usage

```javascript
import {
  classNames,
  stripTags,
  isClient,
  isEmpty,
  toCamelCase,
  randomIntFromInterval,
  uid,
} from '@your-package-name/utils';

// Usage examples
const combinedClassNames = classNames('button', 'primary', { active: isActive });
const cleanString = stripTags('<p>Hello, <b>world</b>!</p>');
const isBrowser = isClient;
const emptyCheck = isEmpty([]);
const camelCaseString = toCamelCase('hello world');
const randomNum = randomIntFromInterval(1, 10);
const uniqueId = uid(8);
```

### `classNames(...args: (string | undefined | null)[]): string`

Concatenates multiple class names into a single string, filtering out any falsy values and removing extra spaces.

- `args`: Class names to concatenate.
- Returns: Concatenated string of class names.

### `stripTags(str: string): string`

Removes HTML tags from a given string.

- `str`: The string from which to remove HTML tags.
- Returns: The modified string with HTML tags removed.

### `isClient(): boolean`

Checks if the current environment is a client-side environment.

- Returns: True if the current environment is a client-side environment, false otherwise.

### `isEmpty(value: any): boolean`

Checks if a given value is empty.

- `value`: The value to check.
- Returns: True if the value is empty, false otherwise.

### `toCamelCase(input: string): string`

Transforms a string from a space-separated format to camel case.

- `input`: The input string to be transformed.
- Returns: The transformed string in camel case.

### `randomIntFromInterval(min: number = 1, max: number = 5): number`

Generates a random integer between a given minimum and maximum value (inclusive).

- `min`: The minimum value of the range (default is 1).
- `max`: The maximum value of the range (default is 5).
- Returns: A random integer between min and max.

### `uid(length: number = 5): string`

Generates a unique identifier (UID) of a specified length.

- `length`: The length of the UID. Default is 5.
- Returns: The generated UID.
