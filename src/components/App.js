import React, {Component} from 'react';
import '../css/App.css';
import MainComponent from './MainContainer';

class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
    }
  }
  
  render(){
  return (
    <div className="App">
      <MainComponent/>
    </div>
  );
  }
}

export default App;
