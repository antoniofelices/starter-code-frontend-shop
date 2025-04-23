import products from '../content/products.js'
import cart from '../content/cart.js'

const buy = (id) => {
    let selectProduct = products.find((product) => product.id == id)

    if (cart.includes(selectProduct)) {
        selectProduct.quantity += 1
    } else {
        selectProduct.quantity = 1
        cart.push(selectProduct)
    }
    console.log(cart)
}

export default buy
