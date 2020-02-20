
import React, { Component } from 'react';

import Header from './components/header/header'
import Banner from './components/banner/banner'
import Benefits from './components/benefitsBar/benefits'
import Liquida from './components/liquida/liquida'
import Shelf from './components/shelf/shelf'
import LiquidaNews from './components/liquida-news/liquidaNews'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

import './general.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />
        <Benefits />

        <Liquida />
        <Shelf />
        <LiquidaNews />
        <Shelf />

        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;