import Modal from 'react-bootstrap/Modal';
import CartItem from "../CartItem/CartItem";
import Button from "../Button/Button";
import { useModal } from "../../context/ModalContex"
import { useCart } from "../../context/CartContext";
import { useOrder } from "../../context/OrderContex";

function CartDetail() {

  // se usa el context para poder abrir el modal en cualquier page
  const {isModalOpen, closeModal} = useModal()
  const handleClose = () => closeModal();
  const { cart, removeFromCart, total,updateCartItem } = useCart()  
  const { handleSubmit, Order,siguiente,compra} = useOrder()

  return (
    <>
      <Modal show={isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de compras</Modal.Title>
        </Modal.Header>
              <Modal.Body>
                  <section>
                    {
                      compra ?
                      cart.map((cart) => (
                      <CartItem updateCartItem={updateCartItem} removeFromCart={removeFromCart} products={cart} key={cart.id} />
                      ))
                      : <Order />
                    }
                  </section>
              </Modal.Body>
        <Modal.Footer>
          <p className={compra ? "m-auto" : "d-none"}> Total $ {total()}</p>
          <Button
            clase={compra ? "w-50" : "w-100 mx-2"}
            content={
              compra ? "Comprar" : "Terminar pedido"}
            funcion={compra ? siguiente : handleSubmit} />
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartDetail;
