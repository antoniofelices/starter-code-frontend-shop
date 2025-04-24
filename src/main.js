import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import buy from './modules/buy'
import cleanCart from './modules/cleanCart'
import calculateTotal from './modules/calculateTotal'
import applyPromotionsCart from './modules/applyPromotionsCart'
import printCart from './modules/printCart'

// Buy
;(() => {
    const addToCartButtons = Array.from(
        document.getElementsByClassName('add-to-cart')
    )
    let idProduct = 0

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            idProduct = button.dataset.productId
            buy(idProduct)
            applyPromotionsCart()
            calculateTotal()
        })
    })
})()

// Print Cart
;(() => {
    const launchModalCard = document.getElementById('launch-modal-card')
    launchModalCard.addEventListener('click', () => {
        printCart()
    })
})()

// Clear Cart
;(() => {
    const cleanCartButton = document.getElementById('clean-cart')
    if (!cleanCartButton) return
    cleanCartButton.addEventListener('click', () => {
        cleanCart()
        calculateTotal()
    })
})()
