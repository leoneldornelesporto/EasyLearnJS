import Header from './components/partials/header';
import Footer from './components/partials/footer';
import Routes from "./Routes";
const BrowserRouter = require("react-router-dom").BrowserRouter;

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
