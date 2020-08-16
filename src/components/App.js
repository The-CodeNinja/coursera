import React from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import '../css/App.css';
import Menu from "./MenuComponent"

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">CodeNinja rocks</NavbarBrand>
        </div>
      </Navbar>
      <Menu/> 
    </div>
  );
}

export default App;
