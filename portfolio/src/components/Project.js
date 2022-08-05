import React from 'react';

const projects = [
  {
    name: 'UpLoL',
    description:
      'An application for sharing funny, tasteful images with friends! Post, like, comment, and share!',
    tech: 'Built using the MERN stack and the Cloudinary API',
    link: 'https://uplol.herokuapp.com/',
    github: 'https://github.com/kevin-foreman/UpLoL',
    img: 'uplol',
  },
  {
    name: 'Budget Tracker',
    description:
      'A downloadable application to track your finances that you can use both online and offline.',
    tech: 'Built to utilize IndexedDB and Service Workers for usage natively & offline',
    link: 'https://radiant-inlet-28903.herokuapp.com/',
    github: 'https://github.com/ArchieDonaho/Budget-Tracker',
    img: 'budget-tracker',
  },
  {
    name: 'Your Tech Blog',
    description: `A blog site where users can create accounts to post their thoughts on the current state of modern tech and comment on other's posts.`,
    tech: 'Utilizing Node, Express, MySQL, Sequelize, and HandleBars',
    link: 'https://hidden-tor-41102.herokuapp.com/',
    github: 'https://github.com/ArchieDonaho/Tech-Blog',
    img: 'your-tech-blog',
  },
  {
    name: 'Employee Tracker',
    description:
      'View and interact with an informational database that stores employees, departments, jobs, and managers.',
    tech: 'Built to utilize the Node CLI',
    link: 'https://github.com/ArchieDonaho/Employee-Tracker',
    github: 'https://github.com/ArchieDonaho/Employee-Tracker',
    img: 'employee-tracker',
  },
  {
    name: 'Random Password Generator',
    description:
      'This application asks for a series of prompts to give you a randomly generated password to be used where needed.',
    tech: 'Built using front end Javascript',
    link: 'https://archiedonaho.github.io/Random-Password-Generator/',
    github: 'https://github.com/ArchieDonaho/Random-Password-Generator',
    img: 'password',
  },
  // {
  //   name: 'Search, Watch, Chill',
  //   description: `This application gives the user a movie based on a selected genre or movie title along with the movie's description, analytics, and other information.`,
  //   tech: `A demonstration of using 3rd party api's, front-end Javascript, and localstorage`,
  //   link: 'https://archiedonaho.github.io/Search-Watch-Chill/',
  //   github: 'https://github.com/ArchieDonaho/Search-Watch-Chill',
  //   img: 'search-watch-chill',
  // },
  {
    name: 'InsertDisc',
    description:
      'This application allows users to talk about everything music, games, and movies. Users can like their favorite post, reply to any post, and share a post to twitter using the share button.',
    tech: 'Built using a MySQL database, Node, Sequelize, Express routes, and Handlebars',
    link: 'https://insertdisc.herokuapp.com/',
    github: 'https://github.com/ArchieDonaho/InsertDisc',
    img: 'insertdisc',
  },
];

function Project() {
  return (
    <div id='project' className='row mt-2 mx-1'>
      <h2 className='text-center'>Projects</h2>
      <p className='text-center'>
        A list of a few projects I have done throughout my time in my course
      </p>

      {projects.map((project, index) => (
        <div
          className='col-md-4 col-sm-6 col-12 my-2 text-center'
          key={projects[index].name}
        >
          <div className='card h-100'>
            <div className='bg-image hover-zoom border-bottom'>
              <img
                className='card-img-top'
                alt={`Screenshot of ${projects[index].name}`}
                src={require(`../assets/img/${projects[index].img}.png`)}
              />
              <a target='_blank' rel='noreferrer' href={projects[index].link}>
                <div className='mask'></div>
              </a>
            </div>

            <div className='card-body'>
              <h5 className='card-title'>{projects[index].name}</h5>
              <h6 className='card-subtitle mb-3 text-muted'>
                {projects[index].tech}
              </h6>
              <p className='card-text'>{projects[index].description}</p>
              <div className='text-center'>
                <a
                  href={projects[index].github}
                  target='_blank'
                  rel='noreferrer'
                >
                  <button className='btn project-card-btn text-white'>
                    View On GitHub
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
