import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Menu dishes={this.state.dishes} />
        <Footer />
      </div>
    );
  }
}

export default App;
