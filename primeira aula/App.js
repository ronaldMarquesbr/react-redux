import React from 'react';
import contadorReducer from './reducers/contadorReducer';
import Cabecalho from './componentes/Cabecalho'
import Contador from './componentes/Contador'
import './App.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css'

function App() {

  const store = createStore(contadorReducer); 

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
