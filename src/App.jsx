import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <div>
      <ItemListContainer/>
        <NavBar greeting = "¡Bienvenido a mi tienda!"/>
      <img src="https://i.pinimg.com/736x/84/e1/82/84e18249c05fed431c68f62dd0855c1a.jpg" alt="Alfajor" ></img>
    </div>
  )
}

export default App