import { useModal } from "../../context/ModalContex"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartItem from "../CartItem/CartItem";
import { useCart } from "../../context/CartContext";

function CartDetail() {

    // se usa el context para poder abrir el modal en cualquier page
    const {isModalOpen, closeModal} = useModal()
    const handleClose = () => closeModal();
    const { cart ,removeFromCart} = useCart()

  return (
    <>
      <Modal show={isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de compras</Modal.Title>
        </Modal.Header>
              <Modal.Body>
                  <section>
                    {cart.map((cart) => (
                    <CartItem removeFromCart={removeFromCart} products={cart} key={cart.id} />
                    ))}
                  </section>
              </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartDetail;
