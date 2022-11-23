import "./form.css";
import { TotalMoney } from "../TotalMoney";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export const Form = ({
  listTransaction,
  setListTransaction,
  filterList,
  setFilterList,
}) => {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("Entrada");
  const [value, setValue] = useState("");

  const object = (description, type, value) => {
    const newObject = {
      uuid: uuidv4(),
      description: description,
      type: type,
      value: value,
    };
    setListTransaction([...listTransaction, newObject]);
    setFilterList([...filterList, newObject]);
    setDescription("");
    setValue("");
    console.log(newObject);
  };

  return (
    <section>
      <form
        className="form-numbers"
        onSubmit={(event) => {
          event.preventDefault();
          object(description, type, value);
        }}
      >
        <label className="label-description" htmlFor="descricao">
          Descrição
        </label>
        <input
          required
          className="input-text"
          type="text"
          name="descricao"
          id="description"
          value={description}
          placeholder="Digite aqui sua descrição"
          onChange={(event) => setDescription(event.target.value)}
        />
        <span className="span-example">Ex: Compra de roupas</span>

        <div className="div-select-value">
          <div className="div-value">
            <label className="label-description" htmlFor="valor">
              Valor
            </label>
            <input
              required
              className="input-number"
              type="number"
              name="value"
              id="value-user"
              placeholder="1"
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <span className="span-position">R$</span>
          </div>

          <div className="div-select">
            <label className="label-description" htmlFor="tipo">
              Tipo de valor
            </label>
            <select
              required
              className="input-select"
              name="entrada-saida"
              id="enter-exit"
              onChange={(event) => setType(event.target.value)}
            >
              <option value="Entrada">Entrada</option>
              <option value="Saida">Saída</option>
            </select>
          </div>
        </div>
        <div className="div-btn">
          <button type="submit" className="buttons-primary new-button">
            Inserir valor
          </button>
        </div>
      </form>
      <TotalMoney listTransaction={listTransaction}></TotalMoney>
    </section>
  );
};
