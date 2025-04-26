import cart from '../content/cart.js'
import printCart from './printCart.js'

const openModal = () => {
    const shoppingCardModalBoy = document.querySelector(
        '#cartModal .modal-body'
    )

    if (cart.length < 1) return ''

    shoppingCardModalBoy.classList.remove('d-none')
    printCart()
}

export default openModal
