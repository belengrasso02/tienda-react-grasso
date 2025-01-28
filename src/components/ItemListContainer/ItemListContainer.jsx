import React from 'react'
import { useState, useEffect } from 'react'
import { getUnProducto } from '../../asyncmock'
import ItemList from '../ItemList/ItemList'

const ItemListContainer = () => {
    const [productos, setProducto] =useState([]);

    useEffect(()=>{
        getUnProducto()
    .then(respuesta =>
            setProducto(respuesta)
        )
    .catch(
        console.log("Error en cargar productos")
    )
},[])
    
return (
    <div>
        <h2>Mis productos</h2>
        <ItemList productos={productos}/>
    </div>
)
}

export default ItemListContainer;