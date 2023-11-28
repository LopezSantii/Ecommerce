export const mapCartToOrder = (cart) => {
    return cart.map(item => ({
        id: item.id,
        title: item.title,
        quantity: item.quantity,
        price : item.price
    }))
}

export const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const tieneMayuscula = /[A-Z]/;
export const tieneMinuscula = /[a-z]/;
export const tieneNumero = /\d/;