import { launchShoppingCard, cleanCartButton } from '@ui/selectors'
import { cleanCart } from '@core/cart'
import openModal from '@ui/openModal'

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
