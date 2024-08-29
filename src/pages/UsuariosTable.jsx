import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';
import { Tag } from 'primereact/tag';
import Swal from "sweetalert2";
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';

export default function UsuariosTable(token) {
    const [usuarios, setUsuarios] = useState([]);
    const [aux, setAux] = useState([]);
    const navigate = useNavigate();
    const [name, setName] = useState('');
 
    useEffect(() => {    
        
        if(token?.token !== null){
            fetch('/api/v1/usuarios',{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token.token+'',
                },
            })
            .then(response => response.json())
            .then(data => {setUsuarios(data); setAux(data)}).catch((error) => {
                console.log(error)
              });
        }
     },[token]);

     const borrar = (rowData) => {
        
        Swal.fire({
            icon: 'warning',
            title: `¿Dar de baja?`,
            showCancelButton: true,
            confirmButtonText: "Si",
          }, "success").then(async (result) => {
              if (result.isConfirmed) {
                if(rowData.login !== "" && token?.token !== null){
                    console.log(token.token)
                    fetch('/api/v1/usuario/baja',{	method: 'POST',	headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                  'Authorization': 'Bearer '+token.token+'',
                      },
                      body: JSON.stringify(
                          {
                            "login" : rowData.login,
                            "username": rowData.login,
                          }
                      )})
                .then((response) => response.json())
                .then((data) => { navigate("/usuarios-table"); console.log(data); window.location.reload(); });
            
                }
              }
          });
          
     }

     const actionBodyTemplate = (rowData) => {
        return <>
        <Tag value="Editar" className="mr-5" onClick={() => {console.log("clicked!"); navigate('/registro', {
            state: {
                user: rowData,
              }
        })}}></Tag>
        <Tag value="Baja" severity="danger" onClick={() => {borrar(rowData)}}></Tag>
       
        </>
        
        
    };
    const dateTemplate = (rowData) => {
        const shortFunciona = new Date (rowData.fechaalta); // Forma correcta, evita errores
        return <>
        {shortFunciona.toLocaleDateString()}
       
        </>
        
        
    };
    const activos = () => {
        setAux(usuarios.filter(user => user.status === 'A'))
    }
    const inactivos = () => {
        setAux(usuarios.filter(user => user.status === 'B'))
    }
    const revocados = () => {
        setAux(usuarios.filter(user => user.status === 'R'))
    }
    const serachByName = (name1 ) => {
        setAux(usuarios.filter(user => user.nombre.toLowerCase().includes(name1.toLowerCase())))
    }
    const toDate= (fecha) => {
        return new Date(fecha); 
    }
    const serachByInicio = (fecha) => {
        console.log(fecha);
        setAux(usuarios.filter(user => toDate(user.fechaalta) > fecha))
        // setAux(usuarios.filter(user => user.nombre.toLowerCase().includes(fecha.toLowerCase())))
    }
    const serachByFin = (fecha) => {
        // setAux(usuarios.filter(user => user.nombre.toLowerCase().includes(fecha.toLowerCase())))
        setAux(usuarios.filter(user => toDate(user.fechaalta) < fecha))
    }
    
   

    return (
        <div className="m-5">
           <Card title="Gestion de usuarios">
           
            <div className="flex justify-content-center" >
                <div className='grid p-3'>

                    <div className="col ">
                    <Button label="Activo" severity="success" onClick={activos} />
                   
                    </div>
                    <div className="col ">
                    <Button label="Inactivo" severity="secondary" onClick={inactivos}/>
                    
                    </div>
                    <div className="col " >
                    <Button label="Revocado" severity="warning" onClick={revocados}/>
                    
                    </div>
                </div>
            </div>
            <div className="grid">
                <div className="col-2 text-right"> <label htmlFor="username">Nombre</label></div>
                <div className="col-3">
                    <div className="flex flex-column gap-2">
                       
                        <InputText 
                        id="nombre" 
                        value={name}
                        onChange={e => {setName(e.target.value); serachByName(e.target.value)}}
                        aria-describedby="username-help" 
                        className='p-inputtext-sm' />
                    </div>
                </div>
                <div className="col-2 text-right"> <label htmlFor="username">Fecha Alta Inicio</label></div>
                <div className="col-4">
                    <div className="flex flex-column gap-2">
                        <Calendar  onChange={(e) => serachByInicio(e.target.value)} className='p-inputtext-sm' dateFormat="dd/mm/yy"/>
                        {/* <InputText id="inicio" aria-describedby="username-help" onChange={e => { serachByInicio(e.target.value)}} className='p-inputtext-sm' /> */}
                    </div>
                </div>
            </div>

            <div className="grid">
                <div className="col-5">
                    
                </div>
                <div className="col-2 text-right"> <label htmlFor="username">Fecha Alta final</label></div>
                <div className="col-4">
                    <div className="flex flex-column gap-2">
                        <Calendar  onChange={(e) => serachByFin(e.target.value)} className='p-inputtext-sm' dateFormat="dd/mm/yy"/>
                        {/* <InputText id="fin" aria-describedby="username-help" onChange={e => { serachByFin(e.target.value)}} className='p-inputtext-sm' /> */}
                    </div>
                </div>
               
            </div>
           
                <DataTable value={aux} >
                    <Column field="nombre" header="nombre"></Column>
                    <Column field="login" header="login"></Column>
                    <Column field="fechaalta" body={dateTemplate} header="Alta"></Column>
                    <Column field="status" header="Estatus"></Column>
                    <Column field="" header="Accion" body={actionBodyTemplate}>Editar baja</Column>
                </DataTable>
            </Card>
            
            
            
        </div>
    );
}