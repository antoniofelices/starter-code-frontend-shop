import cart from '../content/cart.js'

const applyPromotionsCart = () => {
    cart.forEach((product) => {
        product.subtotalWithDiscount = product.price
        if (
            (product.id == 1 || product.id == 3) &&
            product.quantity >= product.offer.number
        ) {
            product.subtotalWithDiscount =
                product.price - (product.price * product.offer.percent) / 100
        }
    })
}

export default applyPromotionsCart
