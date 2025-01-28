import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer' ;
import ADeFruta from './components/ADeFruta/ADeFruta';
import ADeChocolate from './components/ADeChocolate/ADeChocolate';
import ADeDulceDeLeche from './components/ADeDulceDeLeche/ADeDulceDeLeche';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <BrowserRouter/>
      <Routes/>
      <Route path='/alfajoresdefruta' element = {<ADeFruta/>} />
      <Route path='/alfajoresdechocolate' element = {<ADeChocolate/>} />
      <Route path='alfajoresdedulcedeleche'element = {<ADeDulceDeLeche/>} />

        <NavBar/>
      
      <Routes/>
      <BrowserRouter/>


        <ItemListContainer/>
        <ItemDetailContainer/>
    </div>
  )
}

export default App