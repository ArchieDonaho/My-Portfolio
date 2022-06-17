import React from 'react';

function About() {
  return (
    <div id='about'>
      <h1>About me:</h1>
      <img
        className='img-fluid'
        alt='self portrait'
        src={require('../assets/img/portrait.jpg')}
      />
      <article>
        I am a 22-year-old developer from San Antonio Texas. I have been in the
        field for 2 months now, but I have working with code for over a year. On
        my downtime I love to go mountain bike riding, work on project cars of
        mine, and help others with any issues with their websites.
      </article>
    </div>
  );
}

export default About;
