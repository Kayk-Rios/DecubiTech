import { Link } from "react-router-dom";
import "../Login/Login.css";
import Logo from "./img/Easytime.png"


export function Login() {



  return (
    <div className="container">
        <form> <span>Informações de login</span>
          <div className="inputContainer">
            <input className="inpu"
              type="text"
              name="email"
              id="email"
              placeholder="Enfermeira@gmail.com"
            />
          </div>
          <div className="inputContainer">
            <input className="inpu"
              type="password"
              name="password"
              id="password"
              placeholder="Ex: mary630"
            />
          </div>
          <Link to="/RedefinirSenha">Esqueceu sua senha ?</Link>
          <button className="button">
             <Link to="/PreHome">Entrar</Link>
          </button>
          <div className="footer">
            <p>Você não tem uma conta?</p>
            <Link to="/Registro">Crie sua conta aqui </Link>
          </div>
        </form>
      



        <img className="Enfermeira" src={Logo} alt="Logo do Site" title="Logo do site" />
     
    </div>
    
  );
}

export default Login