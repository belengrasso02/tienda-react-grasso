import React from 'react'
import Item from '../Item/Item'
import { productos } from '../../asyncmock'

const ItemList = ({productos} ) => {
return (
    <div>
        {
            productos.map(producto => <Item key={producto.id} {...producto} />)
        }
    </div>
)
}

export default ItemList