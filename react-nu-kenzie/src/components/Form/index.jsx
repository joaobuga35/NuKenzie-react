import "./form.css";
import { Button } from "../Buttons";
import { TotalMoney } from "../TotalMoney";
export const Form = () => {
  return (
    <section>
      <form className="form-numbers">
        <label className="label-description" htmlFor="descricao">
          Descrição
        </label>
        <input
          className="input-text"
          type="text"
          name="descricao"
          id="description"
          placeholder="Digite aqui sua descrição"
        />
        <span className="span-example">Ex: Compra de roupas</span>

        <div className="div-select-value">
          <div className="div-value">
            <label className="label-description" htmlFor="valor">
              Valor
            </label>
            <input
              className="input-number"
              type="number"
              name="value"
              id="value-user"
              placeholder="1"
            />
            <span className="span-position">R$</span>
          </div>

          <div className="div-select">
            <label className="label-description" htmlFor="tipo">
              Tipo de valor
            </label>
            <select
              className="input-select"
              name="entrada-saida"
              id="enter-exit"
            >
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </select>
          </div>
        </div>
        <div className="div-btn">
          <Button className={"buttons-primary new-button"}>
            Inserir valor
          </Button>
        </div>
      </form>
      <TotalMoney></TotalMoney>
    </section>
  );
};
