const checkoutValidate = (event, formCheckout) => {
    let isValid = true
    const regexCharacters = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/
    const regexAtSign = /@/
    const regexNumbers = /^[0-9]+$/
    const regexCharactersAndNumbers = /^[A-Za-z0-9]+$/

    let fName = document.getElementById('fName')
    let fEmail = document.getElementById('fEmail')
    let fAddress = document.getElementById('fAddress')
    let fLastN = document.getElementById('fLastN')
    let fPassword = document.getElementById('fPassword')
    let fPhone = document.getElementById('fPhone')
    const allData = [fName, fEmail, fAddress, fLastN, fPassword, fPhone]
    const dataJustCharacters = [fName, fLastN]

    if (!formCheckout.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        isValid = false
    }

    allData.forEach((data) => {
        if (data.value.length < 3) {
            event.preventDefault()
            event.stopPropagation()
            data.classList.add('is-invalid')
            data.classList.remove('is-valid')
            isValid = false
        }
    })

    dataJustCharacters.forEach((data) => {
        if (!regexCharacters.test(data.value)) {
            event.preventDefault()
            event.stopPropagation()
            data.classList.add('is-invalid')
            data.classList.remove('is-valid')
            isValid = false
        }
    })

    if (!regexAtSign.test(fEmail.value)) {
        event.preventDefault()
        event.stopPropagation()
        fEmail.classList.add('is-invalid')
        fEmail.classList.remove('is-valid')
        isValid = false
    }

    if (!regexNumbers.test(fPhone.value)) {
        event.preventDefault()
        event.stopPropagation()
        fPhone.classList.add('is-invalid')
        fPhone.classList.remove('is-valid')
        isValid = false
    }

    if (!regexCharactersAndNumbers.test(fPassword.value)) {
        event.preventDefault()
        event.stopPropagation()
        fPhone.classList.add('is-invalid')
        fPhone.classList.remove('is-valid')
        isValid = false
    }

    if (isValid) formCheckout.classList.add('was-validated')
}

export default checkoutValidate
