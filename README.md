# jsxlate-loader

## jsxlate

This program aids in internationalizing React applications by extracting messages from JSX sources and then rewriting the messages into bundles of translatable units. The advantage of this approach is that translators can be shown full sentences, rich in context.

Translators are presented with a sanitized version of JSX that allows them to rearrange markup but prevents them from seeing anything irrelevant or modifying anything dangerous. The developer can allow translators to change certain HTML tag attributes, if, for example, links needs to be changed to point to language-specific resources. Translators can also change add or remove simple HTML tags in case, for instance, a single italicized phrase in the source language becomes two italicized phrases in the destination language.

## loader

This is a webpack loader. Put it in your loader chain before e.g. `babel`.

```js
    { test: /\.jsx$/, loaders: ['babel', 'jsxlate-loader'] },
```

## what?

Please see [jsxlate](http://github.com/drd/jsxlate).

## license

See LICENSE file.

## author

by Eric O'Connell