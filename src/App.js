import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro"
import {useState} from "react";

function App() {
    const [notas, setNotas] = useState([]);

    async function handleSubmit(titulo,nota){
        const novaNota = {titulo:titulo, nota:nota};
        const array = [...notas,novaNota];
        setNotas(array);
    }

  return (
      <section>
          <FormularioCadastro handleSubmit={handleSubmit}/>
          <ListaDeNotas notas={notas}/>
      </section>
  );
}

export default App;
