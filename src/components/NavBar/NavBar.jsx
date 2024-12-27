import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

const NavBar = () => {
return (
    <header>
        <h1>Los Mejores Alfajores de Argentina </h1>
        <nav>
            <ul>
                <li> A. de Chocolate</li>
                <li>| A. de Fruta</li>
                <li>| A. de Dulce de Leche</li>
                <li>| Carrito</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
)
}

export default NavBar