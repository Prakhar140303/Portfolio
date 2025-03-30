import { useState } from 'react';
import './App.css';
import Header from './header/Header.js';
import Footer from './footer/Footer.js';
import Center from './center/Center.jsx'; 

function App() {
  return (
    <>
     <Header/>
     <Center/>
     <Footer/>
    </>
  );
}

export default App;
