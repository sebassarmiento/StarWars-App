import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './utils/navigation';
import Home from './components/home';
import Personajes from './components/personajes';
import Guardado from './components/guardado';
import Contacto from './components/contacto';
import './App.css'

class App extends Component {
  render() {
    return (

      <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/personajes" exact component={Personajes} />
          <Route path="/guardado" exact component={Guardado} />
          <Route path="/contacto" exact component={Contacto} />
        </Switch>    
      </div>
      </BrowserRouter>

          );
        }
      }
      
      export default App;
