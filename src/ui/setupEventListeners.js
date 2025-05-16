import addCartListener from '@ui/listeners/addToCartListener'
import formListener from '@ui/listeners/formListener'
import modalListener from '@ui/listeners/modalListener'

const setupEventListeners = () => {
    addCartListener()
    formListener()
    modalListener()
}

export default setupEventListeners
