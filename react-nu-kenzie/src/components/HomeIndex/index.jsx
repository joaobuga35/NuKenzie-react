import logowhite from "../../assets/logowhite.png";
import illustration from "../../assets/illustration.png";
import "./style.css";
export const HomeIndex = () => {
  return (
    <div className="home-index">
      <div>
        <img src={logowhite} alt="" />
        <h1>Centralize o controle das suas finanças</h1>
        <span>de forma rápida e segura</span>
        <button>Iniciar</button>
      </div>

      <div>
        <img src={illustration} alt="" />
      </div>
    </div>
  );
};
