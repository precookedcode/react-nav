
# @precooked/react-nav

![Precooked Logo](https://precookedcode.com/assets/logos/logo-horizontal-dark.svg)

`@precooked/react-nav` is a flexible navigation component for React projects that supports custom styles and highlights the active navigation item based on the current route.

## Installation

```bash
npm install @precooked/react-nav
```

## Props

| Prop              | Type                | Default          | Description                                                      |
|-------------------|---------------------|------------------|------------------------------------------------------------------|
| `items`           | `NavItem[]`          | **required**      | Array of objects containing `label` and `link` for each nav item. |
| `styles`          | `React.CSSProperties`| `undefined`       | Custom styles for the nav container.                             |
| `itemStyles`      | `React.CSSProperties`| `undefined`       | Custom styles for each nav item.                                 |
| `activeItemStyles`| `React.CSSProperties`| `undefined`       | Custom styles for the active nav item.                           |
| `className`       | `string`             | `'precooked-nav'` | Custom class name for the nav container.                         |

### `NavItem` interface

```ts
interface NavItem {
    label: string;
    link: string;
}
```

## Example Usage

```tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Nav from '@precooked/react-nav';

const items = [
  { label: 'Home', link: '/' },
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
];

const App = () => (
  <Router>
    <Nav 
      items={items} 
      styles={{ backgroundColor: '#f8f9fa' }} 
      itemStyles={{ color: '#333', fontSize: '18px' }} 
      activeItemStyles={{ backgroundColor: '#007bff', color: '#fff' }} 
    />
  </Router>
);

export default App;
```

## License

MIT

---

For more information, visit [Precooked](https://precookedcode.com).
