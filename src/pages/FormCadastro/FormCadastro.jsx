import { useState } from "react";
import { getDatabase, ref, set } from "firebase/database";
import InputMask from "react-input-mask";

export function FormCadastro() {
  const [username, setUsername] = useState("");
  const [cpf, setCpf] = useState("");
  const [Descricao, setDescricao] = useState("");
  const [profissional, setprofissional] = useState("");
  const [status, setStatus] = useState("");

  function writeUserData() {
    const db = getDatabase();
    let userId = Math.floor(Math.random() * 99999);

    set(ref(db, "users/" + userId), {
      userId,
      username,
      cpf,
      Descricao,
      profissional,
    });
  }

  function tempoPaciente(event) {
    event.preventDefault(); // Impede o recarregamento da página
    var tempo;

    if (status === "MG") {
      tempo = 5000; // 5 segundos
    } else if (status === "G") {
      tempo = 10000; // 10 segundos
    } else if (status === "E") {
      tempo = 15000; // 15 segundos
    } else {
      console.error("Status inválido");
      return;
    }

    setTimeout(function () {
      alert("Tempo esgotado!");
    }, tempo);
  }

  return (
    <>
      <div className="CadastroPaciente">
        <form className="formPaciente">
          <input
            type="text"
            className="PriMeiroinput"
            name="username"
            id="idUser"
            placeholder="Nome.."
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            className="SegundoNome"
            id="Prof"
            placeholder="Profissional Presente"
            onChange={(e) => setprofissional(e.target.value)}
          />
          <InputMask
            mask="999.999.999-99"
            className="SegundoNome"
            name="cpf"
            placeholder="Digite o CPF"
            onChange={(e) => setCpf(e.target.value)}
          ></InputMask>
          <br />
          <select
            name="status"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Status</option>
            <option value="MG">Muito Grave</option>
            <option value="G">Grave</option>
            <option value="E">Estável</option>
          </select>
          <br />
          <br />
          <button onClick={tempoPaciente} className="ButaoCadastroPaciente">
            Cadastrar paciente
          </button>
        </form>
      </div>
    </>
  );
}

export default FormCadastro;
