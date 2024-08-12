# toaster.js

A simple and lightweight JavaScript library for creating customizable toast notifications.

[Demo](https://lullaby6.github.io/toaster.js/)

## Features

- Easy to use
- Customizable appearance and behavior
- Multiple toast types (default, dark, info, success, warning, error)
- Flexible positioning
- Animations and transitions
- Duration control
- Close on click or hover options
- Pause duration on hover
- Custom icons support

## Installation

### CDN

```html
<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/lullaby6/toaster.js/toaster.css'>
<script src='https://cdn.jsdelivr.net/gh/lullaby6/toaster.js/toaster.js'></script>
```

## Usage

Call the function `Toaster` to invoke a toast

```js
Toaster({
    text: "Hello World!"
})
```

Another example:

```js
Toaster({
    type: 'success',
    text: 'Operation completed successfully!',
    position: 'top-right',
    duration: 5000,
    closeOnClick: true,
    showToastIcon: true,
    animationFade: true,
    animationScale: true
})
```

## Reference

| Key | Type | Description | Default |
|-----------------|----------------------|----------------------------------------------------------------------------|-------------|
| text | string | Text to display in the toast | "" |
| type | string | Type and styles of the toast (`default`, `dark`, `info`, `success`, `warning`, `error`) | "default" |
| position | string | Position of the toast (`top-left`, `top`, `top-right`, `bottom-left`, `bottom`, `bottom-right`) | "bottom-right" |
| clearPreviousToasts | string | Whether to clear previous toasts when a new one is created | true |
| duration | boolean | Duration in milliseconds before the toast auto-closes (0 for no auto-close) | 3000 |
| pauseDurationOnHover | boolean | Pause the duration timer when hovering over the toast | false |
| animationDuration | number | Duration of show/hide animations in milliseconds | 300 |
| animationEase | number | CSS easing function for animations | "ease-in-out" |
| animationFade | string | Enable fade animation | true |
| animationScale | boolean | Enable scale animation | false |
| closeOnClick | boolean | Close the toast when clicked | false |
| showToastIcon | boolean | Show an icon based on the toast type | true |
| showCloseIcon | boolean | Show a close icon | true |
| onlyShowCloseIconOnHover | boolean | Only show the close icon when hovering over the toast | false |

## Custom Icons

You can provide custom icons for different toast types:

```js
Toaster({
    type: 'success',
    text: 'Custom icon example',
    successIcon: '<svg>...</svg>'
})
```

Icon option key:
- closeIcon
- infoIcon
- successIcon
- warningIcon
- errorIcon

## Custom Animations

The library supports both fade and scale animations. You can customize these or provide entirely custom animations:


```js
Toaster({
    text: 'Custom animation example',
    customShowAnimation: [{ opacity: 0, translateY: '-20px' }, { opacity: 1, translateY: '0px' }],
    customHideAnimation: [{ opacity: 1, translateY: '0px' }, { opacity: 0, translateY: '20px' }]
})
```