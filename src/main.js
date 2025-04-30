import './scss/styles.scss'
import * as bootstrap from 'bootstrap'
import * as selectorDom from './modules/selectors-dom'
import addToCart from './modules/addToCart'
import cleanCart from './modules/cleanCart'
import calculateTotal from './modules/calculateTotal'
import counterCart from './modules/counterCart'
import applyPromotionsCart from './modules/applyPromotionsCart'
import openModal from './modules/openModal'
import checkoutValidate from './modules/checkoutValidate'

// Buy
;(() => {
    let idProduct = 0

    selectorDom.addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            idProduct = button.dataset.productId
            addToCart(idProduct)
            counterCart()
            applyPromotionsCart()
            calculateTotal()
        })
    })
})()

// Shopping Card
;(() => {
    if (!selectorDom.launchShoppingCard || !selectorDom.cleanCartButton) return

    selectorDom.launchShoppingCard.addEventListener('click', () => {
        openModal()
    })

    selectorDom.cleanCartButton.addEventListener('click', () => {
        cleanCart()
    })
})()

// Validate Checkout
;(() => {
    if (!selectorDom.formCheckout) return

    selectorDom.formCheckout.addEventListener(
        'submit',
        (event) => {
            checkoutValidate(event, formCheckout)
        },
        false
    )
})()
