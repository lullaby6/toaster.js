# toaster.js

A simple and lightweight JavaScript library for creating customizable toast notifications.

## Demo

[Click here](https://lullaby6.github.io/toaster.js/)

## Installation

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

## API Reference

| Attribute | Type | Description | Default |
|-----------------|----------------------|----------------------------------------------------------------------------|-------------|
| title | string | Title to display in the toast | null |
| text | string | Text to display in the toast | "" |
| type | string | Type and styles of the toast (`default`, `dark`, `info`, `success`, `warning`, `error`) | "default" |
| position | string | Position of the toast (`top-left`, `top`, `top-right`, `bottom-left`, `bottom`, `bottom-right`) | "top-right" |
| clearPreviousToasts | boolean | Whether to clear previous toasts when a new one is created | false |
| toastsLimit | number | Max of toasts can be displayed | null |
| duration | number | Duration in milliseconds before the toast auto-closes (0 for no auto-close) | 3000 |
| delay | number | Delay in milliseconds to show the toast | null |
| pauseDurationOnHover | boolean | Pause the duration timer when hovering over the toast | false |
| animationDuration | number | Duration of show/hide animations in milliseconds | 300 |
| animationEase | number | CSS easing function for animations | "ease-in-out" |
| animationFade | string | Enable fade animation | true |
| animationScale | boolean | Enable scale animation | false |
| closeOnClick | boolean | Close the toast when clicked | false |
| showToastIcon | boolean | Show an icon based on the toast type | true |
| showCloseIcon | boolean | Show a close icon | true |
| onlyShowCloseIconOnHover | boolean | Only show the close icon when hovering over the toast | false |
| closeIconOnTopRight | boolean | Show the close icon in the top right of the toast | false |

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

## Custom Animations

The library supports both fade and scale animations. You can customize these or provide entirely custom animations:


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