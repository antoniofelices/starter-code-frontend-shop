import { shoppingCardModalBoy } from '@ui/selectors'
import cartData from '@data/cartData'
import { printCart } from '@ui/cartUI'

const openModal = () => {
    if (cartData.length < 1) return ''

    shoppingCardModalBoy.classList.remove('d-none')
    printCart()
}

export default openModal
