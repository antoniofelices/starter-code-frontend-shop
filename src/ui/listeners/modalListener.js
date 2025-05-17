import { launchShoppingCard, cleanCartButton } from '@ui/selectors'
import { removeAllProducts } from '@core/cart'
import { cleanCart } from '@ui/cartUI'
import openModal from '@ui/openModal'

const modalListener = () => {
    if (!launchShoppingCard || !cleanCartButton) return

    launchShoppingCard.addEventListener('click', () => {
        openModal()
    })

    cleanCartButton.addEventListener('click', () => {
        removeAllProducts()
        cleanCart()
    })
}

export default modalListener
