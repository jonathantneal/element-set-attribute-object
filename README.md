# Set Attribute Object

> Set multiple attributes on the current element

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-image]][lic-url]
[![Changelog][log-image]][log-url]
[![Gitter Chat][git-image]][git-url]

[Set Attribute Object] is a [hopefill](#hopefill-status) for
[`#Element.setAttribute`] which allows you to set multiple attributes using an
object.

```js
submenu.setAttribute({
    id: 'sub-1',
    ariaExpanded: false,
    ariaHidden: true,
    ariaLabelledBy: 'menu-1'
});
```

```html
<a id="menu-1">Menu 1</a>
<ul id="sub-1" aria-expanded="false" aria-hidden="true" aria-labelled-by="menu-1">
	...
</ul>
```

## Hopefill status

If you like using **setAttribute** with object support and would like to see
it in a real specification, convince [Anne van Kesteren] to add it to the
[DOM Standard].

### What is a hopefill?

A **hopefill** is a JavaScript library that implements a native-like feature
not yet found in browsers or a specification.

## Browser compatibility

| Browser           | Native Support | Polyfill Support |
| ----------------- | -------------- | ---------------- |
| Android           | ✘              | 2.2+             |
| Blackberry        | ✘              | 7+               |
| Chrome            | ✘              | 4+               |
| Edge              | ✘              | 12+              |
| Firefox           | ✘              | 3.5+             |
| Internet Explorer | ✘              | 8 - 11           |
| Opera             | ✘              | 10+              |
| Opera Mini        | ✘              | 5+               |
| Safari (iOS)      | ✘              | 3.2+             |
| Safari (MacOS)    | ✘              | 4+               |

### Test Results

Additional testing for **setAttribute** with object support is run against the
latest 3 versions of major browsers, including common outliers such as
Internet Explorer 8+ and Safari 6+.

- [Native Test]
- [Native Results]
- [Polyfilled Test]
- [Polyfilled Results]

[Set Attribute Object]: http://github.com/jonathantneal/element-set-attribute-object

[`#Element.setAttribute`]: https://dom.spec.whatwg.org/#dom-element-setattribute
[Anne van Kesteren]: https://twitter.com/annevk
[DOM Standard]: http://dom.spec.whatwg.org/
[Native Test]: http://s.codepen.io/jonneal/debug/93e1c35735830ede4b0c865888f3235d
[Native Results]: https://app.crossbrowsertesting.com/public/i76b092cd2b52b86/screenshots/z3f5aacf7023bedc315a?size=small&type=chromeless
[Polyfilled Test]: http://s.codepen.io/jonneal/debug/2214e59a841e44f9c381f52180e9e029
[Polyfilled Results]: https://app.crossbrowsertesting.com/public/i76b092cd2b52b86/screenshots/z9b824985e37ebf1e6ca?size=small&type=chromeless

[npm-url]: https://www.npmjs.com/package/element-set-attribute-object
[npm-img]: https://img.shields.io/npm/v/element-set-attribute-object.svg?style=flat-square
[cli-url]: https://travis-ci.org/jonathantneal/element-set-attribute-object
[cli-img]: https://img.shields.io/travis/jonathantneal/element-set-attribute-object.svg?style=flat-square
[lic-url]: LICENSE.md
[lic-image]: https://img.shields.io/npm/l/element-set-attribute-object.svg?style=flat-square
[log-url]: CHANGELOG.md
[log-image]: https://img.shields.io/badge/changelog-md-blue.svg?style=flat-square
[git-url]: https://gitter.im/jonathantneal/element-set-attribute-object
[git-image]: https://img.shields.io/badge/chat-gitter-blue.svg?style=flat-square
