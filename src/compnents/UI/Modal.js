import React, {useState,  Fragment } from "react"
import ReactDOM from "react-dom" 
import { ModalForm, BackdropModal, AModal, Backdrop } from "./Modal.style"

const portalElement = document.getElementById('overlays');
console.log(portalElement)
  const Modal = (props) => {
  const [show, setShow] = useState(false);
  const renderBackdrop = (props) => <Backdrop {...props} onClick={props.onClose} />;

  return (
    <div className="modal-example">
      <button
        type="button"
        className="btn btn-primary mb-4"
        onClick={() => setShow(true)}
      >
        Open Modal
      </button>
      <AModal
        show={show}
        onHide={() => setShow(false)}
        renderBackdrop={renderBackdrop}
      >
        <div>
          <h4 id="modal-label">SHOPPING CART</h4>
          <p>{props.children}</p>
        </div>
      </AModal>
    </div>
  );

}

export default Modal;