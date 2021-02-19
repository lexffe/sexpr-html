# sexpr-html

Library for transforming S-Expressions into DOM nodes in JavaScript (via tagged templates).

## Why this project? (Opinionated.)

XML and its derivatives are clumsy to write, and inefficient to store.

When ES6 was released, template literals and tagged templates were introduced. This new syntax sparked a new programming styles for JavaScript, namely using tagged templates for markup. Libraries such as `developit/htm` and `WebReflection/hyperHTML` were introduced, while the development of `Polymer` shifted to `Lit-HTML` and `LitElement`, which utilises the new syntax for both HTML and CSS markups.

Much like JSX, these libraries intend to embed markup into JavaScript logic. But unlike JSX, your codebase does not necessarily need to be transpiled since it is pure ES6 JavaScript.

Although most of the modern JS frontend libraries still rely on using XML/HTML as markup (namely React's JSX and Vue.js' `.vue` files),

There are different tools that mitigates with this issue in modern web development, such as using `hyperscript`, which delivers a function-like markup interface for creating DOM nodes, or [`scalatags`](https://lihaoyi.github.io/scalatags), where the interface exists as a Scala DSL.

## Why S-Expressions?

_Trees & nodes..._

S-Expression maps quite nicely to XML as both are tree-type data structures.

S-Expression, however, does not require you to

## Ref

- [SXML - Wikipedia](https://en.wikipedia.org/wiki/SXML)
  - [SXML](http://okmij.org/ftp/Scheme/SXML.html)

## Supported environments / runtimes

- Browser (DOMParser/XMLParser)

## Planned environments / runtimes

_(there is no reason why this would not work in any other environment...)_

- Node.js (Through `jsdom`)
- Deno (Through `deno-dom-wasm`, experimental?)

A toy I made to transform s-expressions into HTML.

```javascript

const markup = h`
  (html (@ (lang "en"))

    (head
      (title "hello, lisp!")
      (script
        (@ (src "https://cdnjs.cloudflare.com/ajax/libs/vue/3.0.2/vue.cjs.prod.min.js"))
      )
    )

    (body
      (h1 "Hello, Lisp!")
      (p "paragraph")
      (div 
        (@ (class "medium green"))
        (h2 "No more XML/HTML!")
      )
    )
  )
`;

```
