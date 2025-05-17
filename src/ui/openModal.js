import { shoppingCardModalBoy } from '@ui/selectors'
import cartData from '@data/cartData.js'
import printCart from '@ui/printCart.js'

const openModal = () => {
    if (cartData.length < 1) return ''

    shoppingCardModalBoy.classList.remove('d-none')
    printCart()
}

export default openModal
