# React useTypewriter

<!-- [NPM Repository](https://www.npmjs.com/package/use-typewriter-hook) -->

## Installation

You can install React useTypewriter with one simple command

```shell

# with npm
npm i @bsherman-dev/use-typewriter

```

## Options

| Name      | Type               | Default value  | Description                                                     |
| --------- | ------------------ | -------------- | --------------------------------------------------------------- |
| text      | String or String[] | "Hello World!" | Strings to type out when using this tool.                       |
| direction | String             | "forward"      | Option for whether to type or delete the characters of the text |
| repeat    | Number             | 0              | The number of times for the animation to repeat                 |
| speed     | Number             | 200            | The delay between each character when typing.                   |

## Examples

### Basic example

```jsx
import useTypewriter from '@bsherman-dev/use-typewriter';
import './App.css';

function App() {
  const message = useTypewriter();
  return <h1>{message}</h1>;
}

export default App;
```

<!-- Add video clip here -->

### Custom cursor with multiple strings being looped

```jsx
import React from 'react';
import useTypewriter from '@bsherman-dev/use-typewriter';

function App() {
  const languages = ['HTML.', 'CSS.', 'JavaScript.'];
  const message = useTypewriter({
    text: languages,
    direction: 'both',
    repeat: -1,
    speed: 100,
  });
  return <h1>Hi! I like to code in {message}</h1>;
}

export default App;
```

<!-- Add video clip here -->

<!-- ## CSS file for styling for four examples above -->
