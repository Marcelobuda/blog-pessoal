import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './pagina/login/Login';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import Home from './pagina/home/Home';
import CadastroUsuario from './pagina/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import './App.css';


  function App() {
    return (
          <>
          <Router>
            <Navbar />
              <div style={{ minHeight: '100vh' }}>
                <Routes> // Antigo Switch
                 <Route path="/" element={<Login />} />
                 <Route path="/login" element={<Login />} />
                 <Route path="/home" element={<Home />} />
                 <Route path="/cadastrar" element={<CadastroUsuario />} />
                 <Route path="/tema" element={<ListaTema />} />
                 <Route path="/posts" element={<ListaPostagem/>} />
                </Routes>
              </div>
                <Footer />
          </Router>
        </>
  )
      ;
    }

export default App;
