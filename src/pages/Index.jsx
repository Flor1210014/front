import React, { useEffect, useState } from 'react';
import { Layout } from './Layout';
import {Login} from './Login';
import { Home } from './Home';
import { Register } from './Register';
import UsuariosTable from './UsuariosTable';
import { Outlet } from 'react-router-dom';


export const Index = (props) => {
  const [token, setToken] = useState('');
  const [option, setOption] = useState('login');

  // useEffect(() => {    
  //   if(token !== null && option === 'login'){
  //         setOption('home')
  //    }
  //  },[token]);

  //  useEffect(() => {    // Actualiza el título del documento usando la API del navegador    
  //   renderOption();
  //  },[option]);

  //   const renderOption = () => {

  //     switch (option) {
  //       case 'home': 
  //           return <Home></Home>
  //       case 'login': 
  //           return <Login setToken={setToken} setOption={setOption}/>
  //       case 'register':
  //           return <Register setToken={setToken} token={token} setOption={setOption}/>
  //       case 'usuariosTable':
  //         return <UsuariosTable/>
  //       default:
  //         break;
  //     }
  //  }

  return (
    <>
      <div className="card">
            <Layout token={token} setToken={setToken}  setOption={setOption}/>
            
        </div>
     
    </>
  )
}


