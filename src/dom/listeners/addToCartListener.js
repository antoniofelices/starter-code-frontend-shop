import { addToCartButtons } from '@dom/selectors'
import addToCart from '@modules/addToCart'
import calculateTotal from '@modules/calculateTotal'
import counterCart from '@modules/counterCart'
import applyPromotionsCart from '@modules/applyPromotionsCart'

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
