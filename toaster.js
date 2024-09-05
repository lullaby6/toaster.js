// Wait for previous to dismiss before showing new
// Hide last
// Custom Toast
// Rounded
// Border Color
// Trigger Window Events
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

    if (toastsLimit) {
        const toasts = Array.from(document.querySelectorAll('[data-toaster-id]'))
            .filter(toast => toast.getAttribute('data-toaster-hiding') !== 'true')
            .map(toast => ({
                id: toast.getAttribute('data-toaster-id'),
                date: toast.getAttribute('data-toaster-date'),
            }))
            .sort((a, b) => a.date - b.date)
        const toastsLength = toasts.length + 1

        if (toastsLength > toastsLimit) {
            const toastDiff = toastsLength - toastsLimit

            for (let i = 0; i < toastDiff; i++) {
                document.querySelector(`[data-toaster-id="${toasts[i].id}"]`).ToasterHide()
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
            class="toaster toaster-${type} toaster-${id} ${toastClassName}"
            data-toaster-id="${id}"
            data-toaster-date="${Date.now()}"
            style="${fontFamily ? `font-family: ${fontFamily};"` : ''}; ${backgroundColor ? `background-color: ${backgroundColor};"` : ''}; ${showBorder ? '' : 'border: none;'}"
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
    } else if (onChange) onChange(toast)

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

                toast.closest('.toaster-container').remove()
            }, animations.hide.duration)
        } else {
            if (onHide) onHide(toast)

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
}

let ToasterStyles = `
    :root {
        --toaster-info: #3b82f6;
        --toaster-success: #22c55e;
        --toaster-warning: #facc15;
        --toaster-error: #ef4444;
        --toaster-text: #fff;

        --toaster-progress-bar: #fff;

        --toaster-default-bg: #fff;
        --toaster-default-text: #262626;
        --toaster-default-border: #d4d4d4;
        --toaster-default-progress-bar: #262626;

        --toaster-dark-bg: #0a0a0a;
        --toaster-dark-text: #fafafa;
        --toaster-dark-border: #d4d4d4;
    }

    .toaster-position-container-main {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9999;
        pointer-events: none;
        width: 100vw;
        height: 100vh;

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .toaster-position-container {
        position: absolute;
        z-index: 9999;
        pointer-events: none;

        padding: 16px;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;

        box-sizing: border-box;
    }

    .toaster-position-container[data-toaster-position-container="top-left"] {
        top: 0;
        left: 0;
    }

    .toaster-position-container[data-toaster-position-container="top"] {
        top: 0;
        left: 50%;
        translate: -50% 0;
    }

    .toaster-position-container[data-toaster-position-container="top-right"] {
        top: 0;
        right: 0;
    }

    .toaster-position-container[data-toaster-position-container="bottom-left"] {
        bottom: 0;
        left: 0;
    }

    .toaster-position-container[data-toaster-position-container="bottom"] {
        bottom: 0;
        left: 50%;
        translate: -50% 0;
    }

    .toaster-position-container[data-toaster-position-container="bottom-right"] {
        bottom: 0;
        right: 0;
    }

    .toaster-position-container-left {
        align-items: start;
    }

    .toaster-position-container-right {
        align-items: end;
    }

    .toaster {
        position: relative;
        pointer-events: all;
        z-index: 9999;
        translate: 0 0;
        min-width: 300px;
        overflow: hidden;
        font-size: 16px;
        padding: 12px 16px;
        border-radius: 6px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        -ms-border-radius: 6px;
        -o-border-radius: 6px;
        color: var(--toaster-text);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -ms-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
    }

    .toaster-content {
        width: 100%;
        flex: 1;
        display: flex;
        gap: 16px;
        justify-content: space-between;
        align-items: center;
    }

    .toaster-content-text {
        display: flex;
        flex-direction: column;
        gap: 0px;
        justify-content: center;
        align-items: center;
        overflow: hidden;
    }

    .toaster-button {
        background: transparent;
        border: solid 1px var(--toaster-text);
        font-size: 16px;
        padding: 6px 12px;
        border-radius: 6px;
        -webkit-border-radius: 6px;
        -moz-border-radius: 6px;
        -ms-border-radius: 6px;
        -o-border-radius: 6px;
        color: var(--toaster-text);
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -ms-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
        box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 2.5px;
    }

    .toaster-button:hover {
        scale: 1.05;
    }

    .toaster-button:disabled {
        opacity: 0.5;
    }

    .toaster-button-text {
        margin: 0;
    }

    .toaster-button-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        margin-bottom: 1.5px;
    }

    .toaster-title {
        font-size: 18px;
        max-width: 250px;
        max-height: 125px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        font-weight: 600;
        margin: 0;
        padding: 0;
        width: 100%;
        text-align: left;
    }

    .toaster-text {
        font-size: 16px;
        max-width: 250px;
        max-height: 125px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        margin: 0;
        padding: 0;
        width: 100%;
        text-align: left;
    }

    .toaster-progress-bar {
        background-color: var(--toaster-progress-bar);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 7.5%;
        opacity: 0.375;
        transition: all 100 ease-in-out;
        -webkit-transition: all 100 ease-in-out;
        -moz-transition: all 100 ease-in-out;
        -ms-transition: all 100 ease-in-out;
        -o-transition: all 100 ease-in-out;
    }

    .toaster-progress-bar-top {
        top: 0;
        bottom: auto;
    }

    .toaster-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 35px;
    }

    .toaster-icon-small {
        font-size: 25px;
    }

    .toaster-close-icon {
        font-size: 20px;
        cursor: pointer;
        opacity: 0.5;
        transition: all 0.2s ease-in-out;
        -webkit-transition: all 0.2s ease-in-out;
        -moz-transition: all 0.2s ease-in-out;
        -ms-transition: all 0.2s ease-in-out;
        -o-transition: all 0.2s ease-in-out;
    }

    .toaster-close-icon:hover {
        opacity: 1;
        scale: 1.1;
    }

    .toaster-close-icon-top-right {
        position: absolute;
        top: 0;
        right: 0;
        margin: 2.5px 5px;
    }

    .toaster-default {
        background-color: var(--toaster-default-bg);
        color: var(--toaster-default-text);
        border: 1px solid var(--toaster-default-border);
    }

    .toaster-default .toaster-button {
        color: var(--toaster-default-text);
        border: 1px solid var(--toaster-default-border);
    }

    .toaster-default .toaster-progress-bar {
        opacity: 0.675;
        background-color: var(--toaster-default-progress-bar);
    }

    .toaster-loading {
        background-color: var(--toaster-default-bg);
        color: var(--toaster-default-text);
        border: 1px solid var(--toaster-default-border);
    }

    .toaster-loading .toaster-button {
        color: var(--toaster-default-text);
        border: 1px solid var(--toaster-default-border);
    }

    .toaster-loading .toaster-progress-bar {
        opacity: 0.675;
        background-color: var(--toaster-default-progress-bar);
    }

    @keyframes toaster-loading-animation {
        from {
            rotate: 0deg;
        }
        to {
            rotate: 360deg;
        }
    }

    .toaster-loading .toaster-icon svg {
        animation: toaster-loading-animation 2s infinite linear;
        -webkit-animation: toaster-loading-animation 2s infinite linear;
        opacity: 0.5;
    }

    .toaster-dark {
        background-color: var(--toaster-dark-bg);
        color: var(--toaster-dark-text);
        border: 1px solid var(--toaster-dark-border);
    }

    .toaster-info {
        background-color: var(--toaster-info);
    }

    .toaster-success {
        background-color: var(--toaster-success);
    }

    .toaster-warning {
        background-color: var(--toaster-warning);
    }

    .toaster-error {
        background-color: var(--toaster-error);
    }

    @media screen and (max-width: 480px){
        .toaster-container {
            width: 100%;
        }

        .toaster {
            min-width: auto;
        }

        .toaster-position-container {
            left: 0 !important;
            right: auto !important;
            translate: 0 0 !important;
            width: 100vw;
        }

        .toaster-position-container-top {
            top: 0 !important;
            bottom: auto !important;
        }

        .toaster-position-container-bottom {
            top: auto !important;
            bottom: 0 !important;
        }
    }
`

function ToasterLoadStyles() {
    const style = document.createElement('style')
    style.innerHTML = ToasterStyles
    document.head.appendChild(style)
}

window.addEventListener('DOMContentLoaded', () => {
    ToasterLoadPositionContainers()
    ToasterLoadStyles()
})