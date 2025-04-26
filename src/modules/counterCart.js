import cart from '../content/cart.js'

const counterCart = () => {
    const countProduct = document.getElementById('count_product')
    const totalProducts = cart.reduce((acumulator, single) => {
        return acumulator + single.quantity
    }, 0)
    countProduct.textContent = totalProducts
}

export default counterCart
