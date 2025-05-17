import cartData from '@data/cartData.js'

const calculateTotal = () => {
    let totalAmout = 0

    totalAmout = cartData.reduce((acumulator, single) => {
        return acumulator + single.subtotalWithDiscount * single.quantity
    }, 0)

    totalAmout = Number(totalAmout.toFixed(2))
    return totalAmout
}

export default calculateTotal
