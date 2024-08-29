
import React, {useEffect, useState} from 'react';
import { Menubar } from 'primereact/menubar'; 
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";


export const Layout = ({token, setToken}) => {
    let location = useLocation();
     
    const navigate = useNavigate();
    const [items, setItems] = useState([]);

    const handleLogOut = () => {
        setToken(null);
        localStorage.removeItem('token');
        endOptions();
        navigate('/login');
      }

    const endOptions = () => {
        if(token !== null && token.token !== null)
            return <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer mr-5" onClick={handleLogOut}>Cerrar sesión</a>
        else 
            return <a className="font-medium no-underline ml-2 text-blue-500 cursor-pointer mr-5" onClick={() => {navigate('/login')}}>Iniciar sesión</a>
            
    }

    useEffect(() => {    
        endOptions();
        if(token !== null)
            setItems([
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
            ])
        else
            setItems([])
     },[token, location]);

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="flex align-items-center gap-2">
            {endOptions()}
             
        </div>
    );

    

    return (
        <div className="card">
            <Menubar model={ items } start={start} end={end} />
            <Outlet />
        </div>
    )
}
        