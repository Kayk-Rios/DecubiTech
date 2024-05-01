export function status() {
    const [status, setStatus] = useState("");

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
    </>
  );
}

export default status;