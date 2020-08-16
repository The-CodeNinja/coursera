import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'
import '../css/App.css';
import MenuList from "./MenuList"
import MenuCards from "./MenuCards"

import {DISHES} from '../shared/dishes'

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      dishes: DISHES
    }
  }
  
  render(){
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">CodeNinja rocks</NavbarBrand>
        </div>
      </Navbar>
      <MenuList dishes={this.state.dishes}/> 
      <hr/>
      <MenuCards dishes={this.state.dishes}/>
    </div>
  );
  }
}

export default App;
