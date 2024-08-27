import React, { useEffect, useState } from 'react';
import { MenuUsuarios } from './MenuUsuarios';
import {Login} from './Login';


export const Home = (props) => {
  const [token, setToken] = useState('');
  useEffect(() => {    // Actualiza el título del documento usando la API del navegador    
    if(token !== null){
       console.log(token);
     }
   },[token]);

  return (
    <>
      <div className="card">
            <MenuUsuarios token={token} setToken={setToken}/>
            {token !== '' ? "Holamnudo" : <Login setToken={setToken}/>}
        </div>
     
    </>
  )
}


