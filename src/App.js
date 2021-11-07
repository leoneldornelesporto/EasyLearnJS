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
import {EmailProvider} from "./context/EmailProvider";
import {PaymentProvider} from "./context/PaymentProvider";
import {ProfessorProvider} from "./context/ProfessorProvider";
import {TutorProvider} from "./context/TutorProvider";
import {UserProvider} from "./context/UserProvider";

function App() {
  return (
      <UserProvider>
      <PaymentProvider>
      <EmailProvider>
      <AulaProvider>
      <FormacaoProvider>
      <MatriculaProvider>
      <ModuloProvider>
      <CategoriaProvider>
      <CursoProvider>
      <TutorProvider>
      <ProfessorProvider>
      <AlunoProvider>
      <AuthUserProvider>
      <BrowserRouter>
          <Header/>
          <Routes/>
          <Footer/>
      </BrowserRouter>
      </AuthUserProvider>
      </AlunoProvider>
      </ProfessorProvider>
      </TutorProvider>
      </CursoProvider>
      </CategoriaProvider>
      </ModuloProvider>
      </MatriculaProvider>
      </FormacaoProvider>
      </AulaProvider>
      </EmailProvider>
      </PaymentProvider>
      </UserProvider>
  );
}
export default App;
