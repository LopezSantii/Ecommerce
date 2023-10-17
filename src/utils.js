export const mapCartToOrder = (cart) => {
    return cart.map(item => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price : item.price
    }))
}