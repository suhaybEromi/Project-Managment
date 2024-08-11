import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classess =
    "form-control border-top-0 border-start-0 border-end-0 border-secondary";
  return (
    <p className="fw-bold text-uppercase">
      <label>{label}</label>
      {textarea ? (
        <textarea ref={ref} className={classess} {...props} />
      ) : (
        <input ref={ref} className={classess} {...props} />
      )}
    </p>
  );
});

export default Input;
