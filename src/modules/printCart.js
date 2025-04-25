import cart from '../content/cart.js'
import calculateTotal from './calculateTotal.js'

const printCart = () => {
    const totalPrice = document.getElementById('total_price')
    const cartList = document.getElementById('cart_list')

    cartList.innerHTML = ''

    cart.forEach((product) => {
        let subTotalProduct = Number(
            product.subtotalWithDiscount * product.quantity
        ).toFixed(2)
        cartList.innerHTML += `
        <tr>
            <th scope="row">${product.name}</th>
            <td>$ ${product.subtotalWithDiscount}</td>
            <td>${product.quantity}</td>
            <td>$ ${subTotalProduct}</td>
        </tr>
        `
    })

    totalPrice.textContent = `${calculateTotal()}`
}

export default printCart
