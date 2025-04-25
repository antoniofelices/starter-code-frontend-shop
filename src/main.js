import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import addToCart from './modules/addToCart'
import cleanCart from './modules/cleanCart'
import calculateTotal from './modules/calculateTotal'
import applyPromotionsCart from './modules/applyPromotionsCart'
import openModal from './modules/openModal'

// Buy
;(() => {
    const addToCartButtons = Array.from(
        document.getElementsByClassName('add-to-cart')
    )
    let idProduct = 0

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            idProduct = button.dataset.productId
            addToCart(idProduct)
            applyPromotionsCart()
            calculateTotal()
        })
    })
})()

// Shopping Card
;(() => {
    const launchShoppingCard = document.getElementById('launch-shopping-card')
    const cleanCartButton = document.getElementById('clean-shopping-cart')

    if (!launchShoppingCard || !cleanCartButton) return

    launchShoppingCard.addEventListener('click', () => {
        openModal()
    })

    cleanCartButton.addEventListener('click', () => {
        cleanCart()
    })
})()
