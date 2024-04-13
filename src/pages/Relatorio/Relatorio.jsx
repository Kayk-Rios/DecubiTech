
import Header from "../Header/Header"
import { Link } from "react-router-dom";

export function Relatorio() {



  return (
    <div >
     
      <Header/>

       <div className="SobreHeader">
         <Link to="/Sobre">Sobre</Link>
         <Link to="/">Sair</Link>
       </div>
    </div>
  );
}


export default Relatorio