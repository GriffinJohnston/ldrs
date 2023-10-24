# Why web components?

_TL;DR — Works with every framework, native, standards-based, future-proof._

The prior versions of this library were React only. I love React and continue to use it daily, but there are a ton of great frameworks and libraries out there, and those communities also deserve to load in style.

In looking for a solution that wouldn't require authoring separate versions for every single framework, web components quickly emerged as the obvious choice. The power of a reactive JS framework... without a framework? Compatible with basically everything? Sign me up!

## But I heard WC don't work with SSR!

That's being [worked on](https://developer.chrome.com/en/articles/declarative-shadow-dom/), but _is_ a limitation for now. Libraries like [Lit](https://lit.dev/) can provide SSR support, but no one wants to add an entire extra framework just to insert some loading animations (even a framework as lightweight as Lit).

Is any of this a problem? Nope! LDRS don't need to be rendered server-side. They're tiny and efficient, and they load and render super fast on the client. So we don't use Lit or any other framework.

## What about browser support?

Web components [_have arrived_](https://caniuse.com/?search=web%20components). No IE 11 support though. Sorry not sorry.

## Give 'em a try!

Web components aren't a magic solution to all the world's framework woes, and I don't think they'll be replacing the current big frameworks any time soon, but they're a fantastic way to distribute small, self-contained bits of functionality that can be used with every framework. LDRS is a great way to dip your toes in.
