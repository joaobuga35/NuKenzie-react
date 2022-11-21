import "./card.css";
import { FaTrash } from "react-icons/fa";

export const Card = () => {
  return (
    <li className="card-values card-green card-white">
      <div className="div-format-card">
        <h2 className="title-card">Descrição</h2>
        <div className="div-btn-trash">
          <span>R$ 6.660,00</span>
          <button className="button-trash">
            <FaTrash />
          </button>
        </div>
      </div>
      <small className="last-card-item">Entrada</small>
    </li>
  );
};
