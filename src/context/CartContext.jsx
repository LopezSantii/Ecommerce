import React, { createContext, useContext, useState } from 'react';
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

// Crea el contexto del carrito
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Agregar un producto al carrito
  const addToCart = (product, quantity) => {
    
    const productInCart = cart.find((item) => item.id === product.id);

    if (productInCart) {
      const newCart = cart.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          }
        }
        return item;
      })
      setCart(newCart)
    } else {
      setCart([...cart, {...product, quantity}]);
    }

    Toastify({
      text: "Producto agregado",
      duration: 800,
      newWindow: true,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "black",
      },
    }).showToast();
  };

  // Eliminar un producto del carrito
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);

        Toastify({
        text: "Producto eliminado",
        duration: 800,
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
          background: "black",
        },
      }).showToast();
  };

  // Precio total del carrito
  const total = () => {
    return cart.reduce((acc, item) => acc + (item.quantity * item.price), 0)
  }

  // Limpiar el carrito
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

// Hook personalizado para acceder al contexto del carrito
export function useCart() {
  return useContext(CartContext);
}
