import cart from '@content/cart.js'

const cleanCart = () => {
    const shoppingCardModalBoy = document.querySelector(
        '#cartModal .modal-body'
    )
    cart.length = 0
    shoppingCardModalBoy.classList.add('d-none')
}
export default cleanCart
