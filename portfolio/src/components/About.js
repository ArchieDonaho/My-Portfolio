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
            Full Stack Web Developer with excellent collaborative,
            problem-solving, and goal-oriented skills, utilized throughout the
            UTSA Full Stack Web Development Bootcamp by keeping a large focus on
            the final product and making sure my team understood the steps to
            get there.
            <div className='mb-2'></div>
            Earned my certificate and gained 100+ hours of experience building
            full stack applications through the bootcamp, working both
            individually and with a team, creating MERN stack, RESTful,
            test-driven, mobile and progressive web applications, as well as
            working solo & with others to create and improve a multitude of
            applications.
            <div className='mt-2'></div>
            Recently collaborated on a social media image sharing platform,
            tasked with implementing cloud-based image storage/hosting to reduce
            the load on the main database. Using my ability to collaborate and
            problem-solve, I am excited to use my skills to improve team
            viability and create exciting and innovative final products.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
