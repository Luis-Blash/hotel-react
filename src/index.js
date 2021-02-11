import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/Navbar';
// estilos
import './global.css'
//App
import Home from './pages/HomePage'

// contenedor
const container = document.getElementById("app");

ReactDOM.render(<Navbar/>,container);