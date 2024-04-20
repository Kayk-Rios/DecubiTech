import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function Form() {
  const [enviando] = useState(false);

  function UserData() {
    if (enviando) {
      toast.error("Aguarde, o envio está em andamento.");
      return;
    }
    toast.success("Relatório criado com sucesso!");
  }

  return (
    <div className="CadastroPaciente CadastroPaciente2">
      <form className="formPaciente">
        <div>
          <button
            type="button"
            onClick={UserData}
            className="ButaoCadastroPaciente"
          >
            Criar relatórios!
          </button>
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            pauseOnHover={false}
            theme="colored"
            limit={1}
          />
          <Link className="VerLlista" to="/FormDescIpresao">
            Ver Lista de relatórios
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Form;
