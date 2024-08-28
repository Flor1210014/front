
import React, {useEffect, useState} from 'react';
import { Menubar } from 'primereact/menubar'; 
import { Outlet } from 'react-router-dom';


export const Layout = ({token, setToken, setOption}) => {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/home'
        },
        {
            label: 'CRUD Usuarioss',
            icon: 'pi pi-star',
            url: '/usuarios-table'
        },
        {
            label: 'Contact',
            icon: 'pi pi-envelope',
            url: ''
        }
    ];

    const onButtonClick = () => {
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
            <Outlet />
        </div>
    )
}
        