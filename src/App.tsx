import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import CadastroUsuario from './pagina/cadastroUsuario/CadastroUsuario';
import Home from './pagina/home/Home';
import Login from './pagina/login/Login';
import './App.css';


  function App() {
    return (
      <Router>
        <Navbar />
          <Routes >
            <div style={{minHeight: '100vh'}}>
              <Route exact path='/'>
                <Login />
              </Route>

              <Route path='/login'>
                <Login />
              </Route>

              <Route path='/home'>
                <Home />
              </Route>
              
              <Route path='/cadastrousuario'>
                <CadastroUsuario />
              </Route>
            </div>
          </Routes>
      <Footer />
    </Router>
  );
}

export default App;
