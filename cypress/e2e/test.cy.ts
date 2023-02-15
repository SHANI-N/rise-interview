import { TEXTS, videoPlayerSize } from "../fixtures/helpers"
import SkipFunction from "../support/functios/skipFunction"
import Sticky from "../support/functios/stickyFunctionl"
import Video from "../support/functios/video"
import { adIframeClosed, trackServerRequest } from "../support/requests"



const video = new Video()
beforeEach(() => {
  video.isVideoPlayersVisible()
})

describe('general tests', () => {
  before(()=>{trackServerRequest()})
  it('check server request complited', () => {
    cy.get('@serverReq').its('response.statusCode').should('eq', 200)
  })
  it('video player height and width', () => {
    video.verifyVideoPlayerHeightAndWidth(videoPlayerSize.height, videoPlayerSize.width)
  })
})

describe('skip ad tests', () => {
  const skip = new SkipFunction()
  it('skip ad', () => {
    video.clickFirstVideoPalyerNextButton()
    skip.skipAd()
  })
  it('get ai request', () => {
    video.clickSecondVideoPalyerNextButton()
    skip.getAIRequsest()
  })

})
describe('sticky tests', () => {
  const sticky = new Sticky()
  it('close sticky iframe', () => {
    sticky.clickOnCloseStickyIframe()
  })

})