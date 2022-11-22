import "./card.css";
import { FaTrash } from "react-icons/fa";

export const Card = ({ transaction, index, deleteFromHere }) => {
  return (
    <li
      id={index}
      key={index}
      className={`card-values ${
        transaction.type == "Entrada" ? "card-green" : "card-white"
      }`}
    >
      <div className="div-format-card">
        <h2 className="title-card">{transaction.description}</h2>
        <div className="div-btn-trash">
          <span>R$ {transaction.value}</span>
          <button
            className="button-trash"
            onClick={() => deleteFromHere(transaction.uuid)}
          >
            <FaTrash className={"button-trash-intern"} />
          </button>
        </div>
      </div>
      <small className="last-card-item">{transaction.type}</small>
    </li>
  );
};
