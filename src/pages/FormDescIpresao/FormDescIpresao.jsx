import { getDatabase, ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Logo from "../../assets/img/voltar.png";
import Logo2 from "../../assets/img/Easytime.png";

export function FormDescIpresao() {
  const contentToPrint = useRef(null);
  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          let arrayUsers = Object.values(snapshot.val());
          console.log(arrayUsers);
          setUsuarios(arrayUsers);
        } else {
          console.log("Sem Dados");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="relatoriooImprimir">
        <Link to="/Relatorio">
          <img className="voltarIM" src={Logo} alt="voltar" />
        </Link>
        <button
          className="imprimir"
          onClick={() => {
            handlePrint(null, () => contentToPrint.current);
          }}
        >
          IMPRIMIR
        </button>

        <div ref={contentToPrint}>
          <p className="pPaciente">Pacientes:</p>
          <hr /> <img className="IMpresaofot" src={Logo2} alt="voltar" />
          {usuarios.map((usuario, index) => {
            return (
              <table key={usuario.userId}>
                <thead>
                  <tr>
                    <th>Paciente</th>
                    <th>Nome</th>
                    <th>CPF</th>
                    <th>Profissional Presente</th>
                    <th>Descrição</th>
                  </tr>
                </thead>
                <tbody>
                  <tr key={usuario.userId}>
                    <td>{index + 1}</td>
                    <td>{usuario.username}</td>
                    <td>{usuario.cpf}</td>
                    <td>{usuario.profissional}</td>
                    <td>{usuario.Descricao}</td>
                  </tr>
                </tbody>
              </table>
            );
          })}
          <hr className="hr" />
        </div>
      </div>
    </>
  );
}
