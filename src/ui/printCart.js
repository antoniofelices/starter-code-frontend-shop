import printProductOnCart from '@ui/printProductOnCart'
import { removeProductFromCart } from '@features/cart'
import calculateTotal from '@helpers/calculateTotal'

const printCart = () => {
    const totalPrice = document.getElementById('total_price')

    printProductOnCart()
    removeProductFromCart()
    totalPrice.textContent = `${calculateTotal()}`
}

export default printCart
