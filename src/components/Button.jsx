export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="btn btn-secondary"
      style={{ background: "black", color: "white", border: "none" }}
    >
      {children}
    </button>
  );
}
