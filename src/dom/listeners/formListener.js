import { formCheckout } from '@dom/selectors'
import checkoutValidate from '@modules/checkoutValidate'

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
