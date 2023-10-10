import React, { createContext, useContext, useState } from 'react';

// Crea el contexto del carrito
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar un producto al carrito
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
  };

  // Limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para acceder al contexto del carrito
export function useCart() {
  return useContext(CartContext);
}
