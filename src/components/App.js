import React, {Component} from 'react';
import '../css/App.css';
import MainComponent from './MainContainer';
import {BrowserRouter} from 'react-router-dom'; 

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  
  render(){
  return (
    <BrowserRouter>    
      <div className="App">
        <MainComponent/>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
