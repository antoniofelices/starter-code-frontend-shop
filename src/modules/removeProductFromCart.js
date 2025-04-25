import cart from '../content/cart.js'
import calculateTotal from './calculateTotal.js'

const removeProductFromCart = () => {
    let productIndex = 0
    const totalPrice = document.getElementById('total_price')
    const removeProductButtons = Array.from(
        document.querySelectorAll('[data-remove-product-id]')
    )

    if (!removeProductButtons) return

    removeProductButtons.forEach((removeProductButton) => {
        removeProductButton.addEventListener('click', () => {
            let productID = removeProductButton.dataset.removeProductId
            productIndex = cart.findIndex((product) => product.id == productID)

            if (cart[productIndex].quantity >= 1) {
                const productQuantity = document.querySelector(
                    `#product-id-${productID} .product-quantity`
                )
                const productPrice = document.querySelector(
                    `#product-id-${productID} .product-price`
                )
                cart[productIndex].quantity--
                productQuantity.textContent = `${cart[productIndex].quantity}`
                productPrice.textContent = `$ ${calculateTotal()}`
                totalPrice.textContent = `${calculateTotal()}`
            }

            if (cart[productIndex].quantity == 0) {
                const productRow = document.getElementById(
                    `product-id-${productID}`
                )
                productRow.innerHTML = ''
                cart.splice(productIndex, 1)
                totalPrice.textContent = `${calculateTotal()}`
            }
        })
    })
}

export default removeProductFromCart
