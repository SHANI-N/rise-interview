import { REQUESTS_ACTIONS, selectors, TEXTS } from "../../fixtures/helpers";
import { adIframeClosed, stickychange } from "../requests";

export default class Sticky {
    elements= {
        closeIframeButton: ()=> cy.get(selectors.closestickyIframeButton) 
    }
    clickOnCloseIframeButton() {
        this.elements.closeIframeButton().click()
    }

    clickOnCloseStickyIframe() {
        cy.scrollTo(TEXTS.BOTTOM)
        stickychange()
        cy.wait(`@${REQUESTS_ACTIONS.stickychange}`)
        adIframeClosed()
        this.clickOnCloseIframeButton()
        cy.wait(`@${REQUESTS_ACTIONS.adIframeClosed}`)
    }
}