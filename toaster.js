// ToDo:
// - Toast Limit
// - Slide Animation
// - Progress Bar
// - Progress Bar Position
// - Custom Attributes

function Toaster({
    type = 'default',
    title = null,
    text = '',
    position = 'bottom-right',

    clearPreviousToasts = false,
    onTop = true,

    pauseDurationOnHover = false,
    duration = 3000,
    animationDuration = 300,
    showAnimationDuration = null,
    hideAnimationDuration = null,
    animationEase = 'ease-in-out',
    animationFade = true,
    showAnimationFade = null,
    hideAnimationFade = null,
    animationScale = false,
    showAnimationScale = null,
    hideAnimationScale = null,
    customShowAnimation = null,
    customHideAnimation = null,

    closeOnClick = false,

    showToastIcon = true,
    showCloseIcon = true,
    onlyShowCloseIconOnHover = false,

    showButton = false,
    showButtonIcon = true,
    buttonText = '',
    onButtonClick = null,
    customButton = null,

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

    toastAttributes = null,
    toastIconAttributes = null,
    closeIconAttributes = null,

    onLoad = null,
    onHide = null,

    buttonIcon = `
        <svg  xmlns="http://www.w3.org/2000/svg"  width="1em"  height="1em"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-hand-click"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" /><path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" /><path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" /><path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" /><path d="M5 3l-1 -1" /><path d="M4 7h-1" /><path d="M14 3l1 -1" /><path d="M15 6h1" /></svg>
    `,
    defaultIcon = null,
    darkIcon,
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
    `
}) {
    console.log(`clearPreviousToasts: ${clearPreviousToasts}`);

    if (clearPreviousToasts) {
        document.querySelectorAll('.toaster').forEach(toast => toast.ToasterHide())
    }

    if (duration != 0 && duration < animationDuration) {
        animationDuration = duration
    }

    const icons = {
        default: defaultIcon,
        dark: darkIcon,
        info: infoIcon,
        success: successIcon,
        warning: warningIcon,
        error: errorIcon,
    }

    const showAnimation = [{}, {}]
    const hideAnimation = [{}, {}]

    if (animationFade) {
        if (showAnimationFade === null) {
            showAnimationFade = true
        }

        if (hideAnimationFade === null) {
            hideAnimationFade = true
        }

        if (showAnimationFade) {
            showAnimation[0].opacity = 0
            showAnimation[1].opacity = 1
        }

        if (hideAnimationFade) {
            hideAnimation[0].opacity = 1
            hideAnimation[1].opacity = 0
        }
    }

    if (animationScale) {
        if (showAnimationScale === null) {
            showAnimationScale = true
        }

        if (hideAnimationScale === null) {
            hideAnimationScale = true
        }

        if (showAnimationScale) {
            showAnimation[0].scale = 0
            showAnimation[1].scale = 1
        }

        if (hideAnimationScale) {
            hideAnimation[0].scale = 1
            hideAnimation[1].scale = 0
        }
    }

    if (customShowAnimation) {
        showAnimation = customShowAnimation
    }

    if (customHideAnimation) {
        hideAnimation = customHideAnimation
    }

    const uuid = crypto.randomUUID()
    const div = document.createElement('div')
    div.classList.add('toaster-container')

    div.innerHTML = `
        <div class="toaster toaster-${type} toaster-${uuid} ${toastClassName}">
            ${(showToastIcon && icons[type]) ? `
                <div class="toaster-icon ${iconClassName}">
                    ${icons[type]}
                </div>
            ` : ''}
            <div class="toaster-content ${contentClassName}">
                <div class="toaster-text-content ${contentTextClassName}">
                    ${title ? `
                        <h1 class="toaster-title ${titleClassName}">${title}</h1>
                    `: ''}
                    <p class="toaster-text ${textClassName}">${text}</p>
                </div>
                ${customButton ? `
                    ${customButton}
                `: (showButton && buttonText.trim() != '') ? `
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
                <div class="toaster-close-icon toaster-close-icon-${uuid} ${closeIconClassName}">
                    ${closeIcon}
                </div>
            ` : ''}
        </div>
    `

    let method = onTop ? (position.startsWith('top') ? 'prepend' : 'append') : (position.startsWith('top') ? 'append' : 'prepend')
    document.querySelector(`[data-toaster-position-container="${position}"]`)[method](div)

    const toast = document.querySelector(`.toaster-${uuid}`)

    if (onLoad && typeof onLoad === 'function') {
        onLoad(toast)
    }

    switch (position) {
        case 'top-left':
            toast.style.top = '0'
            toast.style.left = '0'
            break
        case 'top':
            toast.style.top = '0'
            toast.style.left = '50%'
            toast.style.translate = '-50% 0'
            break
        case 'top-right':
            toast.style.top = '0'
            toast.style.right = '0'
            break
        case 'bottom-left':
            toast.style.bottom = '0'
            toast.style.left = '0'
            break
        case 'bottom':
            toast.style.bottom = '0'
            toast.style.left = '50%'
            toast.style.translate = '-50% 0'
            break
        case 'bottom-right':
            toast.style.bottom = '0'
            toast.style.right = '0'
            break
    }

    if (Object.keys(showAnimation[0]).length > 0 && Object.keys(showAnimation[1]).length > 0) {
        if (showAnimationDuration === null) {
            showAnimationDuration = animationDuration
        }

        toast.animate(showAnimation, {
            duration: showAnimationDuration,
            fill: 'forwards',
            easing: animationEase
        })
    }

    toast.ToasterHide = () => {
        if (toast.ToasterHiding) {
            return
        }

        toast.ToasterHiding = true

        if (toast.ToasterTimeout) {
            clearTimeout(toast.ToasterTimeout)
        }

        if (Object.keys(hideAnimation[0]).length > 0 && Object.keys(hideAnimation[1]).length > 0) {
            if (hideAnimationDuration === null) {
                hideAnimationDuration = animationDuration
            }

            toast.animate(hideAnimation, {
                duration: hideAnimationDuration,
                fill: 'forwards',
                easing: animationEase
            })

            setTimeout(() => {
                if (onHide && typeof onHide === 'function') {
                    onHide(toast)
                }

                toast.closest('.toaster-container').remove()
            }, hideAnimationDuration)
        } else {
            if (onHide && typeof onHide === 'function') {
                onHide(toast)
            }

            toast.closest('.toaster-container').remove()
        }
    }

    if (showCloseIcon) {
        const closeIcon = document.querySelector(`.toaster-close-icon-${uuid}`)
        closeIcon.addEventListener('click', toast.ToasterHide)

        if (onlyShowCloseIconOnHover) {
            closeIcon.style.opacity = 0

            toast.addEventListener('mouseenter', () =>
                closeIcon.style.opacity = 0.5
            )

            toast.addEventListener('mouseleave', () =>
                closeIcon.style.opacity = 0
            )

            closeIcon.addEventListener('mouseover', () =>
                closeIcon.style.opacity = 1
            )
        }
    }

    if (duration > 0) {
        let timeoutStartTime = Date.now();
        let timeoutTimeLeft = duration

        toast.ToasterTimeout = setTimeout(toast.ToasterHide, duration)

        if (pauseDurationOnHover) {
            toast.addEventListener('mouseenter', () => {
                if (!toast.ToasterTimeout) return
                if (toast.ToasterHiding) return

                clearTimeout(toast.ToasterTimeout)
                toast.ToasterTimeout = null
                timeoutTimeLeft -= Date.now() - timeoutStartTime;
            })

            toast.addEventListener('mouseleave', () => {
                if (toast.ToasterTimeout) return
                if (toast.ToasterHiding) return

                startTime = Date.now();
                toast.ToasterTimeout = setTimeout(toast.ToasterHide, timeoutTimeLeft)
            })
        }
    }

    if (closeOnClick) {
        toast.addEventListener('click', toast.ToasterHide)
    }

    if (onButtonClick && typeof onButtonClick === 'function') {
        const button = toast.querySelector(`.toaster-button`)

        if (button) {
            button.addEventListener('click', event => onButtonClick(event, toast, button))
        }
    }
}

function ToasterLoadPositionContainers() {
    const positions = ['top-left', 'top', 'top-right', 'bottom-left', 'bottom', 'bottom-right']

    const mainContainer = document.createElement('div')
    mainContainer.classList.add('toaster-position-container-main')
    document.body.appendChild(mainContainer)

    positions.forEach(position => {
        const div = document.createElement('div')
        div.classList.add('toaster-position-container')
        div.setAttribute('data-toaster-position-container', position)
        mainContainer.appendChild(div)
    })
}

window.addEventListener('DOMContentLoaded', ToasterLoadPositionContainers)