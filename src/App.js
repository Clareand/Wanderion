import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routing from './router/router.js';
import Header from './content/layout/Header.js';

class App extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        <Routing />
      </div>
    );
  }
}

export default App;
