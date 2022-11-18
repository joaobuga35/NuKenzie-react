import logowhite from "../../assets/logowhite.png";
import illustration from "../../assets/illustration.png";
import "./style.css";
import { Buttons } from "../Buttons";
export const HomeIndex = () => {
  const nameButton = "Iniciar";
  return (
    <div className="home-index">
      <div className="container">
        <div className="div-information">
          <img src={logowhite} alt="" />
          <h1>Centralize o controle das suas finanças</h1>
          <span>de forma rápida e segura</span>
          <Buttons buttonName={nameButton} />
        </div>

        <div>
          <img className="logotype" src={illustration} alt="" />
        </div>
      </div>
    </div>
  );
};
