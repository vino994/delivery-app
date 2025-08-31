// src/components/Modal.js
import React from "react";
import "./Modal.css";

export default function Modal({ show, title, children, onClose, onConfirm, confirmText, cancelText }) {
  if (!show) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} aria-modal="true" role="dialog" aria-labelledby="modal-title" tabIndex={-1}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <header className="modal-header">
          <h2 id="modal-title">{title}</h2>
          <button className="modal-close" onClick={onClose} aria-label="Close modal">&times;</button>
        </header>
        <div className="modal-body">{children}</div>
        <footer className="modal-footer">
          <button className="btn btn-cancel" onClick={onClose}>{cancelText || "Cancel"}</button>
          <button className="btn btn-confirm" onClick={onConfirm}>{confirmText || "Confirm"}</button>
        </footer>
      </div>
    </div>
  );
}
