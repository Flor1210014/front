
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar';  

export const MenuUsuarios = (token, setToken) => {
    
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Features',
            icon: 'pi pi-star'
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
        }
    ];
    const onButtonClick = () => {
        console.log("hola");
        
    
        setToken('');
      }

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            
            <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer mr-5" onClick={onButtonClick}>Cerrar sesión</a> 
        </div>
    );

    

    return (
        <div className="card">
            <Menubar model={(token) ? items : ""} start={start} end={end} />
        </div>
    )
}
        