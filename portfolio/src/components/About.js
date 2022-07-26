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
            get there. Additionally, I have a history of customer-facing,
            highly-decisive jobs, like inventory management and service
            advising. Experience in creating MERN stack, RESTful, test-driven,
            mobile and progressive applications, as well as working solo & with
            others to create & improve a multitude of applications. The last
            project I created was a MERN stack social media image-sharing
            platform. In my team, I was responsible for back-end development
            using MongoDB, Mongoose, & Apollo GraphQL, and implementing cloud
            based storage for hosting the images due to storage limitations with
            MongoDB Cloud. I also helped work on front-end components and the
            api calls to both the cloud storage and the database. <br />
            As a graduate of the UTSA Full Stack Web Development Bootcamp, I
            have gained 100+ hours of experience building full stack
            applications individually and with a team using languages such as
            HTML, CSS, and Javascript, utilizing applications such as Node, Git,
            GitHub, Express, React, Handlebars, MySQL with Sequelize, MongoDB
            with Mongoose & Apollo GraphQL, 3rd party CSS libraries, 3rd party
            API’s, and deployment using Heroku. Additionally, I have used
            technologies & development skills such as ServiceWorkers & Web
            Manifest, MVC File Organization, Test-Driven-Development, Chrome Dev
            Tools, Google Lighthouse, Cloud based storage, and IndexedDB to
            further create organized & efficient applications.
            <br />
            Certificates: UTSA Full Stack Bootcamp
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
