import Button from "./Button.jsx";
import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({ children, buttonCaption }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="border-0 shadow-lg col-9 col-lg-7 col-xl-6"
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        borderRadius: "8px",
        padding: "30px",
        transition: "opacity 0.3s ease",
      }}
    >
      {children}
      <form method="dialog" className="text-end">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});
export default Modal;
