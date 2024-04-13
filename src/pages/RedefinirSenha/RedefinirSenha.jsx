import { Link } from "react-router-dom";
import "../Login/Login.css";
 import Logo from "../Login/img/Easytime.png"

export function RedefinirSenha() {

  return (
    <div className="container">
      <form>
        <span>Redefinição de senha</span>

        <div className="inputContainer">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="E-mail ou corem"
          />
        </div>

        <div className="inputContainer">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Digite uma senha"
          />
        </div>
        
        <div className="inputContainer">
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Confirma nova senha"
          />
        </div>

        <button className="button">
        Confirma
        </button>
        <div className="footer">
          <p>Você ja tem uma conta?</p>
          <Link to="/">Acesse sua conta aqui</Link>
        </div>
      </form>
      { <img src={Logo} alt="Logo Site" /> }
    </div>
  );
}

 export default RedefinirSenha
