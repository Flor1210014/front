import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

export default function UsuariosTable(token) {
    const [usuarios, setUsuarios] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {    
        
        if(token?.token !== null){
            fetch('/api/v1/usuarios',{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+token?.token+'',
                },
            })
            .then(response => response.json())
            .then(data => {setUsuarios(data)});
        }
     },[token]);

     const actionBodyTemplate = (rowData) => {
        return <Button kind="primary" onClick={() => {console.log("clicked!"); navigate('/registro', {
            state: {
                userId: rowData.login,
              }
        })}}>
        Hello World!
      </Button>;
    };
   

    return (
        <div className="m-5">
           <Card title="Gestion de usuarios">
                <DataTable value={usuarios} >
                    <Column field="nombre" header="nombre"></Column>
                    <Column field="login" header="login"></Column>
                    <Column field="fechaalta" dataType="date" header="Alta"></Column>
                    <Column field="status" header="Estatus"></Column>
                    <Column field="" header="Accion" body={actionBodyTemplate}>Editar baja</Column>
                </DataTable>
            </Card>
            
            
            
        </div>
    );
}