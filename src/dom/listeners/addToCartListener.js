import { addToCartButtons } from '@dom/selectors'
import addToCart from '@modules/cart/addToCart'
import calculateTotal from '@modules/cart/calculateTotal'
import counterCart from '@modules/cart/counterCart'
import applyPromotionsCart from '@modules/cart/applyPromotionsCart'

const addCartListener = () => {
    let idProduct = 0

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            idProduct = button.dataset.productId
            addToCart(idProduct)
            counterCart()
            applyPromotionsCart()
            calculateTotal()
        })
    })
}

export default addCartListener
