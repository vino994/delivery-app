import React, { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import Modal from "./Modal"; // adjust the path if needed
import "./Cart.css";

export default function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [itemToRemove, setItemToRemove] = useState(null);

  const handleClose = () => setShowModal(false);

  const handleShowRemove = (item) => {
    setItemToRemove(item);
    setModalType("remove");
    setShowModal(true);
  };

  const handleShowClear = () => {
    setModalType("clear");
    setShowModal(true);
  };

  const confirmAction = () => {
    if (modalType === "remove" && itemToRemove) {
      removeFromCart(itemToRemove.id);
    } else if (modalType === "clear") {
      clearCart();
    }
    setShowModal(false);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h1 className="text-muted">Your Cart is Empty</h1>
      </div>
    );
  }

  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <section className="container py-5">
      <h1 className="mb-4 text-center fw-bold">Your Cart</h1>

      <ul className="list-unstyled cart-list">
        {cartItems.map((item, idx) => (
          <li
            key={item.id}
            className="cart-item card shadow-sm mb-3 d-flex justify-content-between align-items-center p-3 rounded-4"
            style={{ animationDelay: `${idx * 0.2}s` }}
          >
            <div>
              <h5 className="mb-2">{item.name}</h5>
              <div className="d-flex gap-3 flex-wrap">
                <span className="badge quantity-badge">
                  Quantity: {item.quantity}
                </span>
                <span className="badge price-badge">
                  Price: ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>
            <button
              className="btn btn-remove"
              onClick={() => handleShowRemove(item)}
              aria-label={`Remove ${item.name} from cart`}
              title="Remove item"
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </li>
        ))}
      </ul>

      <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-3">
        <h4 className="mb-0">
          Total: <span className="text-total">${totalPrice.toFixed(2)}</span>
        </h4>
        <button
          className="btn btn-clear btn-lg"
          onClick={handleShowClear}
          title="Clear Cart"
        >
          Clear Cart
        </button>
      </div>

      {/* Use the custom modal */}
      <Modal
        show={showModal}
        title={modalType === "remove" ? "Confirm Remove" : "Clear Cart"}
        onClose={handleClose}
        onConfirm={confirmAction}
        confirmText={modalType === "remove" ? "Remove" : "Clear Cart"}
        cancelText="Cancel"
      >
        {modalType === "remove" && itemToRemove && (
          <p>
            Are you sure you want to remove <strong>{itemToRemove.name}</strong>{" "}
            from your cart?
          </p>
        )}
        {modalType === "clear" && (
          <p>Are you sure you want to clear all items from your cart?</p>
        )}
      </Modal>
    </section>
  );
}
