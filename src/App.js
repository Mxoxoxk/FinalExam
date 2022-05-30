import './App.css';
import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { PHOTOS } from './shared/photos';
import Home from './component/HomeComponent';
import Gallery from './component/PhotoGalleryComponent';
import AboutMe from './component/AboutMeComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: PHOTOS
    };
  }

  render() {
    return (
      <div className="App">
        <Home/>
        <AboutMe/>
        <Gallery/>
      </div>
    );
  }
}
export default App;
