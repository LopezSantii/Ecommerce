import { createOrder } from "../services"
import { createContext, useContext, useState } from 'react';
import { serverTimestamp } from "firebase/firestore";
import { useCart } from "./CartContext";
import { mapCartToOrder } from "../utils";
import Swal from "sweetalert2";
import { useModal } from "./ModalContex";
import { regex } from "../utils";

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
    nombre: "",
    email: "",
    telefono: ""
  });

  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar las validaciones antes de enviar el formulario
    const validationErrors = {};

    if (formData.nombre.trim() === '') {
      validationErrors.nombre = 'Por favor, ingresa tu nombre correctamente';
    }

    if (!regex.test(formData.email)) {
      validationErrors.email = 'Por favor, ingresa tu correo electrónico correctamente';
    }

    if (Object.keys(validationErrors).length > 0) {
      // Si hay errores, actualiza el estado de los errores y detén el envío del formulario
      setErrors(validationErrors);
    } else {
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
      console.log('Datos del formulario:', ordenSet);
    }

    
  };

  return (
    <OrderContext.Provider value={{ formData,errors,setFormData, handleSubmit, siguiente,compra}}>
      {children}
    </OrderContext.Provider>
  );
};

