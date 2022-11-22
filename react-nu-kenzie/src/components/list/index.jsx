import "./list.css";
import NoCard from "../../assets/NoCard.svg";
import { Card } from "../Card";

export const RenderList = ({
  listTransaction,
  setListTransaction,
  filterList,
  setFilterList,
}) => {
  const entries = () => {
    setFilterList(listTransaction.filter((elem) => elem.type == "Entrada"));
  };

  const out = () => {
    setFilterList(listTransaction.filter((elem) => elem.type == "Saida"));
  };

  const deleteFromHere = (uuid) => {
    setFilterList(listTransaction.filter((elem) => elem.uuid !== uuid));
    setListTransaction(listTransaction.filter((elem) => elem.uuid !== uuid));
  };

  const all = () => {
    setFilterList(listTransaction);
  };
  console.log(filterList);
  return (
    <section className="section-cards">
      <div className="list">
        <h2 className="title">Resumo financeiro</h2>
        <div className="div-btn-list">
          <button className="btn-summary all" onClick={() => all()}>
            Todos
          </button>
          <button className="btn-summary enter" onClick={() => entries()}>
            Entrada
          </button>
          <button className="btn-summary exit" onClick={() => out()}>
            Despesas
          </button>
        </div>
      </div>
      {listTransaction.length === 0 ? (
        <div>
          <h2>Você ainda não possui nenhum lançamento</h2>
          <img className="nocard" src={NoCard} alt="" />
        </div>
      ) : (
        <ul className="list-values">
          {filterList.map((transaction, index) => (
            <Card
              transaction={transaction}
              index={index}
              deleteFromHere={deleteFromHere}
            ></Card>
          ))}
        </ul>
      )}
    </section>
  );
};
