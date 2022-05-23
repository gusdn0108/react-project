import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';



   const data= [
        {"code": "1","name": "안녕하세요","category": "미니","quantity": "22-05-22"},
        
    ]

     

const MiniBoard = () => {
    const [products, setProducts] = useState(data);
    
    return (
        <div>
            <div className="card">
            <Button label="추가" />
                <DataTable value={products} responsiveLayout="scroll">
                    <Column field="code" header="idx"></Column>
                    <Column field="name" header="subject"></Column>
                    <Column field="category" header="username"></Column>
                    <Column field="quantity" header="date"></Column>
                </DataTable>
            </div>
        </div>
    );
}

export default MiniBoard