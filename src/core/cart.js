import productsData from '@data/productsData'
import cartData from '@data/cartData'
import { findIndex } from '@utils/utils'

const addToCart = (id) => {
    let selectProduct = productsData.find((product) => product.id == id)

    if (cartData.includes(selectProduct)) {
        selectProduct.quantity += 1
    } else {
        selectProduct.quantity = 1
        cartData.push(selectProduct)
    }
    return cartData
}

const removeToCart = (productID) => {
    let productIndex = 0
    // productIndex = cartData.findIndex((product) => product.id == productID)

    productIndex = findIndex(productID, cartData)

    if (cartData[productIndex].quantity >= 1) {
        cartData[productIndex].quantity--
    }
    if (cartData[productIndex].quantity === 0) {
        cartData.splice(productIndex, 1)
    }
    return cartData
}

const applyPromotionsCart = () => {
    cartData.forEach((product) => {
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

const counterCart = (totalItems) => {
    let totalProducts = 0
    if (totalItems === totalProducts) return totalProducts
    totalProducts = cartData.reduce((acumulator, single) => {
        return acumulator + single.quantity
    }, 0)
    return totalProducts
}

const removeAllProducts = () => {
    cartData.length = 0
    counterCart(cartData.length)
    return cartData
}

export {
    addToCart,
    removeToCart,
    applyPromotionsCart,
    removeAllProducts,
    counterCart,
}
