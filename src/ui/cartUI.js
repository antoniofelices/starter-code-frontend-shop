import { cartList, totalPrice, shoppingCardModalBoy } from '@ui/selectors'
import cartData from '@data/cartData'
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

const removeProductFromCart = () => {
    let productIndex = 0
    // const totalPrice = document.getElementById('total_price')
    const removeProductButtons = Array.from(
        document.querySelectorAll('[data-remove-product-id]')
    )

    if (!removeProductButtons) return

    removeProductButtons.forEach((removeProductButton) => {
        removeProductButton.addEventListener('click', () => {
            let productID = removeProductButton.dataset.removeProductId
            productIndex = cartData.findIndex(
                (product) => product.id == productID
            )

            if (cartData[productIndex].quantity >= 1) {
                const productQuantity = document.querySelector(
                    `#product-id-${productID} .product-quantity`
                )
                const productPrice = document.querySelector(
                    `#product-id-${productID} .product-price`
                )
                cartData[productIndex].quantity--
                productQuantity.textContent = `${cartData[productIndex].quantity}`
                productPrice.textContent = `$ ${calculateTotal()}`
                totalPrice.textContent = `${calculateTotal()}`
                counterCart()
            }

            if (cartData[productIndex].quantity == 0) {
                const productRow = document.getElementById(
                    `product-id-${productID}`
                )
                productRow.innerHTML = ''
                cartData.splice(productIndex, 1)
                totalPrice.textContent = `${calculateTotal()}`
            }
        })
    })
}

const printCart = () => {
    printProductOnCart()
    removeProductFromCart()
    totalPrice.textContent = `${calculateTotal()}`
}

const cleanCart = () => {
    shoppingCardModalBoy.classList.add('d-none')
}

export { printProductOnCart, removeProductFromCart, printCart, cleanCart }
