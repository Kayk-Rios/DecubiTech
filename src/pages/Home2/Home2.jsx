import { getDatabase, ref, child, get, remove } from "firebase/database";
import { useEffect, useState } from "react";
import "../firebase";
import Lupa from "../../assets/img/lupa.png";

import Header from "../Header/Header";
import { Link } from "react-router-dom";
import imagem3 from "../../assets/img/voltar.png";
import Person from "../../assets/img/Person.png";

export function Home2() {
  const [usuarios, setUsuario] = useState([]);

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          let arrayUsers = Object.values(snapshot.val());
          console.log(arrayUsers);
          setUsuario(arrayUsers);
        } else {
          console.log("Sem Dados");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  function removeUsuario(id) {
    const db = getDatabase();
    remove(ref(db, `users/` + id))
      .then(() => {
        console.log("removido");
      })
      .catch((error) => {
        alert("algo deu errado");
        console.log("algo deu errado" + error);
      });
  }
  return (
    <>
      <div className="Home2">
        <Header />
        <div className="Voltar1">
          <Link to="/PreHome">
            {" "}
            <img className="image2" src={imagem3} alt="Voltar" title="Voltar" />
          </Link>
        </div>
        <form className="formPaciente pesquisar">
          <div className="pesquisaPaciente">
            <input
              type="search"
              className="PriMeiroinput"
              placeholder="Pesquisar"
            />
            <button className="ButoaLupa " disabled>
              {" "}
              <img
                className="lupa1"
                src={Lupa}
                alt="Voltar"
                title="pesquisar"
              />
            </button>
            <h2 className="lupa ">Hora</h2>
            <h2 className="lupa ">Status</h2>
          </div>
        </form>

        <div className="Usuarios">
          {usuarios.map((usuario) => (
            <div className="Pacientes" key={usuario.userId}>
              <div className="h2paciciente">
                <h4>{usuario.username}</h4>
                <img src={Person} alt="" className="ImgPaciente" />
              </div>

              <div className="detalhes">
                <details>
                  <summary className="Descbutton">
                    Descriçao do Pacientes
                  </summary>
                  <p className="cpf">CPF</p>
                  {usuario.cpf} <br />
                  <p className="Descricao">Descriçao</p>
                  {usuario.Descricao}
                  <br />
                  <button
                    onClick={() => removeUsuario(usuario.userId)}
                    className="butaoexcluir"
                  >
                    Excluir!
                  </button>
                </details>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home2;
