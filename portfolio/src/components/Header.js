import React from 'react';

function Header({ setCurrentTab }) {
  return (
    <>
      <div
        id='headerLink'
        className='primary'
        onClick={() => setCurrentTab('about')}
      >
        Archie Donaho
      </div>
    </>
  );
}

export default Header;
