import { should } from "chai";
import { ASSERTS, selectors, TEXTS } from "../../fixtures/helpers";

export default class Video {
    elements= {
        firstVidoePlayerElement: () => cy.get(selectors.video.videoPlayer).first(),
        secondVidoePlayerElement: () => cy.get(selectors.video.videoPlayer).last(),
        firstVideoPalyerNext: () => cy.get(selectors.video.nextButton).first(),
        secondVideoPalyerNext: () => cy.get(selectors.video.nextButton).last()
    }

    clickFirstVideoPalyerNextButton() {
        this.elements.firstVideoPalyerNext().click()
    }
    clickSecondVideoPalyerNextButton() {
        this.elements.secondVideoPalyerNext().click()
    }

    isVideoPlayersVisible() {
        this.elements.firstVideoPalyerNext().should(ASSERTS.BE_VISIBLE)
        this.elements.secondVideoPalyerNext().should(ASSERTS.BE_VISIBLE)
    }
    verifyVideoPlayerHeightAndWidth(height:string, width:string) {
        this.elements.firstVidoePlayerElement().
        should(ASSERTS.HAVE_CSS, TEXTS.HEIGHT).and(ASSERTS.EQUEALS, height)
        this.elements.firstVidoePlayerElement().
        should(ASSERTS.HAVE_CSS, TEXTS.WIDTH).and(ASSERTS.EQUEALS, width)
    }
}