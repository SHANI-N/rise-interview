
import {REQUESTS_ACTIONS} from "../fixtures/helpers"

export const trackServerRequest = () => {
    cy.intercept('GET', 'https://sdk.streamrail.com/blade/sr.bladex.js').as('serverReq')
}

//tasks requests
const requestBaseUrl = 'https://k.streamrail.com/m'
export const baseRequest = (a: string): Cypress.Chainable => {
    return cy.intercept('POST', requestBaseUrl, {
        body: {
            e: [{
                a
            }]
        }
    })
}
export const secondPalyerAd = () => {
    baseRequest(REQUESTS_ACTIONS.secondPalyerAd).as(REQUESTS_ACTIONS.secondPalyerAd)
}


export const adIframeClosed = (): void => {
    baseRequest(REQUESTS_ACTIONS.adIframeClosed)
    .as(REQUESTS_ACTIONS.adIframeClosed)
}

export const stickychange = (): void => {
    baseRequest(REQUESTS_ACTIONS.stickychange)
    .as(REQUESTS_ACTIONS.stickychange)
}

export const adStrated = () => {
    baseRequest(REQUESTS_ACTIONS.adStrated)
    .as(REQUESTS_ACTIONS.adStrated)
}

export const skipButtonClicked = (): void => {
    baseRequest(REQUESTS_ACTIONS.skipButtonClicked)
        .as(REQUESTS_ACTIONS.skipButtonClicked)
}

export const skippableStateChanged = (): void => {
    baseRequest(REQUESTS_ACTIONS.skippableStateChanged)
        .as(REQUESTS_ACTIONS.skippableStateChanged)
}