import React from 'react'
import './Item.css'
import { useContador } from '../../useContador'


const Item = ({nombre,id,precio,img}) => {

const {contador, incrementar, decrementar} = useContador(1,10)

return (
    <div className='producto' >
            <img src={img} alt={nombre} />
            <h3>{nombre}</h3>
            <p> $ {precio}</p>
            <p>ID: {id}</p>
            <button onClick={incrementar} > + </button>
            <p>{contador}</p>
            <button onClick={decrementar} > - </button>
            <button  className='botonAgregar'> Agregar </button>
    </div>
)
}

export default Item