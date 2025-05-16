import { addToCartButtons } from '@ui/selectors'
import { addToCart } from '@features/cart'
import { applyPromotionsCart } from '@features/cart'
import { counterCart } from '@features/cart'
import { calculateTotal } from '@helpers/calculateTotal'

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
