export const selectors = {
    skipButton: '.sr-blade-skip-button-active',
    closestickyIframeButton: '.sr-blade-close-button',
    video: {
        videoPlayer: '[playsinline="playsinline"]',
        nextButton: '.sr-blade-next-play'
    }
}
export enum ASSERTS {
 BE_VISIBLE = 'be.visible',
 NOT_EXIST = 'not.exist',
 NOT_BE_VISIBLE = 'not.be.visible',
 HAVE_CSS = 'have.css',
 EQUEALS = 'eq' 
}
export enum TEXTS {
    BOTTOM = 'bottom',
    HEIGHT = 'height',
    WIDTH = 'width'
}
export enum REQUESTS_ACTIONS {
    adIframeClosed = 'xbc',
    skipButtonClicked = 'skipButtonClicked',
    skippableStateChanged = 'skippableStateChanged',
    stickychange = 'stickychange',
    secondPalyerAd = 'ai',
    adStrated = 'adStrated'
}

export const videoPlayerSize = {
    height: '250px',
    width: '380px'
}