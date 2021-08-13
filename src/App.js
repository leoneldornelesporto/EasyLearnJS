import ListaDeNotas from "./components/ListaDeNotas"
import FormularioCadastro from "./components/FormularioCadastro"
import {useState} from "react";
import useApi from './helpers/EasyLearnApi';

function App() {
    const [notas, setNotas] = useState([]);
    const api = useApi();

    async function handleSubmit(titulo,nota){
        const novaNota = {titulo:titulo, nota:nota};
        const array = [...notas,novaNota];
        setNotas(array);
        console.log("aqui");
        console.log(api.getCursos());
    }

  return (
      <section>
          <FormularioCadastro handleSubmit={handleSubmit}/>
          <ListaDeNotas notas={notas}/>
      </section>
  );
}

export default App;
