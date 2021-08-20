import Header from './components/partials/header';
import Footer from './components/partials/footer';
import {BrowserRouter} from 'react-router-dom';
import Routes from "./Routes";

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Routes/>
          <Footer/>
      </BrowserRouter>
  );
}
export default App;
