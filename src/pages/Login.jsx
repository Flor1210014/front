import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
         

export const Login = ({setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onButtonClick = () => {
    console.log("hola");
    console.log(username);
    console.log(password);

    if(username !== "" && password !== ""){
			fetch('/auth/login',{	method: 'POST',	headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
			  },
			  body: JSON.stringify(
				  {
            "username": username,
            "password": password
				  }
			  )})
	  .then(response => response.json())
	  .then(data => setToken(data.token));
    
		}
  }

  return (
    <div className="flex align-items-center justify-content-center mt-5">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
           
            <div className="text-900 text-3xl font-medium mb-3">Bienvenido(a)</div>
            <span className="text-600 font-medium line-height-3">¿Aun no tienes cuenta?</span>
            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer">Registrate</a>
        </div>

        <div>
            <label htmlFor="username" className="block text-900 font-medium mb-2">Usuario</label>
            <InputText 
              id="username" 
              type="text" 
              placeholder="Usuario" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              className="w-full mb-3" 
            />

            <label htmlFor="password" className="block text-900 font-medium mb-2">Contraseña</label>
            <InputText 
              id="password" 
              type="password" 
              placeholder="Contraseña" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              className="w-full mb-3" 
              />

            <Button label="Iniciar sesión" icon="pi pi-user" className="w-full" onClick={onButtonClick}/>
        </div>
    </div>
</div>
 
  )
}
