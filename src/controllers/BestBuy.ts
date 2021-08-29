import { Context } from 'koa'
import puppeteer, { Page, Browser } from 'puppeteer'
import dotenv from 'dotenv'
import { BestBuyElements, BestBuyURLs, IRequestBody } from '../constants'
dotenv.config()

class BestBuyController {
  isHeadless: boolean = process.env.IS_HEADLESS === 'true'
  browser: Browser | undefined
  page: Page | undefined

  public async healthCheck(ctx: Context) {
    ctx.status = 200
    ctx.body = {
      controller: 'Best Buy',
      status: 'live',
    }
  }

  private setupBrowser = async () => {
    this.browser = await puppeteer.launch({
      headless: this.isHeadless,
    })
  }

  private setupPage = async () => {
    this.page = await this.browser!.newPage()
    this.isHeadless &&
      this.page!.setViewport({
        width: 1920,
        height: 1080,
        isMobile: false,
      })
  }

  private setup = async () => {
    await this.setupBrowser()
    await this.setupPage()
  }

  public buyItem = async (ctx: Context) => {
    const { url, shippingInformation, billingInformation } = ctx.request.body as IRequestBody

    await this.setup()
    await this.page!.goto(url!, { waitUntil: 'networkidle2' })
    await this.page!.waitForSelector(BestBuyElements.ADD_TO_CART_BUTTON)
    await this.page!.click(BestBuyElements.ADD_TO_CART_BUTTON)
    await this.page!.goto(BestBuyURLs.CART, { waitUntil: 'networkidle2' })
    await this.page!.waitForSelector('button[data-track="Checkout - Top"]')
    await this.page!.click('button[data-track="Checkout - Top"]')
    await this.page!.waitForSelector(BestBuyElements.CHECK_OUT_AS_GUEST_BUTTON)
    await this.page!.click(BestBuyElements.CHECK_OUT_AS_GUEST_BUTTON)
    await this.page!.waitForSelector('input[id="consolidatedAddresses.ui_address_2.firstName"]')
    await this.page!.type('input[id="consolidatedAddresses.ui_address_2.firstName"]', shippingInformation.firstName)
    await this.page!.type(BestBuyElements.LAST_NAME_INPUT, shippingInformation.lastName)
    await this.page!.type(BestBuyElements.ADDRESS_ONE_INPUT, shippingInformation.address1)

    if (shippingInformation.address2) {
      await this.page!.click(BestBuyElements.ADDRESS_TWO_BUTTON)
      await this.page!.waitForSelector(BestBuyElements.ADDRESS_TWO_INPUT)
      await this.page!.type(BestBuyElements.ADDRESS_TWO_INPUT, shippingInformation.address2)
    }

    await this.page!.type(BestBuyElements.CITY_INPUT, shippingInformation.city)
    await this.page!.select(BestBuyElements.STATE_SELECTOR, shippingInformation.state)
    await this.page!.type(BestBuyElements.ZIP_CODE_INPUT, shippingInformation.zipCode)
    await this.page!.click(BestBuyElements.SAVE_AS_BILLING_ADDRESS_BUTTON)
    await this.page!.type(BestBuyElements.EMAIL_INPUT, shippingInformation.emailAddress)
    await this.page!.type(BestBuyElements.PHONE_INPUT, shippingInformation.phoneNumber)
    await this.page!.click(BestBuyElements.CONTINUE_TO_PAYMENT_BUTTON)

    ctx.status = 200
    ctx.body = {
      status: 'we in here',
    }
  }
}

export default new BestBuyController()
