import { Link } from "react-router-dom";
import imagem1 from "../../../public/instagram.png"
import imagem2 from "../../../public/gmail.png"
import imagem3 from "../../../public/voltar.png"
export function Sobre() {



  return (
    <div className="Relatorio" >
        <Link to="/Relatorio"> <img className="image2" src={imagem3} alt="Voltar" title="Voltar" /></Link>
        
        <div className="paragrafos">
            <p>O sistema Easy time é capaz de monitorar quanto tempo o paciente está em determinada posição e envia um alerta aos enfermeiros</p>
            <p>Desta forma, o sistema Easy time informa ao enfermeiro o momento certo para executar a mudança de decúbito e assim evitar lesões como, as úlceras de pressão</p>
            <p>Atualmente, a mudança de decúbito é feita a cada duas horas de acordo com a inspeção visual do enfermeiro. Entretanto este tempo pode ser maior ou menor de acordo com o estado do paciente</p>
            <p className="Pultimo">Projeto desenvolvido para inclusão nos hospitais do SUS com a proposta de uma ferramenta de facilitação e  melhoria da qualidade de vida dos assistidos</p>

    
           
            <Link to="https://www.instagram.com/easy.time4/" target="_blank">  <img className="image1" src={imagem1} alt="Instagem do site" title="Instagem do site" />   </Link>

            <Link to="#" target="_blank">  <img className="image2" src={imagem2} alt="E-mail do site" title="E-mail do site" /> </Link>
          
        </div>

    </div>
  );
}


export default Sobre