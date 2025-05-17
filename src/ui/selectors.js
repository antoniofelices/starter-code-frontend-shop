const addToCartButtons = Array.from(
    document.getElementsByClassName('add-to-cart')
)
const launchShoppingCard = document.getElementById('launch-shopping-card')
const cleanCartButton = document.getElementById('clean-shopping-cart')
const formCheckout = document.getElementById('form-checkout')
const shoppingCardModalBoy = document.querySelector('#cartModal .modal-body')
const cartList = document.getElementById('cart_list')
const totalPrice = document.getElementById('total_price')

const fName = document.getElementById('fName')
const fEmail = document.getElementById('fEmail')
const fAddress = document.getElementById('fAddress')
const fLastN = document.getElementById('fLastN')
const fPassword = document.getElementById('fPassword')
const fPhone = document.getElementById('fPhone')

export {
    addToCartButtons,
    launchShoppingCard,
    cleanCartButton,
    formCheckout,
    shoppingCardModalBoy,
    cartList,
    totalPrice,
    fName,
    fEmail,
    fAddress,
    fLastN,
    fPassword,
    fPhone,
}
