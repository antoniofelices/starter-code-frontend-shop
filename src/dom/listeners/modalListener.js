import { launchShoppingCard, cleanCartButton } from '@dom/selectors'
import cleanCart from '@modules/cart/cleanCart'
import openModal from '@modules/cart/openModal'

const modalListener = () => {
    if (!launchShoppingCard || !cleanCartButton) return

    launchShoppingCard.addEventListener('click', () => {
        openModal()
    })

    cleanCartButton.addEventListener('click', () => {
        cleanCart()
    })
}

export default modalListener
