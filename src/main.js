import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import buy from './modules/buy'
import cleanCart from './modules/cleanCart'

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
        })
    })
})()

// Clear Cart
;(() => {
    const cleanCartButton = document.getElementById('clean-cart')
    cleanCartButton.addEventListener('click', () => {
        cleanCart()
    })
})()
