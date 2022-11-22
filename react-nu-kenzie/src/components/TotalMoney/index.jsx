import "./totalMoney.css";

export const TotalMoney = ({ listTransaction }) => {
  const newValue = listTransaction.reduce((currentValue, previousValue) => {
    if (previousValue.type === "Entrada") {
      return parseInt(currentValue) + parseInt(previousValue.value);
    } else {
      return parseInt(currentValue) - parseInt(previousValue.value);
    }
  }, 0);
  return (
    <div className="div-total-money">
      <div className="div-values">
        <span className="description-total">Valor total:</span>
        <span className="value-total">$ {newValue}</span>
      </div>
      <small className="message">O valor se refere ao saldo</small>
    </div>
  );
};
