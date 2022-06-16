import React from 'react';
import Header from './Header';

function Navigation(props) {
  const { contactFormSelected, setContactFormSelected } = props;

  return (
    <header>
      <Header></Header>
      <nav>
        <ul>
          <li>
            <a href='#about' onClick={() => setContactFormSelected(false)}>
              About Me
            </a>
          </li>
          <li>
            <a href='#project' onClick={() => setContactFormSelected(false)}>
              Projects
            </a>
          </li>
          <li>
            <span onClick={() => setContactFormSelected(true)}>Contact</span>
          </li>
          <li>
            <a href='#resume' onClick={() => setContactFormSelected(false)}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
