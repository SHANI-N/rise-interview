import { ASSERTS, REQUESTS_ACTIONS, selectors, TEXTS } from "../../fixtures/helpers";
import { adIframeClosed, adStrated, baseRequest, secondPalyerAd, skipButtonClicked, skippableStateChanged, stickychange } from "../requests"

export default class SkipFunction {
    elements = {
        skipBattonFirstVideo: () => cy.get(selectors.skipButton).first(),
        skipBattonSecondVideo: () => cy.get(selectors.skipButton).last()
    }

    clickOnskipBattonFirstVideo() {
        return this.elements.skipBattonFirstVideo().click()
    }
    clickOnskipBattonSecondVideo() {
        this.elements.skipBattonSecondVideo().click()
    }

    //requests

    

    skipAd() {
        adStrated()
        cy.wait(`@${REQUESTS_ACTIONS.adStrated}`)
        skippableStateChanged()
        cy.wait(`@${REQUESTS_ACTIONS.skippableStateChanged}`)
        // wait for skip ad button to be clickable
        cy.wait(`@${REQUESTS_ACTIONS.skippableStateChanged}`, { timeout: 50000 })
        this.clickOnskipBattonFirstVideo()
        skipButtonClicked()
        cy.wait(`@${REQUESTS_ACTIONS.skipButtonClicked}`)
    }

    getAIRequsest() {
        // adIframeClosed()
        // stickychange()
        secondPalyerAd()


        // cy.get('.sr-blade-next-play').last().click()
        cy.wait(`@${REQUESTS_ACTIONS.secondPalyerAd}`)


    }
}