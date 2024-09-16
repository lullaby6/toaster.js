// toaster.js
// version: 1.0.0
// repo: github.com/lullaby6/toaster.js

// pauseDurationOnHover
// customToast
// customButton
// customAnimations
// promise

class Toaster {
    constructor({
        id = crypto.randomUUID(),
        type = 'default',
        title = null,
        text = null,
        position = 'top-right',
        duration = 3000,
        delay = null,
        border = false,

        icon = true,
        closeButton = null,
        progressBar = null,

        button = null,

        hidePreviousToasts = false,
        hideLastToast = false,
        limit = null,
        waitLastToast = false,

        closeOnClick = false,
        onTop = true,

        className = {},
        style = {},
        attributes = {},

        onLoad = null,
        onShow = null,
        onHide = null,
        onChange = null,

        icons = {},
        animation = {},
        promise = null,
    } = {}) {
        this.id = id
        this.type = type
        this.title = title
        this.text = text
        this.position = position
        this.duration = duration
        this.delay = delay
        this.border = border

        this.icon = icon
        this.closeButton = closeButton
        this.progressBar = progressBar

        this.button = button

        this.hidePreviousToasts = hidePreviousToasts
        this.hideLastToast = hideLastToast
        this.limit = limit
        this.waitLastToast = waitLastToast

        this.closeOnClick = closeOnClick
        this.onTop = onTop

        this.className = className
        this.style = style
        this.attributes = attributes

        this.onLoad = onLoad
        this.onShow = onShow
        this.onHide = onHide
        this.onChange = onChange

        this.icons = {
            default: null,
            dark:null,
            success: '<svg  xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>',
            info: '<svg xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /></svg>',
            warning: '<svg  xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-alert-triangle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>',
            error: '<svg  xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-exclamation-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1" /></svg>',
            button: '<svg  xmlns="http://www.w3.org/2000/svg"  width="1em"  height="1em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" /><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" /><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" /><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" /><path d="M5 3l-1 -1" /><path d="M4 7h-1" /><path d="M14 3l1 -1" /><path d="M15 6h1" /></svg>',
            close: '<svg xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>',
            loading: '<svg xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-loader-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9" /></svg>',
            ...icons
        }

        this.animation = {
            duration: 300,
            easing: 'ease-in-out',
            fade: true,
            scale: false,
            ...animation
        };

        this.promise = promise

        this.render()
    }

    camelCase(str) {
        return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
    }

    setElementClassName(element, className) {
        if (typeof className == 'string') element.className = className;
        else if (typeof className == 'object') element.classList.add(...className);
    }

    setElementStyle(element, style) {
        if (typeof style === 'string') element.style.cssText = style;
        else if (typeof style === 'object') {
            for (const key in style) {
                element.style[key] = style[key];
            }
        }
    }

    setElementAttributes(element, attributes) {
        for (const key in attributes) {
            element.setAttribute(key, attributes[key]);
        }
    }

    createElement(tag, name = null) {
        if (name === null) name = tag
        const element = document.createElement(tag);

        if (this.className[name]) this.setElementClassName(element, this.className[name]);
        if (this.style[name]) this.setElementStyle(element, this.style[name]);
        if (this.attributes[name]) this.setElementStyle(element, this.attributes[name]);

        element.classList.add(`toaster-${this.camelCase(name)}`);

        return element
    }

    show() {
        this.$toast.dispatchEvent(new Event('toaster.show.start'))

        const animation = [{}, {}]

        if (this.animation.fade) {
            animation[0].opacity = 0
            animation[1].opacity = 1
        }

        if (this.animation.scale) {
            animation[0].scale = 0
            animation[1].scale = 1
        }

        this.showAnimation = this.$toast.animate(animation, {
            duration: this.animation.duration,
            easing: this.animation.easing,
            fill: 'forwards',
        })

        this.showAnimation.onfinish = event => {
            if (this.onShow) this.onShow(event)

            this.$toast.dispatchEvent(new Event('toaster.show.end'))
        }
    }

    hide() {
        if (this.$toast.dataset.toasterHiding === 'true') return
        this.$toast.dataset.toasterHiding = 'true'

        this.$toast.dispatchEvent(new Event('toaster.hide.start'))

        const animation = [{}, {}]

        if (this.animation.fade) {
            animation[0].opacity = 1
            animation[1].opacity = 0
        }

        if (this.animation.scale) {
            animation[0].scale = 1
            animation[1].scale = 0
        }

        this.hideAnimation = this.$toast.animate(animation, {
            duration: this.animation.duration,
            easing: this.animation.easing,
            fill: 'forwards',
        })

        this.hideAnimation.onfinish = event => {
            if (this.onHide) this.onHide(event)

            this.$toast.dispatchEvent(new Event('toaster.hide.end'))

            this.$toast.remove()
        }
    }

    getIndex() {
        this.index = 0

        document.querySelectorAll('.toaster').forEach(toast => {
            if (toast.dataset.toasterIndex >= this.index) this.index = parseInt(toast.dataset.toasterIndex) + 1
        })
    }

    createToast() {
        this.$toast = this.createElement('div')

        this.$toast.Toaster = this
        this.$toast.classList.add('toaster', `toaster-${this.id}`, `toaster-${this.type}`)
        this.$toast.dataset.toasterId = this.id
        this.$toast.dataset.toasterIndex = this.index
        this.$toast.dataset.toasterDate = Date.now()

        let method = 'prepend'
        if (this.onTop === false) method = 'append'

        document.querySelector(`[data-toaster-position="${this.position}"]`)[method](this.$toast)

        if (this.border) this.$toast.classList.add('toaster-border')

        if (this.closeOnClick) this.$toast.addEventListener('click', () => this.hide())

        if (this.onLoad) this.onLoad(this.$toast)

        this.$toast.dispatchEvent(new Event('toaster.load'))
    }

    createIcon() {
        this.$icon = this.createElement('div', 'icon')
        this.$toast.append(this.$icon)
        this.$icon.innerHTML = this.icons[this.type]
    }

    createTitle() {
        this.$title = this.createElement('h4', 'title')
        this.$title.textContent = this.title
        this.$contentText.append(this.$title)
    }

    createText() {
        this.$text = this.createElement('p', 'text')
        this.$text.textContent = this.text
        this.$contentText.append(this.$text)
    }

    createButton() {
        this.$button = this.createElement('div', 'button')

        if (this.button.text) this.$button.textContent = this.button.text

        if (this.button.icon && this.icons['button']) {
            this.$buttonIcon = this.createElement('div', 'buttonIcon')

            if (this.button.icon === true) this.$buttonIcon.innerHTML = this.icons['button']
            else this.$buttonIcon.innerHTML = this.button.icon

            this.$button.prepend(this.$buttonIcon)
        }

        this.$content.append(this.$button)

        if (this.button.onClick) this.$button.addEventListener('click', this.button.onClick)
    }

    createCloseButton() {
        this.$closeButton = this.createElement('div', 'closeButton')
        this.$closeButton.innerHTML = this.icons['close']

        if (typeof this.closeButton == 'object') {
            if (this.closeButton.icon) this.$closeButton.innerHTML = this.progressBar.icon
            if (this.closeButton.topRight) this.$closeButton.classList.add('toaster-close-button-top-right')
        }

        this.$toast.append(this.$closeButton)

        this.$closeButton.addEventListener('click', () => this.hide())
    }

    createProgressBar() {
        this.$progressBar = this.createElement('span', 'progressBar')

        if (typeof this.progressBar == 'object') if (this.progressBar.position === 'top') this.$progressBar.classList.add('toaster-progress-bar-top')

        this.$toast.append(this.$progressBar)
    }

    setLimit() {
        const toasts = Array.from(document.querySelectorAll('.toaster'))
            .filter(toast => toast.dataset.toasterHiding !== 'true')
            .sort((a, b) => a.dataset.toasterIndex - b.dataset.toasterIndex)

        const length = toasts.length + 1

        if (length > this.limit) {
            toasts.length = length - this.limit

            toasts.forEach(toast => toast.Toaster.hide())
        }
    }

    async render() {
        if (!document.querySelector('#toaster-positions')) await new Promise(resolve => window.addEventListener('toaster.init', resolve))

        if (this.delay && this.delay > 0) await new Promise(resolve => setTimeout(resolve, this.delay))

        if (this.hidePreviousToasts) document.querySelectorAll('.toaster').forEach(toast => toast.Toaster.hide())

        this.getIndex()

        const lastToast = document.querySelector(`.toaster[data-toaster-index="${this.index - 1}"]`)

        if (lastToast) {
            if (this.hideLastToast) lastToast.Toaster.hide()

            if (this.waitLastToast) await new Promise(resolve => lastToast.addEventListener('toaster.hide.end', resolve))
        }

        if (this.limit !== null) this.setLimit()

        this.createToast()

        if (this.icon && this.icons[this.type]) this.createIcon()

        this.$content = this.createElement('div', 'content')
        this.$toast.append(this.$content)

        if (this.title || this.text) {
            this.$contentText = this.createElement('div', 'contentText')
            this.$content.append(this.$contentText)
        }

        if (this.title && this.title.trim() !== '') this.createTitle()

        if (this.text && this.text.trim() !== '') this.createText()

        if (this.button) this.createButton()

        if (this.closeButton && this.icons['close']) this.createCloseButton()

        if (this.progressBar == true || typeof this.progressBar == 'object') this.createProgressBar()

        if (this.duration > 0) {
            this.durationTimeout = setTimeout(() => this.hide(), this.duration)

            this.durationTimeoutStartTime = Date.now();
            this.durationTimeoutResumeTime = Date.now();
            this.durationTimeoutTimeLeft = this.duration

            if (this.progressBar) {
                this.durationInterval = setInterval(() => {
                    const durationPercentage = ((Date.now() - this.durationTimeoutStartTime) * 100) / this.duration

                    this.$progressBar.style.width = `${durationPercentage}%`
                }, 1)
            }
        }

        this.show()

        return this.$toast
    }
}

function ToasterHide(toast) {
    toast.Toaster.hide()
}

function ToasterHideAll() {
    document.querySelectorAll('.toaster').forEach(ToasterHide)
}

function ToasterInit() {
    if (document.querySelector('#toaster-positions')) return

    const positions = ['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right']

    const $positions = document.createElement('div')
    $positions.id = 'toaster-positions'
    document.body.appendChild($positions)

    positions.forEach(position => {
        const $position = document.createElement('div')
        $position.id = `toaster-position-${position}`
        $position.classList.add('toaster-position')
        $position.dataset.toasterPosition = position

        if (position.startsWith('top')) $position.classList.add('toaster-position-top')
        else $position.classList.add('toaster-position-bottom')

        if (position.endsWith('left')) $position.classList.add('toaster-position-left')
        else $position.classList.add('toaster-position-right')

        $positions.appendChild($position)
    })

    window.dispatchEvent(new Event('toaster.init'))
}

window.addEventListener('DOMContentLoaded', ToasterInit)