import printProductOnCart from './printProductOnCart.js'
import removeProductFromCart from './removeProductFromCart.js'
import calculateTotal from './calculateTotal.js'

const printCart = () => {
    const totalPrice = document.getElementById('total_price')

    printProductOnCart()
    removeProductFromCart()
    totalPrice.textContent = `${calculateTotal()}`
}

export default printCart
