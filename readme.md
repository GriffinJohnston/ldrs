<div align="center">
  <a href="https://uiball.com/loaders"><img src="https://github.com/GriffinJohnston/uiball-loaders/raw/main/thumbnail.png" alt="U-I Ball Loaders" 
  width="100%"
  height="auto"></a>
</div>

# Loaders

Lightweight loaders & spinners for your next React project.

- **24 Types 🎨** — Unique enough to be interesting; simple enough to use in real-world projects
- **Customizable 🖌️** — Set the size, color, line weight and animation speed to match your design
- **Tiny 🦐** — Individual loaders are ~1-1.5kb gzipped
- **No images 📷** — Built with HTML and modern CSS. A couple loaders use lightweight SVG as well

Visit the [🌐 Website](https://uiball.com/loaders) to see them all in action.

Built by [Griffin Johnston](https://twitter.com/griffinjohnston) for [UI Ball](https://uiball.com)

## Installation

**NPM**

```jsx
npm install @uiball/loaders
```

**Yarn**

```jsx
yarn add @uiball/loaders
```

## Getting Started

Import individual loader components. Use them wherever you like. The full list can be found on [the website](https://uiball.com/loaders).

```jsx
import { Waveform } from '@uiball/loaders'

export default function PageSection({ isLoading }) {
  return (
    <div aria-live="polite" aria-busy={isLoading}>
      {isLoading && <Waveform />}
    </div>
  )
}
```

## Tree Shaking

This package is designed to maximize the benefits of [tree shaking](https://developer.mozilla.org/en-US/docs/Glossary/Tree_shaking); so when you use a modern bundler like Webpack, Rollup or Parcel, and `import { Orbit } from '@uiball/loaders'` only the tiny code for the Orbit loader ends up in your app.

## Options

_Each loader has different defaults. You can see them on [the website](https://uiball.com/loaders). Click on an individual loader and open the "source" sidebar. Default values will be listed at the top, followed by HTML and CSS if you want to copy/paste rather than use the React components._

### `size: number`

This sets the size of the spinner. Specifically, it defines the largest dimension (height or width) in pixels.

```jsx
<Ring size={35} />
```

### `color: string`

This sets the color of the loader. Any valid CSS color value is accepted, so `#000000`, `red`, `hsl(13, 68%, 63%)` and `var(--my-custom-color)` are all a-okay.

```jsx
<Ring color="papayawhip" />
```

### `speed: number`

This sets the speed of the animation. Each loader uses this number a little differently (individual parts of a given loader might have different timing), but in general this number represents the duration of a single full animation loop in seconds, so smaller = faster.

```jsx
<Ring speed="1.75" />
```

### `lineWeight: number`

This sets the width / stroke in pixels of line-based loaders like `<Waveform />` or `<RaceBy />`. You can see if an individual loader supports this property on [the website](https://uiball.com/loaders).

```jsx
<MrMiyagi lineWeight="3.5" />
```

## Platform Support

This package only supports modern ESM import syntax, so no `require()`-ing.

Loaders make use of CSS custom properties (CSS variables) and keyframe animations, which work great in all modern browsers. Internet Explorer is not supported, however.

## License

MIT
