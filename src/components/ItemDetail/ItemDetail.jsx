import React from 'react'

const ItemDetail = ({id, nombre, precio, img}) => {
return (
    <div>
        <h2>Nombre: {nombre}</h2>
        <h2>Precio: {precio}</h2>
        <h3>ID: {id}</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus eius voluptatibus nisi officia deserunt hic odit mollitia quaerat ad tempora nemo praesentium perspiciatis, expedita quae nam labore harum cupiditate.
        </p>
        <img src={img} alt={nombre} />
    </div>
)
}

export default ItemDetail