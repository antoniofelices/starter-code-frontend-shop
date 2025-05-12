import cart from '@content/cart.js'
import counterCart from '@modules/cart/counterCart.js'

const cleanCart = () => {
    const shoppingCardModalBoy = document.querySelector(
        '#cartModal .modal-body'
    )
    cart.length = 0
    shoppingCardModalBoy.classList.add('d-none')
    counterCart()
}
export default cleanCart
