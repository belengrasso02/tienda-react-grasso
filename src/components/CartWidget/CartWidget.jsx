import React from 'react'
import './CartWidget.css'

const CartWidget = () => {

    let iconocarrito = "https://i.pinimg.com/736x/7d/82/74/7d82745c27b25783bdd3ba13a7c56a6a.jpg";
return (
    <div>
        <img src={iconocarrito} alt="Carrito de Compras" className='imgcarrito'/>
        <p> 6 </p>
    </div>
)
}

export default CartWidget