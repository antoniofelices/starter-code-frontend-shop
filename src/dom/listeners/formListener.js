import { formCheckout } from '@dom/selectors'
import checkoutValidate from '@helpers/checkoutValidate'

const formListener = () => {
    if (!formCheckout) return

    formCheckout.addEventListener(
        'submit',
        (event) => {
            checkoutValidate(event, formCheckout)
        },
        false
    )
}

export default formListener
