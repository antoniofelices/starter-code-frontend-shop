import cart from '@data/cart.js'

const calculateTotal = () => {
    let totalAmout = 0

    totalAmout = cart.reduce((acumulator, single) => {
        return acumulator + single.subtotalWithDiscount * single.quantity
    }, 0)

    totalAmout = Number(totalAmout.toFixed(2))
    return totalAmout
}

export default calculateTotal
