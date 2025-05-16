import products from '@data/products.js'
import cart from '@data/cart.js'
import counterCart from '@modules/cart/counterCart.js'

const buy = (id) => {
    let selectProduct = products.find((product) => product.id == id)

    if (cart.includes(selectProduct)) {
        selectProduct.quantity += 1
    } else {
        selectProduct.quantity = 1
        cart.push(selectProduct)
    }
}

const applyPromotionsCart = () => {
    cart.forEach((product) => {
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

const cleanCart = () => {
    const shoppingCardModalBoy = document.querySelector(
        '#cartModal .modal-body'
    )
    cart.length = 0
    shoppingCardModalBoy.classList.add('d-none')
    counterCart()
}

const counterCart = () => {
    const countProduct = document.getElementById('count_product')
    const totalProducts = cart.reduce((acumulator, single) => {
        return acumulator + single.quantity
    }, 0)
    countProduct.textContent = totalProducts
}

const removeProductFromCart = () => {
    let productIndex = 0
    const totalPrice = document.getElementById('total_price')
    const removeProductButtons = Array.from(
        document.querySelectorAll('[data-remove-product-id]')
    )

    if (!removeProductButtons) return

    removeProductButtons.forEach((removeProductButton) => {
        removeProductButton.addEventListener('click', () => {
            let productID = removeProductButton.dataset.removeProductId
            productIndex = cart.findIndex((product) => product.id == productID)

            if (cart[productIndex].quantity >= 1) {
                const productQuantity = document.querySelector(
                    `#product-id-${productID} .product-quantity`
                )
                const productPrice = document.querySelector(
                    `#product-id-${productID} .product-price`
                )
                cart[productIndex].quantity--
                productQuantity.textContent = `${cart[productIndex].quantity}`
                productPrice.textContent = `$ ${calculateTotal()}`
                totalPrice.textContent = `${calculateTotal()}`
                counterCart()
            }

            if (cart[productIndex].quantity == 0) {
                const productRow = document.getElementById(
                    `product-id-${productID}`
                )
                productRow.innerHTML = ''
                cart.splice(productIndex, 1)
                totalPrice.textContent = `${calculateTotal()}`
            }
        })
    })
}

export {
    buy,
    applyPromotionsCart,
    cleanCart,
    counterCart,
    removeProductFromCart,
}
