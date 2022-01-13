import React from 'react';
import contadorReducer from './reducers/contadorReducer';
import Cabecalho from './componentes/Cabecalho'
import Contador from './componentes/Contador'
import './App.css';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  const allReducers = combineReducers({ counter: contadorReducer })

  const store = createStore(allReducers); 

  return (
    <div className="App">

      <Provider store={store}>

        <Cabecalho></Cabecalho>
        <Contador></Contador>

      </Provider>
          
    </div>
  );
}

export default App;
