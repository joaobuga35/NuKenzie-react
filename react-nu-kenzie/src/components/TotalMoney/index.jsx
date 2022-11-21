import "./totalMoney.css";

export const TotalMoney = () => {
  return (
    <div className="div-total-money">
      <div className="div-values">
        <span className="description-total">Valor total:</span>
        <span className="value-total">$ 8456</span>
      </div>
      <small className="message">O valor se refere ao saldo</small>
    </div>
  );
};
