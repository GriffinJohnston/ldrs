# Framework Guides

## Nuxt.js

Web components can only be run on the client, so no SSR or SSG.

To add LDRS to a Nuxt project use a dynamic import in the `onMounted` Lifecycle Hook.
For convenience you can wrap your loader in a Vue component that handles the import and registration.
[`<ClientOnly>`](https://nuxt.com/docs/api/components/client-only) ensures the component will only on the client side, even with SSR.

```vue
<script setup>
onMounted(async () => {
  const { spiral } = await import('ldrs')
  spiral.register()
})
</script>

<template>
  <ClientOnly>
    <l-spiral color="coral"></l-spiral>
  </ClientOnly>
</template>
```

Then you can import and render this component in any client component.

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