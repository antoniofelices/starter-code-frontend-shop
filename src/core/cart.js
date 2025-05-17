import productsData from '@data/productsData.js'
import cartData from '@data/cartData.js'

const addToCart = (id) => {
    let selectProduct = productsData.find((product) => product.id == id)

    if (cartData.includes(selectProduct)) {
        selectProduct.quantity += 1
    } else {
        selectProduct.quantity = 1
        cartData.push(selectProduct)
    }
}

const applyPromotionsCart = () => {
    cartData.forEach((product) => {
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
    cartData.length = 0
    shoppingCardModalBoy.classList.add('d-none')
    counterCart()
}

const counterCart = () => {
    const countProduct = document.getElementById('count_product')
    const totalProducts = cartData.reduce((acumulator, single) => {
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

export {
    addToCart,
    applyPromotionsCart,
    cleanCart,
    counterCart,
    removeProductFromCart,
}
