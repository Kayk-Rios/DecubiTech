
import Header from "../Header/Header"
import { Link } from "react-router-dom";
import imagem3 from "../../../public/voltar.png"

export function Home2() {



  return (
    <div className="Home2">
      <Header/>
  
      <div className="Voltar1">
      <Link to="/PreHome"> <img className="image2" src={imagem3} alt="Voltar" title="Voltar" /></Link>
       </div>
   
    </div>
  );
}


export default Home2