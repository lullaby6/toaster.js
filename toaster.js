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
    /* background-color: rgba(255, 255, 0, 0.342); */
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
    /* opacity: 0.75; */
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
    /* opacity: 1; */
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
        /* background-color: rgba(255, 0, 0, 0.473); */
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