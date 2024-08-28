import './App.css'
import 'primereact/resources/themes/lara-light-pink/theme.css';
import { PrimeReactProvider } from 'primereact/api';
import { Layout } from './pages/Layout'
import { Home } from './pages/Home'
import '/node_modules/primeflex/primeflex.css'
import React, {useState}from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import UsuariosTable from './pages/UsuariosTable';

function App() {

  const [token, setToken] = useState('');
  const [option, setOption] = useState('login');
 

  return (
    <div className="App">
      <PrimeReactProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout token={token} setToken={setToken}  setOption={setOption} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login setToken={setToken} setOption={setOption}/>} />
            <Route path="/registro" element={<Register setToken={setToken} token={token} setOption={setOption}/>} />
            <Route path="/usuarios-table" element={ <UsuariosTable/>} />
            {/* <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} /> */} 
          </Route>
        </Routes>
      </Router>
      </PrimeReactProvider>
    </div>
  )
}

export default App