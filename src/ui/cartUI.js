import { cartList, totalPrice, shoppingCardModalBoy } from '@ui/selectors'
import cartData from '@data/cartData'
import { removeProductFromCart } from '@core/cart'
import calculateTotal from '@helpers/calculateTotal'

const printProductOnCart = () => {
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

const printCart = () => {
    printProductOnCart()
    removeProductFromCart()
    totalPrice.textContent = `${calculateTotal()}`
}

const cleanCart = () => {
    if (cartData.length === 0) shoppingCardModalBoy.classList.add('d-none')
}

export { printProductOnCart, printCart, cleanCart }
