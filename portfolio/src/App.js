import React, { useState } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project';
import Footer from './components/Footer';
import Resume from './components/Resume';

function App() {
  const [currentTab, setCurrentTab] = useState('about');

  return (
    <div>
      <Navigation
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
      ></Navigation>
      <main>
        {currentTab === 'about' && <About></About>}
        {currentTab === 'resume' && <Resume></Resume>}
        {currentTab === 'projects' && <Project></Project>}
        {currentTab === 'contact' && <Contact></Contact>}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
