# asomado.js (v1.0.4)

Asomado is a tiny javascript plugin to lazy-add a class into elements when they appear in the viewport.

Since `CSS` is mature enough to manage all animations, this plugin is in charge of only adding a css class in order to delegate the rest to the project css or javascript.

## Features

- 100% performance with plain javascript (no jQuery).
- Simplicity and lightness (just lazy adding of classes, no special cases).
- Heavily tested on various devices, browsers and OS versions.

## Installation

### File include
You can download the latest [release](https://github.com/roura356a/asomado/releases) and include the `asomado.js` file as follows in your page:
```
<script src="javascript/asomado.js" type="text/javascript"></script>
```

### NPM
```
$ npm install asomado
```

## Documentation
### 1. Define targets
First, you should add a class to the elements you want to be affected in your HTML template:

```
<div class="js-asomado box" id="someText">
  <p>Hola, soy un texto.</p>
</div>
```

### 2. Register event
In your javascript file, add the following line:

```
Asomado.registerLazyLoadByClass('js-asomado', {classWhenVisible: 'is-visible'});
```
