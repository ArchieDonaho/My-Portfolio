import React from 'react';

function About() {
  return (
    <div id='about' className='mt-4'>
      <div className='row'>
        <div className='col-sm-5 col-12'>
          <img
            className='img-fluid rounded-circle  p-5'
            alt='self portrait'
            src={require('../assets/img/portrait.jpg')}
          />
        </div>
        <div className='col-sm-7 col-12 d-flex justify-content-center align-items-center mb-2'>
          <div>
            <h1>
              Hello, my name is<br></br> Archie Donaho
            </h1>
            <h3>Full Stack Web Developer</h3>
          </div>
        </div>
      </div>
      <div className='card'>
        <div className='mt-3 card-body'>
          <h2>About Me</h2>
          <p>
            I am a 22-year-old developer from San Antonio Texas. I have been in
            training though a bootcamp hosted by UTSA, but I have working on and
            off with code now for over a year now. I started with C++ in College
            and transitioned into working towards becoming a full stack web
            developer. On my downtime I love to go mountain bike riding, work on
            project cars of mine, and work on personal projects. My current goal
            is to graduate from bootcamp and start working towards a MERN stack
            development job.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
