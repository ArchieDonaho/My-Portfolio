import React from 'react';
import Header from './Header';

function Navigation(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header>
      <Header></Header>
      <nav>
        <ul>
          <li>
            <a href='#about' onClick={() => setCurrentTab('about')}>
              About Me
            </a>
          </li>
          <li>
            <a href='#project' onClick={() => setCurrentTab('projects')}>
              Projects
            </a>
          </li>
          <li>
            <a href='#contact' onClick={() => setCurrentTab('contact')}>
              Contact
            </a>
          </li>
          <li>
            <a href='#resume' onClick={() => setCurrentTab('resume')}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
