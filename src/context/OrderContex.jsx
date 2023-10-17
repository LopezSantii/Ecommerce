import { createOrder } from "../services"
import { createContext, useContext, useState } from 'react';
import { serverTimestamp } from "firebase/firestore";
import { useCart } from "./CartContext";
import { mapCartToOrder } from "../utils";

const OrderContext = createContext();

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }) {
  const {total,cart} = useCart()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefono: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
    
  const handleSubmit = () => {
    const ordenSet = {
    buyer: formData,
    items: mapCartToOrder(cart),
    total : total(),
    date : serverTimestamp(),
    }
    createOrder(ordenSet);
  };

  const Order = () => {
    return (
      <div className="row mx-2">
        <label>Nombre</label>
        <input
          className="mb-3 col-12"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <label>Correo electrónico</label>
        <input
          className="mb-3"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <label>Telefono</label>
        <input
          className="mb-3"
          type="text"
          name="telefono"
          value={formData.telefono}
          onChange={handleInputChange}
        />
      </div>
    );
};

  return (
    <OrderContext.Provider value={{ formData, handleInputChange, handleSubmit, Order}}>
      {children}
    </OrderContext.Provider>
  );
}

