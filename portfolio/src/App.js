import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [contactFormSelected, setContactFormSelected] = useState(false);

  return (
    <div>
      <Navigation
        contactFormSelected={contactFormSelected}
        setContactFormSelected={setContactFormSelected}
      ></Navigation>
      <main>
        {!contactFormSelected ? (
          <>
            <About></About>
            <Project></Project>
            <Resume></Resume>
          </>
        ) : (
          <Contact></Contact>
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
