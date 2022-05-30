import logo from './logo.svg';
import './App.css';
import {Navbar, NavbarBrand} from 'reactsrep';
import { Component } from 'react';

class App extends Component{
  render (){
    return(
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Parisara Khongprasert</NavbarBrand>
          </div>
        </Navbar>
      </div>
    );
  }

}


export default App;
