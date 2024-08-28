import React, { useEffect, useState } from 'react';
import { MenuUsuarios } from './MenuUsuarios';
import {Login} from './Login';
import { Home } from './Home';
import { Register } from './Register';
import UsuariosTable from './UsuariosTable';


export const Index = (props) => {
  const [token, setToken] = useState('');
  const [option, setOption] = useState('usuariosTable');
  useEffect(() => {    // Actualiza el título del documento usando la API del navegador    
    if(token !== null){
       console.log(token);
       if(option === 'login')
          setOption('home')
     }
   },[token]);

   useEffect(() => {    // Actualiza el título del documento usando la API del navegador    
    renderOption();
   },[option]);

    const renderOption = () => {

      switch (option) {
        case 'home': 
            return <Home></Home>
        case 'login': 
            return <Login setToken={setToken} setOption={setOption}/>
        case 'register':
            return <Register/>
        case 'usuariosTable':
          return <UsuariosTable/>
        default:
          break;
      }
   }

  return (
    <>
      <div className="card">
            <MenuUsuarios token={token} setToken={setToken} setOption={setOption}/>
           {renderOption()}
        </div>
     
    </>
  )
}


