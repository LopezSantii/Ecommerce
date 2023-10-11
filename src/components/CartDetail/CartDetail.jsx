import { useModal } from "../../context/ModalContex"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CartItem from "../CartItem/CartItem";
import { useCart } from "../../context/CartContext";

function Example() {

    // se usa el context para poder abrir el modal en cualquier page
    const {isModalOpen, openModal, closeModal} = useModal()
    const handleClose = () => closeModal();
    const handleShow = () => openModal();
    const {cart} = useCart()

  return (
    <>
      <Modal show={isModalOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Carrito de compras</Modal.Title>
        </Modal.Header>
              <Modal.Body>
                  <section>
                    {cart.map((cart) => (
                    <CartItem products={cart} key={cart.id} />
                    ))}
                  </section>
              </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
