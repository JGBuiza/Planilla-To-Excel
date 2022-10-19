import React from 'react';
import './App.css';
import Home from './Home';
import Guia from './Guia';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Importante from './Importante';
import Clientes from './Clientes';

function App() {
 
  return (
    <>
    <Router>  
    <Routes>
      <Route  path="/"  element={<Home />}/> 
      <Route  path="/guia"  element={<Guia />}/> 
      <Route  path="/importante"  element={<Importante />}/> 
      <Route  path="/clientes"  element={<Clientes />}/> 
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
