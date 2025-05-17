import { totalPrice } from '@ui/selectors'
import printProductOnCart from '@ui/printProductOnCart'
import { removeProductFromCart } from '@core/cart'
import calculateTotal from '@helpers/calculateTotal'

const printCart = () => {
    printProductOnCart()
    removeProductFromCart()
    totalPrice.textContent = `${calculateTotal()}`
}

export default printCart
