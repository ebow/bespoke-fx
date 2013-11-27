[![Build Status](https://secure.travis-ci.org/ebow/bespoke-fx.png?branch=master)](https://travis-ci.org/ebow/bespoke-fx)

# bespoke-fx

CSS slide transitions for bespoke.js

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/ebow/bespoke-fx/master/dist/bespoke-fx.min.js
[max]: https://raw.github.com/ebow/bespoke-fx/master/dist/bespoke-fx.js

## Usage

First, include both `bespoke.js` and `bespoke-fx.js` in your page.

Then, simply include the plugin when instantiating your presentation.

```js
bespoke.horizontal.from('article', {
  fx: true
});
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

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
