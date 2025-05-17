import { cartList } from '@ui/selectors'
import cartData from '@data/cartData.js'

const printProductCart = () => {
    const removeMessage = `-1 item`

    cartList.innerHTML = ''

    cartData.forEach((product) => {
        let subTotalProduct = Number(
            product.subtotalWithDiscount * product.quantity
        ).toFixed(2)
        cartList.innerHTML += `
        <tr id="product-id-${product.id}">
            <th scope="row">${product.name}</th>
            <td>$ ${product.subtotalWithDiscount}</td>
            <td class="product-quantity">${product.quantity}</td>
            <td class="product-price">$ ${subTotalProduct}</td>
            <td><a href="#" data-remove-product-id="${product.id}">${removeMessage}</a></td>
        </tr>
        `
    })
}

export default printProductCart
