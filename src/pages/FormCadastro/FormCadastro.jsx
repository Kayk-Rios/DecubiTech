import { getDatabase, ref, set } from "firebase/database";
import { useState } from "react";
import "../firebase";

import InputMask from "react-input-mask";

export function FormCadastro() {
  const [username, setUsername] = useState("");
  const [cpf, setCpf] = useState("");

  const [Descricao, setDescricao] = useState("");
  const [profissional, setprofissional] = useState("");

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

  return (
    <>
      <div className="CadastroPaciente ">
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
          <textarea
            name="postContent"
            rows={4}
            cols={20}
            className="SegundoNome textareaCastro"
            defaultValue="O paciente está, "
            onChange={(e) => setDescricao(e.target.value)}
          />
          <br />
          <button onClick={writeUserData} className="ButaoCadastroPaciente">
            Cadastrar paciente
          </button>
        </form>
      </div>
    </>
  );
}

export default FormCadastro;
