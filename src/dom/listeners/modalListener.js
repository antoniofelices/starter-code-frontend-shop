import { launchShoppingCard, cleanCartButton } from '@dom/selectors'
import cleanCart from '@modules/cleanCart'
import openModal from '@modules/openModal'

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
