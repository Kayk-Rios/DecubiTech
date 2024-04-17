import Logo from "./img/Easytime.png";
 import Header from "../Header/Header";
 import "./homecss/home.css";

export function PreHome() {
  return (
  
    <div > 
     <Header/>
      <div className="Divisao1">
        <div className="DivRelogio">
          <img
            className="Relogio"
            src={Logo}
            alt="Logo do Site"
            title="Logo do site"
          />
        </div>
        <div className="Decubitos">
          <ul>
            <li>Posições de Decúbito:</li>
            <li>Decúbito Dorsal</li>
            <li>Decúbito Ventral</li>
            <li>Decúbito Lateral Esquerdo </li>
            <li> Decúbito Lateral Direito</li>
            <li>Decúbito Fowler</li>
          </ul>


        </div>
      </div>
    </div>
  );
}

export default PreHome;
