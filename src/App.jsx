import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { About } from './Components/About';
import { Services } from './Components/Service';
import { Portfolio } from './Components/Portfolio';
import { Contact } from './Components/Contact';

function App() {
  return (
    <div className="bg-neutral-950 text-white scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
