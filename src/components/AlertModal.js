import "../index.css";

export default function AlertModal({ message, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="overlay">
      <div className="modal">
        <p>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
}
