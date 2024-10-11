import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes} from "react-router-dom"
import NavBarra from './components/NavBarra.jsx';

import Login from "./pages/Login.jsx"
import Produto from "./pages/Produto.jsx"
import Cadastro from "./pages/Cadastro.jsx"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <NavBarra/> */}
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/produto' element={<Produto/>} />
          <Route path='/cadastro' element={<Cadastro/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
