import React, {Component} from 'react';
import '../css/App.css';
import MainComponent from './MainContainer';
import {BrowserRouter} from 'react-router-dom'; 
import {Provider} from 'react-redux'
import {ConfigureStore} from '../redux/configureStore.js'

// get the default store state in variable
const store=ConfigureStore()

class App extends Component {
  
  render(){
    return (
      // passing redux store to react component
      <Provider store={store}> 
      {/* required for reuting in SPA */}
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
