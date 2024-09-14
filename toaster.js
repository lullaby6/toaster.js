class Toaster {
    constructor(options) {
        this.id = options.id || crypto.randomUUID()
        this.type = options.type || 'default'
        this.title = options.title || null
        this.text = options.text || null
        this.position = options.position || 'top-right'
        this.duration = options.duration || 3000
        this.delay = options.delay || null
        this.border = options.border || false

        this.closeButton = options.closeButton || {}
        this.progressBar = options.progressBar || {}

        this.icons = {
            default: options.icons?.default || null,
            dark: options.icons?.dark || null,
            success: options.icons?.success || '<svg  xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>',
            info: options.icons?.info || '<svg xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /></svg>',
            warning: options.icons?.warning || '<svg  xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-alert-triangle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>',
            error: options.icons?.error || '<svg  xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-exclamation-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1" /></svg>',
            button: options.icons?.button || '<svg  xmlns="http://www.w3.org/2000/svg"  width="1em"  height="1em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" /><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" /><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" /><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" /><path d="M5 3l-1 -1" /><path d="M4 7h-1" /><path d="M14 3l1 -1" /><path d="M15 6h1" /></svg>',
            close: options.icons?.close || '<svg xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>',
            loading: options.icons?.loading || '<svg xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-loader-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9" /></svg>',
        }

        this.animations = {
            duration: options.animations?.duration ? options.animations.duration : 300,
            easing: options.animations?.easing ? options.animations.easing : 'ease-in-out',

            fade: (options.animations && 'fade' in options.animations) ? options.animations.fade : true,
            scale: (options.animations && 'scale' in options.animations) ? options.animations.scale : false,
        }

        this.className = options.className || {}
        this.style = options.style || {}
        this.attributes = options.attributes || {}

        this.closeOnClick = options.closeOnClick || false
        this.hideAllPreviousToasts = options.hideAllPreviousToasts || false

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
        const animation = [{}, {}]

        if (this.animations.fade) {
            animation[0].opacity = 0
            animation[1].opacity = 1
        }

        if (this.animations.scale) {
            animation[0].scale = 0
            animation[1].scale = 1
        }

        this.$toast.animate(animation, {
            duration: this.animations.duration,
            easing: this.animations.easing,
            fill: 'forwards',
        })
    }

    hide() {
        if (this.$toast.hasAttribute('data-toaster-hiding')) return
        this.$toast.setAttribute('data-toaster-hiding', '')

        const animation = [{}, {}]

        if (this.animations.fade) {
            animation[0].opacity = 1
            animation[1].opacity = 0
        }

        if (this.animations.scale) {
            animation[0].scale = 1
            animation[1].scale = 0
        }

        this.toastHideAnimation = this.$toast.animate(animation, {
            duration: this.animations.duration,
            easing: this.animations.easing,
            fill: 'forwards',
        })

        this.toastHideAnimation.onfinish = () => this.$toast.remove()
    }

    async render() {
        if (!document.querySelector('.toaster-position-container-main')) await new Promise(resolve => window.addEventListener('toaster.load.position-containers', resolve))

        if (this.delay && this.delay > 0) await new Promise(resolve => setTimeout(resolve, this.delay))

        if (this.hideAllPreviousToasts) document.querySelectorAll('.toaster').forEach(toast => toast.Toaster.hide())

        this.$toast = this.createElement('div')
        this.$toast.Toaster = this
        this.$toast.classList.add('toaster', `toaster-${this.id}`, `toaster-${this.type}`)
        this.$toast.setAttribute('data-toaster-id', this.id)
        this.$toast.setAttribute('data-toaster-date', Date.now())
        document.querySelector(`[data-toaster-position-container="${this.position}"]`).append(this.$toast)
        if (this.border) this.$toast.classList.add('toaster-border')

        if (this.icons[this.type]) {
            this.$icon = this.createElement('div', 'icon')
            this.$toast.append(this.$icon)
            this.$icon.innerHTML = this.icons[this.type]
        }

        this.$content = this.createElement('div', 'content')
        this.$toast.append(this.$content)

        if (this.title || this.text) {
            this.$contentText = this.createElement('div', 'contentText')
            this.$content.append(this.$contentText)
        }

        if (this.title) {
            this.$title = this.createElement('h4', 'title')
            this.$contentText.append(this.$title)
            this.$title.textContent = this.title
        }

        if (this.text && this.text !== '') {
            this.$text = this.createElement('p', 'text')
            this.$contentText.append(this.$text)
            this.$text.textContent = this.text
        }

        if ((this.closeButton == true || typeof this.closeButton == 'object') && this.icons['close']) {
            this.$closeButton = this.createElement('div', 'closeButton')
            this.$closeButton.innerHTML = this.icons['close']
            this.$toast.append(this.$closeButton)

            this.$closeButton.addEventListener('click', () => this.hide())

            if (typeof this.closeButton == 'object') {
                if (this.closeButton.icon) this.$closeButton.innerHTML = this.progressBar.icon
                if (this.closeButton.topRight) this.$closeButton.classList.add('toaster-close-button-top-right')
            }
        }

        if (this.progressBar == true || typeof this.progressBar == 'object') {
            this.$progressBar = this.createElement('span', 'progressBar')
            this.$toast.append(this.$progressBar)

            if (typeof this.progressBar == 'object') {
                if (this.progressBar.position === 'top') this.$progressBar.classList.add('toaster-progress-bar-top')
            }
        }

        if (this.closeOnClick) this.$toast.addEventListener('click', () => this.hide())

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
    const positions = ['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right']

    const mainContainer = document.createElement('div')
    mainContainer.classList.add('toaster-position-container-main')
    document.body.appendChild(mainContainer)

    positions.forEach(position => {
        const div = document.createElement('div')
        div.classList.add('toaster-position-container')

        if (position.startsWith('top')) div.classList.add('toaster-position-container-top')
        else div.classList.add('toaster-position-container-bottom')

        if (position.endsWith('left')) div.classList.add('toaster-position-container-left')
        else div.classList.add('toaster-position-container-right')

        div.setAttribute('data-toaster-position-container', position)

        mainContainer.appendChild(div)
    })

    window.dispatchEvent(new Event('toaster.load.position-containers'))
}

window.addEventListener('DOMContentLoaded', ToasterInit)