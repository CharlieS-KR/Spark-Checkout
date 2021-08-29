export interface IRequestBody {
  url: string
  shippingInformation: IShippingInformation
  billingInformation?: IBillingInformation
}

export interface IShippingInformation {
  firstName: string
  lastName: string
  address1: string
  address2?: string
  city: string
  state: string
  zipCode: string
  emailAddress: string
  phoneNumber: string
}

export interface IBillingInformation {
  firstName: string
  lastName: string
  address1: string
  address2?: string
  city: string
  state: string
  zipCode: string
  emailAddress: string
  phoneNumber: string
}

export enum BestBuyElements {
  ADD_TO_CART_BUTTON = 'button[data-button-state="ADD_TO_CART"]',
  CHECK_OUT_AS_GUEST_BUTTON = 'html body div.cia-app-container div.cia-actual-full-page-wrapper.lv section.cia.size-l.cia--two-column-v2 main.cia-wrapper.container div.cia-wrapper__main div.cia-secondary-content-v2 div.cia-guest-content div.button-wrap button.btn.btn-secondary.btn-lg.cia-guest-content__continue.guest',
  CONTINUE_TO_PAYMENT_BUTTON = 'html body div#checkout-container div div#checkoutApp div.page-spinner.page-spinner--out div div.checkout.large-view main div.checkout__container div.checkout__col.checkout__col--primary form.clearfix section.fulfillment div.streamlined__body-test div div.streamlined__test-styles div.button--continue button.btn.btn-lg.btn-block.btn-secondary',
  FIRST_NAME_INPUT = 'html body div#checkout-container div div#checkoutApp div.page-spinner.page-spinner--out div div.checkout.large-view main div.checkout__container div.checkout__col.checkout__col--primary form.clearfix section.fulfillment div.streamlined__body-test div.fulfillments-list div div.streamlined__shipping section.streamlined__section-rule.streamlined__section-rule-new div.row.streamlined__shipping--body div.col-sm-6.col-xs-12 section.shipping-fulfillment section.address-form.clearfix div.form-group.address-form__cell.address-form__first-name label div.clearFloat.has-error input#consolidatedAddresses.ui_address_1174.firstName.form-control',
  LAST_NAME_INPUT = 'html body div#checkout-container div div#checkoutApp div.page-spinner.page-spinner--out div div.checkout.large-view main div.checkout__container div.checkout__col.checkout__col--primary form.clearfix section.fulfillment div.streamlined__body-test div.fulfillments-list div div.streamlined__shipping section.streamlined__section-rule.streamlined__section-rule-new div.row.streamlined__shipping--body div.col-sm-6.col-xs-12 section.shipping-fulfillment section.address-form.clearfix div.form-group.address-form__cell.address-form__last-name label div.clearFloat.has-error input#consolidatedAddresses.ui_address_1174.lastName.form-control',
  ADDRESS_ONE_INPUT = 'html body div#checkout-container div div#checkoutApp div.page-spinner.page-spinner--out div div.checkout.large-view main div.checkout__container div.checkout__col.checkout__col--primary form.clearfix section.fulfillment div.streamlined__body-test div.fulfillments-list div div.streamlined__shipping section.streamlined__section-rule.streamlined__section-rule-new div.row.streamlined__shipping--body div.col-sm-6.col-xs-12 section.shipping-fulfillment section.address-form.clearfix div.form-group.address-form__cell.line1 div.clearFloat.has-error div.autocomplete__wrapper div input#consolidatedAddresses.ui_address_1174.street.form-control.autocomplete__input',
  ADDRESS_TWO_BUTTON = 'html body div#checkout-container div div#checkoutApp div.page-spinner.page-spinner--out div div.checkout.large-view main div.checkout__container div.checkout__col.checkout__col--primary form.clearfix section.fulfillment div.streamlined__body-test div.fulfillments-list div div.streamlined__shipping section.streamlined__section-rule.streamlined__section-rule-new div.row.streamlined__shipping--body div.col-sm-6.col-xs-12 section.shipping-fulfillment section.address-form.clearfix div.address-form__cell.address-form__showAddress2Block.address2_link button.c-button.c-button-link.btn.btn-link.v-medium.c-button-md.address-form__showAddress2Link',
  ADDRESS_TWO_INPUT = 'html body div#checkout-container div div#checkoutApp div.page-spinner.page-spinner--out div div.checkout.large-view main div.checkout__container div.checkout__col.checkout__col--primary form.clearfix section.fulfillment div.streamlined__body-test div.fulfillments-list div div.streamlined__shipping section.streamlined__section-rule.streamlined__section-rule-new div.row.streamlined__shipping--body div.col-sm-6.col-xs-12 section.shipping-fulfillment section.address-form.clearfix div.form-group.address-form__cell.line2 label div.clearFloat input#consolidatedAddresses.ui_address_1174.street2.form-control',
  CITY_INPUT = 'html body div#checkout-container div div#checkoutApp div.page-spinner.page-spinner--out div div.checkout.large-view main div.checkout__container div.checkout__col.checkout__col--primary form.clearfix section.fulfillment div.streamlined__body-test div.fulfillments-list div div.streamlined__shipping section.streamlined__section-rule.streamlined__section-rule-new div.row.streamlined__shipping--body div.col-sm-6.col-xs-12 section.shipping-fulfillment section.address-form.clearfix div.city-state-flex div.city-state-container div.city.form-group.address-form__cell.address-form__city label div.clearFloat.has-error input#consolidatedAddresses.ui_address_1174.city.form-control',
  STATE_SELECTOR = 'html body div#checkout-container div div#checkoutApp div.page-spinner.page-spinner--out div div.checkout.large-view main div.checkout__container div.checkout__col.checkout__col--primary form.clearfix section.fulfillment div.streamlined__body-test div.fulfillments-list div div.streamlined__shipping section.streamlined__section-rule.streamlined__section-rule-new div.row.streamlined__shipping--body div.col-sm-6.col-xs-12 section.shipping-fulfillment section.address-form.clearfix div.city-state-flex div.city-state-container div.state.form-group.address-form__cell.address-form__state label div.has-error div.c-dropdown-wrapper select#consolidatedAddresses.ui_address_1174.state.c-dropdown.v-medium.smart-select',
  ZIP_CODE_INPUT = 'html body div#checkout-container div div#checkoutApp div.page-spinner.page-spinner--out div div.checkout.large-view main div.checkout__container div.checkout__col.checkout__col--primary form.clearfix section.fulfillment div.streamlined__body-test div.fulfillments-list div div.streamlined__shipping section.streamlined__section-rule.streamlined__section-rule-new div.row.streamlined__shipping--body div.col-sm-6.col-xs-12 section.shipping-fulfillment section.address-form.clearfix div.form-group.address-form__cell.address-form__zip div.zip-container div.zip-flex label div.clearFloat.has-error input#consolidatedAddresses.ui_address_1174.zipcode.form-control',
  EMAIL_INPUT = 'html body div#checkout-container div div#checkoutApp div.page-spinner.page-spinner--out div div.checkout.large-view main div.checkout__container div.checkout__col.checkout__col--primary form.clearfix section.fulfillment div.streamlined__body-test div div.streamlined__test-styles section.contact-information div.form-group label div.clearFloat.has-error input#user.emailAddress.form-control',
  PHONE_INPUT = 'html body div#checkout-container div div#checkoutApp div.page-spinner.page-spinner--out div div.checkout.large-view main div.checkout__container div.checkout__col.checkout__col--primary form.clearfix section.fulfillment div.streamlined__body-test div div.streamlined__test-styles section.contact-information div.form-group label div.clearFloat.has-error input#user.phone.form-control',
  SAVE_AS_BILLING_ADDRESS_BUTTON = 'html body div#checkout-container div div#checkoutApp div.page-spinner.page-spinner--out div div.checkout.large-view main div.checkout__container div.checkout__col.checkout__col--primary form.clearfix section.fulfillment div.streamlined__body-test div.fulfillments-list div div.streamlined__shipping section.streamlined__section-rule.streamlined__section-rule-new div.row.streamlined__shipping--body div.col-sm-6.col-xs-12 section.shipping-fulfillment label.checkbox.save-for-billing-address.checkbox__container',
}

export enum BestBuyURLs {
  CART = 'https://www.bestbuy.com/cart',
}
