# toaster.js

A simple and lightweight JavaScript library for creating customizable toast notifications.

## Demo

[Click here](https://lullaby6.github.io/toaster.js/)

## Installation

Include this tags in your html head

### CDN

```html
<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/lullaby6/toaster.js/toaster.css'>
<script src='https://cdn.jsdelivr.net/gh/lullaby6/toaster.js/toaster.js'></script>
```

## Usage

Instance the class `Toaster` to invoke a toast

```js
new Toaster({
    text: "Hello World!"
});
```

### Examples:

```js
new Toaster({
    type: 'success',
    title: 'Success',
    text: 'Operation completed successfully!',
    position: 'bottom-right',
    duration: 5000,
    pauseDurationOnHover: true,
    closeOnClick: true,
    closeOnDrag: true,
    progressBar: true
    closeButton: {
        onlyShowOnHover: true
    },
    animation: {
        fade: true,
        scale: true
    }
});
```

## Custom Icons

You can provide custom icons for different toast types:

```js
new Toaster({
    type: 'success',
    text: 'Custom icon example',
    icons: {
        success: '<svg>...</svg>'
    }
})
```

### Icons option keys:
- `close`
- `default`
- `dark`
- `info`
- `success`
- `warning`
- `error`
- `loading`

## Animations

The library supports both fade and scale animations. You can customize these or provide entirely custom animations.

```js
new Toaster({
    text: 'Animation',
    animation: {
        duration: 1000,
        easing: 'ease-out'
        fade: true,
        scale: true
    }
});
```

### Custom Animations

```js
new Toaster({
    text: 'Custom animation example',
    position: 'top-right',
    animation: {
        show: {
            custom: [
                {
                    opacity: 0,
                    translate: '50% 0'
                }, {
                    opacity: 1,
                    translate: '0 0'
                }
            ],
        },
        hide: {
            duration: 100,
            custom: [
                {
                    opacity: 1,
                    translate: '0 0'
                }, {
                    opacity: 0,
                    translate: '0 -50%'
                }
            ]
        }
    }
});
```