import "./header.css";
import logoblack from "../../assets/logoblack.png";
import { Form } from "../Form";
import { List } from "../list";
import { Card } from "../Card";
export const Header = ({ logout }) => {
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
        <Form></Form>
        <List card={Card()}></List>
      </section>
    </div>
  );
};
