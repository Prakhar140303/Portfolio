// import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>
    </div>
  );
};

export default App;