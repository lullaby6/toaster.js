// toaster.js
// version: 1.0.0
// repo: github.com/lullaby6/toaster.js

// Custom Toast
// README API Rerefence
// README Button
// README Promises
// README Styling

async function Toaster({
    id = null,
    toast = null,

    type = 'default',
    title = null,
    text = '',
    position = 'top-right',

    clearPreviousToasts = false,
    toastsLimit = null,
    waitPreviousToast = false,
    hidePreviousToast = false,
    onTop = true,

    delay = null,
    pauseDurationOnHover = false,
    duration = 3000,
    animationDuration = 300,
    showAnimationDuration = null,
    showAnimationEasing = null,
    hideAnimationDuration = null,
    hideAnimationEasing = null,
    animationEasing = 'ease-in-out',
    animationFade = true,
    showAnimationFade = true,
    hideAnimationFade = true,
    animationScale = false,
    showAnimationScale = true,
    hideAnimationScale = true,
    customShowAnimation = null,
    customHideAnimation = null,

    closeOnClick = false,

    showBorder = false,

    showToastIcon = true,
    showCloseIcon = true,
    onlyShowCloseIconOnHover = false,
    closeIconOnTopRight = false,

    showButton = false,
    showButtonIcon = true,
    buttonText = '',
    onButtonClick = null,
    customButton = null,

    showProgressBar = false,
    progressBarOnTop = false,

    rounded = false,
    borderRadius = null,
    borderColor = null,
    backgroundColor = null,
    textColor = null,
    fontFamily = null,

    iconFontSize,
    titleFontSize,
    textFontSize,

    toastClassName = '',
    iconClassName = '',
    closeIconClassName = '',
    contentClassName = '',
    contentTextClassName = '',
    titleClassName = '',
    textClassName = '',
    buttonClassName = '',
    buttonTextClassName = '',
    buttonIconClassName = '',
    progressBarClassName = '',

    onLoad = null,
    onHide = null,
    onChange = null,

    promiseCallback = null,

    promiseTimeout = null,
    promiseTimeoutText = 'Timed out',
    promiseTimeoutCallback = null,

    promiseAnimation = [
        {opacity: 0},
        {opacity: 1},
    ],
    promiseAnimationDuration = 300,
    promiseAnimationEasing = 'ease-in-out',

    promiseThenCallback = null,
    promiseThenToast = null,

    promiseCatchCallback = null,
    promiseCatchToast = null,

    smallerToastIcon = false,

    buttonIcon = `
        <svg  xmlns="http://www.w3.org/2000/svg"  width="1em"  height="1em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" /><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" /><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" /><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" /><path d="M5 3l-1 -1" /><path d="M4 7h-1" /><path d="M14 3l1 -1" /><path d="M15 6h1" /></svg>
    `,
    defaultIcon = null,
    darkIcon = null,
    infoIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-info-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z" /></svg>
    `,
    successIcon = `
        <svg  xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-circle-check"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>
    `,
    warningIcon = `
        <svg  xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-alert-triangle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 1.67c.955 0 1.845 .467 2.39 1.247l.105 .16l8.114 13.548a2.914 2.914 0 0 1 -2.307 4.363l-.195 .008h-16.225a2.914 2.914 0 0 1 -2.582 -4.2l.099 -.185l8.11 -13.538a2.914 2.914 0 0 1 2.491 -1.403zm.01 13.33l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007zm-.01 -7a1 1 0 0 0 -.993 .883l-.007 .117v4l.007 .117a1 1 0 0 0 1.986 0l.007 -.117v-4l-.007 -.117a1 1 0 0 0 -.993 -.883z" /></svg>
    `,
    errorIcon = `
        <svg  xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="currentColor"  class="icon icon-tabler icons-tabler-filled icon-tabler-exclamation-circle"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M17 3.34a10 10 0 1 1 -15 8.66l.005 -.324a10 10 0 0 1 14.995 -8.336m-5 11.66a1 1 0 0 0 -1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0 -1 -1m0 -7a1 1 0 0 0 -1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0 -1 -1" /></svg>
    `,
    closeIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
    `,
    loadingIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="1em"  height="1em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-loader-2"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 3a9 9 0 1 0 9 9" /></svg>
    `,
}) {
    if (!document.querySelector('.toaster-position-container-main')) await new Promise(resolve => window.addEventListener('toaster.load.position-containers', resolve))

    const toastByProps = toast ? true : false

    id = toast ? toast.getAttribute('data-toaster-id') : (id || crypto.randomUUID())

    if (!toastByProps && document.querySelector(`[data-toaster-id="${id}"]`)) {
        return console.error(`Toaster ${id} already exists.`);
    }

    if (delay && delay > 0) await new Promise((resolve) => setTimeout(resolve, delay))

    if (duration < 0) duration = 0
    if (animationDuration < 0) animationDuration = 0
    if (showAnimationDuration < 0) showAnimationDuration = 0
    if (hideAnimationDuration < 0) hideAnimationDuration = 0
    if (delay < 0) delay = 0
    if (promiseTimeout < 0) promiseTimeout = 0
    if (promiseAnimationDuration < 0) promiseAnimationDuration = 0

    if (clearPreviousToasts) ToasterHideAll()

    if (toastsLimit || waitPreviousToast || hidePreviousToast) {
        const toasts = Array.from(document.querySelectorAll('[data-toaster-id]'))
            .filter(toast => toast.getAttribute('data-toaster-hiding') !== 'true')
            .map(toast => ({
                id: toast.getAttribute('data-toaster-id'),
                date: toast.getAttribute('data-toaster-date'),
            }))
            .sort((a, b) => a.date - b.date)

        const toastsLength = toasts.length + 1

        if (toastsLimit && toastsLength > toastsLimit) {
            const toastDiff = toastsLength - toastsLimit

            for (let i = 0; i < toastDiff; i++) {
                document.querySelector(`[data-toaster-id="${toasts[i].id}"]`).ToasterHide()
            }
        }

        if (toastsLength > 1 && (waitPreviousToast || hidePreviousToast)) {
            const previousToast = document.querySelector(`[data-toaster-id="${toasts[toastsLength - 2].id}"]`)

            console.log(previousToast);

            if (previousToast) {
                if (hidePreviousToast) previousToast.ToasterHide()

                if (waitPreviousToast) await new Promise(resolve => previousToast.addEventListener('toaster.hide.end', resolve))
            }
        }
    }

    const icons = {
        default: defaultIcon,
        dark: darkIcon,
        info: infoIcon,
        success: successIcon,
        warning: warningIcon,
        error: errorIcon,
        loading: loadingIcon,
    }

    if (promiseCallback) {
        type = 'loading'
        duration = 0
    }

    let div = null;

    if (toast) div = toast.closest('.toaster-container')
    else {
        div = document.createElement('div')
        div.classList.add('toaster-container')
    }

    div.innerHTML = `
        <div
            class="toaster toaster-${type} toaster-${id} ${toastClassName} ${rounded ? 'toaster-rounded' : ''}"
            data-toaster-id="${id}"
            data-toaster-date="${Date.now()}"
            style="${fontFamily ? `font-family: ${fontFamily};"` : ''}; ${backgroundColor ? `background-color: ${backgroundColor};"` : ''}; ${borderRadius ? `border-radius: ${borderRadius};"` : ''}; ${showBorder ? (borderColor ? `border: 1px solid ${borderColor};"` : '') : 'border: none;'}"
        >
            ${(showToastIcon && icons[type]) ? `
                <div class="toaster-icon ${iconClassName} ${smallerToastIcon ? 'toaster-icon-small' : ''}" style="${textColor ? `color: ${textColor};` : ''}${iconFontSize ? `font-size: ${iconFontSize};` : ''}"}>
                    ${icons[type]}
                </div>
            ` : ''}

            <div class="toaster-content ${contentClassName}">
                <div class="toaster-content-text ${contentTextClassName}">
                    ${(title && title.trim() != '') ? `
                        <h1 class="toaster-title ${titleClassName}" style="${textColor ? `color: ${textColor};` : ''}${titleFontSize ? `font-size: ${titleFontSize};` : ''}">${title}</h1>
                    `: ''}
                    ${(text && text.trim && text.trim() != '') ? `
                        <p class="toaster-text ${textClassName}" style="${textColor ? `color: ${textColor};` : ''}${textFontSize ? `font-size: ${textFontSize};` : ''}">${text}</p>
                    ` : ''}
                </div>
                ${customButton ? `
                    ${customButton}
                `: (showButton && (buttonText.trim() != '' || (showButtonIcon && buttonIcon))) ? `
                    <button class="toaster-button ${buttonClassName}">
                        ${(showButtonIcon && buttonIcon) ? `
                            <div class="toaster-button-icon ${buttonIconClassName}">
                                ${buttonIcon}
                            </div>
                        ` : ''}
                        <p class="toaster-button-text ${buttonTextClassName}">${buttonText}</p>
                    </button>
                `: ''}
            </div>

            ${(showCloseIcon && closeIcon) ? `
                <div class="toaster-close-icon toaster-close-icon-${id} ${closeIconClassName} ${closeIconOnTopRight ? 'toaster-close-icon-top-right' : ''}" ${textColor ? `style="color: ${textColor};"` : ''}>
                    ${closeIcon}
                </div>
            ` : ''}

            ${showProgressBar ? `
                <span class='toaster-progress-bar ${progressBarOnTop ? 'toaster-progress-bar-top' : ''} ${progressBarClassName}'></span>
            ` : ''}
        </div>
    `

    if (!toastByProps) {
        let method = onTop ? (position.startsWith('top') ? 'prepend' : 'append') : (position.startsWith('top') ? 'append' : 'prepend')
        document.querySelector(`[data-toaster-position-container="${position}"]`)[method](div)
    }

    toast = document.querySelector(`.toaster-${id}`)

    if (!toastByProps) {
        if (onLoad) onLoad(toast)

        toast.dispatchEvent(new Event('toaster.load'), { detail: { arguments: arguments[0] } })
        window.dispatchEvent(new Event('toaster.load'), { detail: { toast, arguments: arguments[0] } })
    } else {
        if (onChange) onChange(toast)

        toast.dispatchEvent(new Event('toaster.change'), { detail: { arguments: arguments[0] } })
        window.dispatchEvent(new Event('toaster.change'), { detail: { toast, arguments: arguments[0] } })
    }

    if (duration != 0 && duration < animationDuration) animationDuration = duration

    const animations = {
        show: {
            animation: [{}, {}],
            duration: showAnimationDuration || animationDuration,
            easing: showAnimationEasing || animationEasing
        },
        hide: {
            animation: [{}, {}],
            duration: hideAnimationDuration || animationDuration,
            easing: hideAnimationEasing || animationEasing
        },
    };

    if (animationFade) {
        if (showAnimationFade) {
            animations.show.animation[0].opacity = 0;
            animations.show.animation[1].opacity = 1;
        }
        if (hideAnimationFade) {
            animations.hide.animation[0].opacity = 1;
            animations.hide.animation[1].opacity = 0;
        }
    }

    if (animationScale) {
        if (showAnimationScale) {
            animations.show.animation[0].scale = 0;
            animations.show.animation[1].scale = 1;
        }
        if (hideAnimationScale) {
            animations.hide.animation[0].scale = 1;
            animations.hide.animation[1].scale = 0;
        }
    }

    animations.show = customShowAnimation || animations.show;
    animations.hide = customHideAnimation || animations.hide;

    if (!toastByProps && Object.keys(animations.show.animation[0]).length > 0 && Object.keys(animations.show.animation[1]).length > 0) {
        toast.animate(animations.show.animation, {
            duration: animations.show.duration,
            fill: 'forwards',
            easing: animations.show.easing
        })
    }

    toast.ToasterHide = () => {
        if (toast.ToasterHiding) return
        toast.ToasterHiding = true

        toast.dispatchEvent(new Event('toaster.hide.start'), { detail: { arguments: arguments[0] } })
        window.dispatchEvent(new Event('toaster.hide.start'), { detail: { toast, arguments: arguments[0] } })

        toast.setAttribute('data-toaster-hiding', 'true')

        if (toast.ToasterTimeout) {
            clearTimeout(toast.ToasterTimeout)
            toast.ToasterTimeout = null
        }

        if (toast.ToasterInterval) {
            clearInterval(toast.ToasterInterval)
            toast.ToasterInterval = null
        }

        if (Object.keys(animations.hide.animation[0]).length > 0 && Object.keys(animations.hide.animation[1]).length > 0) {
            toast.animate(animations.hide.animation, {
                duration: animations.hide.duration,
                fill: 'forwards',
                easing: animations.hide.easing
            })

            setTimeout(() => {
                if (onHide) onHide(toast)

                toast.dispatchEvent(new Event('toaster.hide.end'), { detail: { arguments: arguments[0] } })
                window.dispatchEvent(new Event('toaster.hide.end'), { detail: { toast, arguments: arguments[0] } })

                toast.closest('.toaster-container').remove()
            }, animations.hide.duration)
        } else {
            if (onHide) onHide(toast)

            toast.dispatchEvent(new Event('toaster.hide.end'), { detail: { arguments: arguments[0] } })
            window.dispatchEvent(new Event('toaster.hide.end'), { detail: { toast, arguments: arguments[0] } })

            toast.closest('.toaster-container').remove()
        }
    }

    if (showCloseIcon) {
        const closeIcon = document.querySelector(`.toaster-close-icon-${id}`)
        closeIcon.addEventListener('click', toast.ToasterHide)

        if (onlyShowCloseIconOnHover) {
            closeIcon.style.opacity = 0

            toast.addEventListener('mouseenter', () => closeIcon.style.opacity = 0.5)

            toast.addEventListener('mouseleave', () => closeIcon.style.opacity = 0)

            closeIcon.addEventListener('mouseover', () =>closeIcon.style.opacity = 1)
        }
    }

    if (duration > 0) {
        toast.ToasterTimeoutStartTime = Date.now();
        toast.ToasterTimeoutResumeTime = Date.now();
        toast.ToasterTimeoutTimeLeft = duration

        toast.ToasterTimeout = setTimeout(toast.ToasterHide, duration)

        toast.ToasterInvervalMiliseconds = 0

        if (showProgressBar) {
            const progressBar = toast.querySelector(`.toaster-progress-bar`)

            toast.ToasterInterval = setInterval(() => {
                const durationPercentage = ((Date.now() - toast.ToasterTimeoutStartTime) * 100) / duration

                progressBar.style.width = `${durationPercentage}%`
            }, 1)
        }

        if (pauseDurationOnHover) {
            toast.addEventListener('mouseenter', () => {
                if (!toast.ToasterTimeout || toast.ToasterHiding) return

                clearTimeout(toast.ToasterTimeout)
                toast.ToasterTimeout = null

                if (toast.ToasterInterval) {
                    clearInterval(toast.ToasterInterval)
                    toast.ToasterInterval = null
                }

                toast.ToasterTimeoutTimeLeft -= Date.now() - toast.ToasterTimeoutResumeTime;
            })

            toast.addEventListener('mouseleave', () => {
                if (toast.ToasterTimeout || toast.ToasterHiding) return;

                toast.ToasterTimeoutResumeTime = Date.now();
                toast.ToasterTimeout = setTimeout(toast.ToasterHide, toast.ToasterTimeoutTimeLeft);

                if (showProgressBar) {
                    const progressBar = toast.querySelector(`.toaster-progress-bar`);

                    const currentProgressPercentage = parseFloat(getComputedStyle(progressBar).width) / progressBar.parentElement.clientWidth * 100;

                    const remainingPercentage = (toast.ToasterTimeoutTimeLeft / duration) * 100;

                    toast.ToasterInterval = setInterval(() => {
                        const elapsed = Date.now() - toast.ToasterTimeoutResumeTime;
                        const percentage = (elapsed / toast.ToasterTimeoutTimeLeft) * remainingPercentage;

                        progressBar.style.width = `${currentProgressPercentage + percentage}%`;
                    }, 1);
                }
            });
        }
    }

    if (closeOnClick) toast.addEventListener('click', toast.ToasterHide)

    if (onButtonClick) {
        const button = toast.querySelector(`.toaster-button`)

        if (button) button.addEventListener('click', event => onButtonClick(event, toast, button))
    }

    if (promiseCallback) {
        let newToast = {
            ...arguments[0],
            promiseCallback: null,
        }

        try {
            let result = null

            if (promiseTimeout) {
                const timeoutPromise = new Promise((_, reject) =>
                    setTimeout(() => {
                        if (promiseTimeoutCallback) promiseTimeoutCallback(toast, arguments[0])

                        reject(new Error(promiseTimeoutText))
                    }, promiseTimeout)
                );

                result = await Promise.race([
                    promiseCallback(),
                    timeoutPromise
                ]);
            } else {
                result = await promiseCallback()
            }

            let promiseThenToastCallbackResult = {}

            if (promiseThenCallback) promiseThenToastCallbackResult = promiseThenCallback(result, toast, arguments[0])

            newToast = {
                ...newToast,
                type: 'success',
                ...promiseThenToast,
                ...promiseThenToastCallbackResult
            }
        } catch (error) {
            if (error.message) error = error.message

            let promiseCatchToastCallbackResult = {}

            if (promiseCatchCallback) promiseCatchToastCallbackResult = promiseCatchCallback(error, toast, arguments[0])

            newToast = {
                ...newToast,
                type: 'error',
                ...promiseCatchToast,
                ...promiseCatchToastCallbackResult
            }
        }

        if (promiseAnimation) {
            div.animate(promiseAnimation, {
                duration: promiseAnimationDuration,
                fill: 'forwards',
                easing: promiseAnimationEasing,
            })
        }

        newToast.toast = document.querySelector(`.toaster[data-toaster-id="${id}"]`)

        Toaster(newToast)
    }
}

function ToasterHideAll() {
    document.querySelectorAll('.toaster').forEach(toast => toast.ToasterHide())
}

function ToasterLoadPositionContainers() {
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

window.addEventListener('DOMContentLoaded', () => {
    ToasterLoadPositionContainers()
})