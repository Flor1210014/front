import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { Card } from 'primereact/card';



export const Login = ({setToken, setOption}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onButtonClick = () => {

    if(username !== "" && password !== ""){
			fetch('/auth/login',{	method: 'POST',	headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(
				  {
            "username": username,
            "password": password
				  }
			  )})
	  .then(response => response.json)
	  .then(data => setToken(data.token));
    
		}
  }

  return (
    <>
    <div className="grid p-5">
        <div className="col">
            <Card style={{ borderRadius: '10px' }}>
                <div className="grid">
                    <div className="col-6 p-5">
                        <Card className="p-3 bg-primary" style={{borderRadius: '10px'}}>
                            <h2 className="m-0">Sistema Integral de Automatización.</h2>
                            <p className="mt-5">Descubre todo lo que puedes realizar dentro del sistema para optmizar tiempo y dinero.</p>
                        </Card>
                    </div>


                    <div className="col-6 p-5">
                        <div className="text-center">
                            <i className="pi pi-sign-in" style={{fontSize: '2.5rem'}}></i>
                            <h1 className="m-0">Bienvenido(a) al Sistema.</h1>
                            <p className="mt-2">Ingresa las credenciales proporcionadas para poder iniciar
                                sesión.</p>
                        </div>
                        <div className="grid flex justify-content-center mt-5">
                                <div className="col-6">
                                    <h4 className="m-1">Usuario</h4>
                                    <InputText
                                        id="username"
                                        type="text"
                                        placeholder="Usuario"
                                        value={username}
                                        onChange={e => setUsername(e.target.value)}
                                        className="w-full"
                                    />
                                </div>
                            </div>
                            <div className="grid flex justify-content-center">
                                <div className="col-6">
                                    <h4 className="m-1">Contraseña</h4>
                                    <InputText
                                        id="password"
                                        type="password"
                                        placeholder="Contraseña"
                                        value={password}
                                        onChange={e => setPassword(e.target.value)}
                                        className="w-full mb-3"
                                    />
                                    <Button label="Iniciar sesión" icon="pi pi-user" className="w-full" onClick={onButtonClick}/>
                                    <div className="mt-3">
                                        <span
                                            className="text-600 font-medium line-height-3">¿Aun no tienes cuenta?</span>
                                        <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer" onClick={() => setOption('register')}>Registrate</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </div>
        </>



  )
}
