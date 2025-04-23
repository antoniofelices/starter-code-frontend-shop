import cart from '../content/cart.js'

const calculateTotal = () => {
    let totalAmout = 0
    const message = `Total amount`

    totalAmout = cart.reduce((acumulator, single) => {
        return acumulator + single.price * single.quantity
    }, 0)
    console.log(`${message} ${totalAmout}`)
}

export default calculateTotal
