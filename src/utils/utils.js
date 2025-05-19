const findIndex = (id, array) => {
    let index = 0
    if (!id) return index

    index = array.findIndex((item) => item.id == id)
    return index
}

export { findIndex }
