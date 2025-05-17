import { addToCartButtons } from '@ui/selectors'
import { addToCart } from '@core/cart'
import { applyPromotionsCart } from '@core/cart'
import printCounter from '@ui/printCounter'
import calculateTotal from '@helpers/calculateTotal'

const addCartListener = () => {
    let idProduct = 0

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', () => {
            idProduct = button.dataset.productId
            addToCart(idProduct)
            printCounter()
            applyPromotionsCart()
            calculateTotal()
        })
    })
}

export default addCartListener
