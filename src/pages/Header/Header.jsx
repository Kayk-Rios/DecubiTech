import "../Login/Login.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="Contai">
      <nav className="ContainerHedNav">
        <ul>
          <li>
            <Link to="/Home2">Paciente</Link>
          </li>
          <li>
            <Link to="/Cadastro">Cadastro</Link>
          </li>
          <li>
            <Link to="/Relatorio">Relatorio</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
