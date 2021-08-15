import Header from './components/partials/header';
import Footer from './components/partials/footer';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
          <Header/>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
