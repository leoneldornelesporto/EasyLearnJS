import Header from './components/partials/header';
import Footer from './components/partials/footer';
import {BrowserRouter} from 'react-router-dom';
import Routes from "./Routes";
import {AuthUserProvider} from "./context/AuthUserProvider";
import {AlunoProvider} from "./context/AlunoProvider";
import {CursoProvider} from "./context/CursoProvider";
import {CategoriaProvider} from "./context/CategoriaProvider";
import {ModuloProvider} from "./context/ModuloContext";
import {MatriculaProvider} from "./context/MatriculaContext";
import {FormacaoProvider} from "./context/FormacaoProvider";
import {AulaProvider} from "./context/AulaProvider";

function App() {
  return (
      <AulaProvider>
      <FormacaoProvider>
      <MatriculaProvider>
      <ModuloProvider>
      <CategoriaProvider>
      <CursoProvider>
      <AlunoProvider>
      <AuthUserProvider>
      <BrowserRouter>
          <Header/>
          <Routes/>
          <Footer/>
      </BrowserRouter>
      </AuthUserProvider>
      </AlunoProvider>
      </CursoProvider>
      </CategoriaProvider>
      </ModuloProvider>
      </MatriculaProvider>
      </FormacaoProvider>
      </AulaProvider>
  );
}
export default App;
