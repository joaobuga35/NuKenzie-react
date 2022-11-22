import "./header.css";
import logoblack from "../../assets/logoblack.png";
import { Form } from "../Form";
import { RenderList } from "../list";
export const Header = ({
  logout,
  listTransaction,
  setListTransaction,
  filterList,
  setFilterList,
}) => {
  return (
    <div className="principal-content">
      <header className="head">
        <div className="div-head">
          <img src={logoblack} alt="" />
          <button className="button-nav" onClick={() => logout()}>
            Início
          </button>
        </div>
      </header>
      <section className="section-principal">
        <Form
          listTransaction={listTransaction}
          setListTransaction={setListTransaction}
          filterList={filterList}
          setFilterList={setFilterList}
        ></Form>
        <RenderList
          listTransaction={listTransaction}
          setListTransaction={setListTransaction}
          filterList={filterList}
          setFilterList={setFilterList}
        ></RenderList>
      </section>
    </div>
  );
};
