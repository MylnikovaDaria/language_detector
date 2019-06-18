import React from 'react';
import './App.css';


import Container from './components/Container.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';
import Router from './Router.js';

function App() {
  return (
    <div className="App">
      <Container>
        <Header/>
        <Router/>
        <Footer/>
      </Container>
    </div>
  );
}

export default App;
