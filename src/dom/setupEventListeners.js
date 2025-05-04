import addCartListener from '@dom/listeners/addToCartListener'
import formListener from '@dom/listeners/formListener'
import modalListener from '@dom/listeners/modalListener'

const setupEventListeners = () => {
    addCartListener()
    formListener()
    modalListener()
}

export default setupEventListeners
