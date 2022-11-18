import "./header.css";
import logoblack from "../../assets/logoblack.png";
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
    </div>
  );
};
