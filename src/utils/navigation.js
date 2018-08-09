import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import Saber from '../img/light-saber.png';

class Navigation extends Component {
  render() {
    return (

      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-warning">
          <a className="navbar-brand mb-0 h1">
            <img src={Saber} style={{ height: 30, marginRight: 10 }} alt="" />Star wars
        </a>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink className="nav-link" to="/" exact >Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/personajes" >Personajes</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/guardado">Guardado</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
                </li>
              </ul>
            </div>
            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="search" />
                <a href="#/search"><button className="btn btn-warning my-2 my-sm-0" type="button" id="searchButton">Buscar</button></a>
          </form>
      </nav>
        </div>

          );
        }
      }
      
      export default Navigation;