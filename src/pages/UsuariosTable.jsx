import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Card } from 'primereact/card';

export default function UsuariosTable(sessionData) {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {    
      console.log(sessionData.toString());
      
        fetch('/api/v1/usuarios',{
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c3VhcmlvNCIsImlhdCI6MTcyNDg4Nzk0NCwiZXhwIjoxNzI0ODg5Mzg0fQ.eAnlmNP9eQD-QVudSZFpXTgtMuCCLyatUJWvEb0U9Fw',
            },
           })
        .then(response => response.json())
        .then(data => {setUsuarios(data)});
       
     },[sessionData]);
   

    return (
        <div className="m-5">
           <Card title="Gestion de usuarios">
                <DataTable value={usuarios} >
                    <Column field="login" header="login"></Column>
                    <Column field="nombre" header="nombre"></Column>
                    <Column field="fechaalta" header="Alta"></Column>
                    <Column field="fechabaja" header="abaja"></Column>
                </DataTable>
            </Card>
            
            
            
        </div>
    );
}