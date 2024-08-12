# toaster.js

A simple and light javascript library to create toasts in a simple way.

## Feactures

- Multiple toast types
- Toast duration
- Toast position
- Fade animation
- Scale animation
- Custom show and hide animations
- Close on click
- Toggle show icons
- Customizable icons

## Installation

### CDN

```html
<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/lullaby6/toaster.js/toaster.css'>
<script src='https://cdn.jsdelivr.net/gh/lullaby6/toaster.js/toaster.js'></script>
```

## Basic Usage

Call the function `Toaster` to invoke a toast

```js
Toaster({
    text: "Hello World!"
})
```