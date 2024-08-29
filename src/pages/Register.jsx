import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from "primereact/floatlabel";
import { useLocation, useNavigate } from "react-router-dom";
         

export const Register = ({setToken, token}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [client, setClient] = useState('');
  const [email, setEmail] = useState('');
  const [apellido_paterno, setApellido_paterno] = useState('');
  const [apellido_materno, setApellido_materno] = useState('');
  const [title, setTitle] = useState('Registrar');
  const navigate = useNavigate();

  const location = useLocation();



  useEffect(() => {
    // get userId
    let user = location?.state?.user;
    if(user){
        console.log(user);
        setTitle('Actualizar');
        setUsername(user.login);
        setNombre(user.nombre);
        setClient(user.client);
        setEmail(user.email);
        setApellido_paterno(user.apellido_paterno);
        setApellido_materno(user.apellido_materno);
    }
    
  }, [location?.state?.user]);
  
  const actualizar = () => {
    console.log("actualizar");

    if(username !== "" && password !== "" && token?.token !== null){
			fetch('/api/v1/usuario/update',{	method: 'POST',	headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer '+token+'',
			  },
			  body: JSON.stringify(
				  {
                    "login" : username,
                    "username": username,
                    "password":password,
                    "nombre": nombre,
                    "client": 234,
                    "email": email,
                   
                   
                    "no_acceso": 1,
                    "apellido_paterno": apellido_paterno,
                    "apellido_materno": apellido_materno,
                    "area": 1,
                    "fechamodificacion": "2024-08-26",
                    "role":"ADMIN"
				  }
			  )})
	    .then((response) => response.json())
	    .then((data) => { navigate("/usuarios-table"); console.log(data)});
    
		}
        
  }
  const registrar = () => {

    if(username !== "" && password !== ""){
			fetch('/auth/register',{	method: 'POST',	headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
			  },
			  body: JSON.stringify(
				  {
                    "login" : username,
                    "username": username,
                    "password":password,
                    "nombre": nombre,
                    "client": 234,
                    "email": email,
                    "fechaalta": "2024-08-26",
                    
                    "status": "A",
                    "intentos":0,
                   
                    "no_acceso": 1,
                    "apellido_paterno": apellido_paterno,
                    "apellido_materno": apellido_materno,
                    "area": 1,
                    "fechamodificacion": "2024-08-26",
                    "role":"ADMIN"
				  }
			  )})
	    .then((response) => response.json())
	    .then((data) => {setToken(data.token); navigate("/home"); localStorage.setItem('token',data.token);});
    
		}
        
  }

  const onButtonClick = () => {

    if(username !== "" && password !== ""){
        if(location?.state?.user === null){
            registrar();
        }else{
            actualizar();
        }
    
		}
        
  }
  return (
    <div className="flex align-items-center justify-content-center mt-5">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
           
            <div className="text-900 text-3xl font-medium mb-3">{title}</div>

        </div>

        <div>
        
       
        <div className="row flex justify-content-center mb-4">
            
           
            <FloatLabel>
                <InputText id="username" className="p-inputtext-sm mr-3" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="username">Login</label>
            </FloatLabel>
            <FloatLabel>
                <InputText id="password" type="password" className="p-inputtext-sm" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="password">Contraseña</label>
            </FloatLabel>
        </div>
        <div className="row flex justify-content-center mb-4">
          
            <FloatLabel>
                <InputText id="nombre" className="p-inputtext-sm mr-3" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                <label htmlFor="nombre">Nombre</label>
            </FloatLabel>
            <FloatLabel>
                <InputText id="cliente" className="p-inputtext-sm" value={client} onChange={(e) => setClient(e.target.value)} />
                <label htmlFor="cliente">Cliente</label>
            </FloatLabel>
        </div>
        <div className="row flex justify-content-center mb-4">
            
           
            <FloatLabel>
                <InputText id="email" className="p-inputtext-sm mr-3" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="email">Correo</label>
            </FloatLabel>
            <FloatLabel>
                <InputText id="area" className="p-inputtext-sm" />
                <label htmlFor="area">Area</label>
            </FloatLabel>
        </div>
        <div className="row flex justify-content-center mb-4">
            
           
            <FloatLabel>
                <InputText id="username" className="p-inputtext-sm mr-3" value={apellido_paterno} onChange={(e) => setApellido_paterno(e.target.value)} />
                <label htmlFor="username">Paterno</label>
            </FloatLabel>
            <FloatLabel>
                <InputText id="username" className="p-inputtext-sm" value={apellido_materno} onChange={(e) => setApellido_materno(e.target.value)} />
                <label htmlFor="username">Materno</label>
            </FloatLabel>
        </div>
       <div className="grid ">
            <div className="col flex justify-content-center p-3">
                <Button label={title} icon="pi pi-user" className="" onClick={onButtonClick}/>
            </div>
       </div>

            
        </div>
    </div>
</div>
 
  )
}
