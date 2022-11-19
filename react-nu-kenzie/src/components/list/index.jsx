import "./list.css";
export const List = ({ card }) => {
  return (
    <section>
      <div className="list">
        <h2>Resumo financeiro</h2>
        <div className="div-btn-list">
          <button>Todos</button>
          <button>Entrada</button>
          <button>Saída</button>
        </div>
      </div>

      <ul></ul>
    </section>
  );
};
