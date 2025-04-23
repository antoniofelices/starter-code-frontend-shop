import cart from '../content/cart.js'

const cleanCart = () => {
    cart.length = 0
    console.log(cart)
}
export default cleanCart
