import printProductOnCart from '@modules/cart/printProductOnCart.js'
import removeProductFromCart from '@modules/cart/removeProductFromCart.js'
import calculateTotal from '@modules/cart/calculateTotal.js'

const printCart = () => {
    const totalPrice = document.getElementById('total_price')

    printProductOnCart()
    removeProductFromCart()
    totalPrice.textContent = `${calculateTotal()}`
}

export default printCart
