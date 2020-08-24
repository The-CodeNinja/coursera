import React, {Component} from 'react';
import '../css/App.css';
import MainComponent from './MainContainer';
import {BrowserRouter} from 'react-router-dom'; 
import {Provider} from 'react-redux'
import {ConfigureStore} from '../redux/configureStore.js'

const store=ConfigureStore()

class App extends Component {
  
  render(){
    return (
      <Provider store={store}>
      <BrowserRouter>    
        <div className="App">
          <MainComponent/>
        </div>
      </BrowserRouter>
      </Provider>
  );
  }
}

export default App;
