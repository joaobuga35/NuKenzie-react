import { Card } from "../Card";
import "./list.css";
export const List = ({ card }) => {
  return (
    <section className="section-cards">
      <div className="list">
        <h2 className="title">Resumo financeiro</h2>
        <div className="div-btn-list">
          <button className="btn-summary all">Todos</button>
          <button className="btn-summary enter">Entrada</button>
          <button className="btn-summary exit">Despesas</button>
        </div>
      </div>
      <ul className="list-values">{card}</ul>
    </section>
  );
};
