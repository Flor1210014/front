
import React, {useEffect, useState} from 'react';
import { Menubar } from 'primereact/menubar'; 
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


export const Layout = ({sessionData, setSessionData}) => {
    const navigate = useNavigate();
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            url: '/home'
        },
        {
            label: 'Gestion',
            icon: 'pi pi-star',
            url: '/registro'
        },
        {
            label: 'Tablero',
            icon: 'pi pi-envelope',
            url: '/usuarios-table'
        }
    ];

    const onButtonClick = () => {
        setSessionData(null);
        localStorage.removeItem('token');
      }

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            {sessionData !== null 
            ? <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer mr-5" onClick={onButtonClick}>Cerrar sesión</a>
            : <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer mr-5" onClick={() => {navigate('/login')}}>Iniciar sesión</a>
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
        