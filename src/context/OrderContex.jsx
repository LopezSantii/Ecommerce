import { createOrder } from "../services"
import { createContext, useContext, useState } from 'react';
import { serverTimestamp } from "firebase/firestore";
import { useCart } from "./CartContext";
import { mapCartToOrder } from "../utils";
import Swal from "sweetalert2";
import { useModal } from "./ModalContex";

const OrderContext = createContext();

export function useOrder() {
  return useContext(OrderContext);
}

export function OrderProvider({ children }) {
  const [compra, setCompra] = useState(true)
  const {closeModal} = useModal() 
  const { total, cart, clearCart } = useCart()
  
  const siguiente = () => {
    setCompra(false)
  }

  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  
    
    const handleSubmit = () => {
      const ordenSet = {
      buyer: formData,
      items: mapCartToOrder(cart),
      total : total(),
      date : serverTimestamp(),
      }
      closeModal();
      createOrder(ordenSet)
        .then((docRef) => {
          Swal.fire({
            title: "Compra exitosa",
            icon: "success",
            text: `Tu id de compra es ${docRef.id}`,
            confirmButton: "Aceptar",
          });
        })
        .catch(() => {
          Swal.fire({
            title: "Oops...",
            icon: "error",
            text: `Parece que algo salio mal, vuelve a intentar en unos minutos`,
            confirmButton: "Aceptar",
          });
        })
        .finally(() => {
          clearCart()
          setCompra(true)
        })
    }
    
  

  const Order = () => {
    return (
      <div className="row mx-2">
        <label>Nombre</label>
        <input
          className="mb-3 col-12"
          name="nombre"
          onChange={handleInputChange}
        />
        <label>Email</label>
        <input
          className="mb-3"
          name="email"
          onChange={handleInputChange}
        />
        <label>Telefono</label>
        <input
          className="mb-3"
          name="telefono"
          onChange={handleInputChange}
        />
      </div>
    );
  };

  return (
    <OrderContext.Provider value={{ formData, handleInputChange, handleSubmit, Order, siguiente,compra}}>
      {children}
    </OrderContext.Provider>
  );
};

