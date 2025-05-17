import { countProductSpan } from '@ui/selectors'
import { counterCart } from '@core/cart'

const printCounter = () => {
    countProductSpan.textContent = counterCart()
}

export default printCounter
