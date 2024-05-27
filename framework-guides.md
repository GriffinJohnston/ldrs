# Framework Guides

## Next.js

Web components can only be run on the client, so no SSR or SSG. There are a few ways to go about this.

The simplest path is probably to include the CDN auto-defined loader in a script tag somewhere like a layout file. Add `defer` to your script if ESLint complains.

```jsx #8-12
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="module"
          defer
          src="https://cdn.jsdelivr.net/npm/ldrs/dist/auto/spiral.js"
        ></script>
        {children}
      </body>
    </html>
  )
}
```

Then you can add the `<l-spiral></l-spiral>` loader component wherever you'd like.

If you're using Typescript, you'll get a missing type error with this method. Fix this by importing types: `import type {} from 'ldrs'` somewhere in your app.

Another method is to use a dynamic import. For convenience you can wrap your loader in a React component that handles the import and registration.

```jsx
import { useEffect } from 'react'

export default function Loader() {
  useEffect(() => {
    async function getLoader() {
      const { spiral } = await import('ldrs')
      spiral.register()
    }
    getLoader()
  }, [])
  return <l-spiral color="coral"></l-spiral>
}
```

Then you can import and render `<Loader />` in any client component.

## Astro

To use LDRS with Astro, just import and register your loader inside of a `<script>` tag. Since you only need to register your loader(s) once, it might make sense to simply include them in the relevant layout file.

You can't import loaders in the frontmatter of your `.astro` components because frontmatter code is run on the server.

```html #3,17-21
---
const { title } = Astro.props
<!-- No put here. Bad. -->
---

<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </head>
  <body>
    <h1>{title}</h1>
    <article>
      <slot />
    </article>

    <!-- Yes put here. Good. -->
    <script>
      import { hourglass } from 'ldrs'
      hourglass.register()
    </script>
  </body>
</html>
```

Once that's done you can add the `<l-hourglass></l-hourglass>` loader component anywhere in your project.

Another option is to import and register your loader in a framework component that you tag with `client:only`. If you do this, you can use auto-defining loaders. In a React component, for example:

```jsx
import 'ldrs/reuleaux'

export default function Sidebar() {
  return <l-reuleaux size="69"></l-reuleaux> // Nice
}
```

Then, in an `.astro` file:

```jsx
<Sidebar client:only />
```

## Remix

Web components can't be run on the server, so you need to make sure your loaders are only run client-side. The easiest way to do this is to import and register your loader in `entry.client.tsx` like so:

```tsx #4-5
import { RemixBrowser } from '@remix-run/react'
import { startTransition, StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import { squircle } from 'ldrs'
squircle.register()

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>,
  )
})
```

You can then use the loader anywhere in your code:

```jsx #5
export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Welcome to Remix</h1>
      <l-squircle color="rebeccapurple"></l-squircle>
    </div>
  )
}
```

## Gatsby

Web components will throw an error if they are included in Gatsby's static builds. To get around this, just import and register your loader in `gatsby-browser.jsx/gatsby-browser.tsx`. If that file doesn't exist in your project yet, just add it to the root of your site.

```jsx
import { zoomies } from 'ldrs'
zoomies.register()
```

Once this is done, you can drop `<l-zoomies speed=".1"></l-zoomies>` into any page or component, just like regular HTML.

If your IDE can't find types with this setup, just put `import type {} from 'ldrs'` in `index.tsx` or any other page.
