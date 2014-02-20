[![Build Status](https://secure.travis-ci.org/ebow/bespoke-fx.png?branch=master)](https://travis-ci.org/ebow/bespoke-fx)

# bespoke-fx

CSS slide transitions for [bespoke.js](https://github.com/markdalgleish/bespoke.js)

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/ebow/bespoke-fx/master/dist/bespoke-fx.min.js
[max]: https://raw.github.com/ebow/bespoke-fx/master/dist/bespoke-fx.js

## Demo

[View the demo](http://ebow.github.io/bespoke-fx/) at the official [Bespoke-fx project page](http://ebow.github.io/bespoke-fx/).

## Usage

First, include both `bespoke.js` and `bespoke-fx.js` in your page.

Second, include the styles `main.css` and `animations.css`.

For example
```html
<link rel="stylesheet" href="path/to/main.css">
<link rel="stylesheet" href="path/to/animations.css">

<article>
  <section>Slide 1</section>
  <section>Slide 2</section>
  <section>Slide 3</section>
</article>

<script src="bespoke.min.js"></script>
<script src="bespoke-fx.min.js"></script>
<script src="path/to/my/script.js"></script>
```

Then, simply include the plugin when instantiating your presentation.

```js
bespoke.horizontal.from('article', {
  fx: true
});
```

You can set custom options during instatiating
```js
bespoke.vertical.from('article', {
  fx: {
    direction: "vertical",
    transition: "cube",
    reverse: true
  }
});
```

### Options
**note:** _italics_ indicate default.
<table>
  <tr>
    <td><strong>direction</strong></td><td>Animation transition direction _horizontal_ or vertical</td>
  </tr>
  <tr>
    <td><strong>transition</strong></td><td>Specific animation to use for all slides. _move_ is default see below for all transitions</td>
  </tr>
  <tr>
    <td><strong>reverse</strong></td><td>Set to `true` to force the reverse animation to run.</td>
  </tr>
</table>

### Transitions
<table>
  <tr><td>move</td><td>Moves both slides out and in evenly</td></tr>
  <tr><td>move-fade</td><td>Out slide fades in place while next slide moves in over the top</td></tr>
  <tr><td>move-both-fade</td><td>Both slides move; out slide fades</td></tr>
  <tr><td>move-different-easing</td><td>Both slides move at different speeds</td></tr>
  <tr><td>scale-down-out-move-in</td><td>Out slide scales down while next slide moves in over the top</td></tr>
  <tr><td>move-out-scale-up</td><td>Move out slide and scales up in slide</td></tr>
  <tr><td>scale-up-up</td><td>Both slides scale upwards towards you</td></tr>
  <tr><td>scale-down-up</td><td>Out slide scales downward before next slide scales upward</td></tr>
  <tr><td>glue</td></tr>
  <tr><td>flip</td></tr>
  <tr><td>fall</td></tr>
  <tr><td>newspaper</td></tr>
  <tr><td>push</td></tr>
  <tr><td>pull</td></tr>
  <tr><td>fold</td></tr>
  <tr><td>unfold</td></tr>
  <tr><td>room</td></tr>
  <tr><td>cube</td></tr>
  <tr><td>carousel</td></tr>
  <tr><td>sides</td></tr>
  <tr><td>slide</td></tr>
</table>

### Override options per slide

Use `data-bespoke-transition`, `data-bespoke-direction`, and/or `data-bespoke-reverse` on a slide to override the global options.

This is useful when you want to transition a single slide in a different way to other slides.

eg.

```html
<section data-bespoke-fx-transition="cube" data-bespoke-fx-direction="vertical" data-bespoke-fx-reverse="true">Slide</section>
```

## Package managers

### Bower

```bash
$ bower install bespoke-fx
```

### npm

```bash
$ npm install bespoke-fx
```

The bespoke-fx npm package is designed for use with [browserify](http://browserify.org/), e.g.

```js
require('bespoke');
require('bespoke-fx');
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).
Inspired by a [Codrops article](http://tympanus.net/codrops/2013/05/07/a-collection-of-page-transitions/) ([see demo](http://tympanus.net/Development/PageTransitions/))

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
