
import React from 'react';
import { Menubar } from 'primereact/menubar'; 

export const MenuUsuarios = ({token, setToken, setOption}) => {
    
    const items = (token) ? [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => {
                setOption('home')
              }
        },
        {
            label: 'CRUD Usuarioss',
            icon: 'pi pi-star',
            command: () => {
                setOption('usuariosTable')
              }
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            command: () => {
                setOption('register')
              }
        }
    ]: [];
    const onButtonClick = () => {
        console.log("hola");
        
    
        setToken('');
      }

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            {token !== '' 
            ? <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer mr-5" onClick={onButtonClick}>Cerrar sesión</a>
            : <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer mr-5" onClick={() => {setOption('login')}}>Iniciar sesión</a>
            }
             
        </div>
    );

    

    return (
        <div className="card">
            <Menubar model={ items } start={start} end={end} />
        </div>
    )
}
        