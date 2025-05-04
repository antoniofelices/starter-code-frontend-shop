import printProductOnCart from '@modules/printProductOnCart.js'
import removeProductFromCart from '@modules/removeProductFromCart.js'
import calculateTotal from '@modules/calculateTotal.js'

const printCart = () => {
    const totalPrice = document.getElementById('total_price')

    printProductOnCart()
    removeProductFromCart()
    totalPrice.textContent = `${calculateTotal()}`
}

export default printCart
