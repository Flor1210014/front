import React, { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from "primereact/floatlabel";
         

export const Register = ({setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [client, setClient] = useState('');
  const [email, setEmail] = useState('');
  const [apellido_paterno, setApellido_paterno] = useState('');
  const [apellido_materno, setApellido_materno] = useState('');


  const onButtonClick = () => {
    console.log("hola");
    console.log(username);
    console.log(password);

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
	  .then(response => console.log(response.json))
	  // .then(data => setToken(data.token));
    
		}
  }
  return (
    <div className="flex align-items-center justify-content-center mt-5">
    <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
        <div className="text-center mb-5">
           
            <div className="text-900 text-3xl font-medium mb-3">Registro</div>

        </div>

        <div>
        
       
        <div className="row flex justify-content-center mb-4">
            
           
            <FloatLabel>
                <InputText id="username" className="p-inputtext-sm mr-3" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="username">Login</label>
            </FloatLabel>
            <FloatLabel>
                <InputText id="password" className="p-inputtext-sm" value={password} onChange={(e) => setPassword(e.target.value)} />
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
                <InputText id="username" className="p-inputtext-sm mr-3" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="username">Correo</label>
            </FloatLabel>
            <FloatLabel>
                <InputText id="username" className="p-inputtext-sm" />
                <label htmlFor="username">Area</label>
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
       

            <Button label="Registrar" icon="pi pi-user" className="" onClick={onButtonClick}/>
        </div>
    </div>
</div>
 
  )
}
