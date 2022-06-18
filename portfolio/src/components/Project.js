import React from 'react';

const projects = [
  {
    name: 'InsertDisc',
    description:
      'This application allows users to talk about everything music, games, and movies. Users can like their favorite post, reply to any post, and share a post to twitter using the share button.',
    tech: 'Built using a MySQL database, Node, Sequelize, Express routes, and Handlebars',
    link: 'https://insertdisc.herokuapp.com/',
    img: 'insertdisc',
  },
  {
    name: 'Search, Watch, Chill',
    description: `This application gives the user a movie based on a selected genre or movie title along with the movie's description, analytics, and other information.`,
    tech: `A demonstration of using 3rd party api's and front-end Javascript`,
    link: 'https://archiedonaho.github.io/Search-Watch-Chill/',
    img: 'search-watch-chill',
  },
  {
    name: 'Random Password Generator',
    description:
      'This application asks for a series of prompts to give you a randomly generated password to be used where needed.',
    tech: 'Built using front end Javascript',
    link: 'https://archiedonaho.github.io/Random-Password-Generator/',
    img: 'Password',
  },
  {
    name: 'Budget Tracker',
    description:
      'A downloadable application to track your finances that you can use both online and offline.',
    tech: 'Built to utilize IndexedDB and Service Workers for usage natively & offline',
    link: 'https://radiant-inlet-28903.herokuapp.com/',
    img: 'budget-tracker',
  },
  {
    name: 'Your Tech Blog',
    description: `This application is a blog site where users can create accounts to post their thoughts on the current state of modern tech and comment on other's posts.`,
    tech: 'Utilizing Node, Express, MySQL, Sequelize, and HandleBars',
    link: 'https://hidden-tor-41102.herokuapp.com/',
    img: 'your-tech-blog',
  },
  {
    name: 'Employee Tracker',
    description:
      'This application allows the user to view and interact with an informational database that stores employees, departments, jobs, and managers.',
    tech: 'Built to utilize the Node CLI',
    link: 'https://github.com/ArchieDonaho/Employee-Tracker',
    img: 'employee-tracker',
  },
];

function Project() {
  return (
    <div id='project' className='row'>
      <h2 className='text-center'>Projects</h2>
      {projects.map((project, index) => (
        <div className='col-md-4 col-sm-6 col-12 my-2'>
          <div className='card'>
            <div class='bg-image hover-zoom border-bottom'>
              <img
                className='card-img-top'
                alt='inserdisc'
                src={require(`../assets/img/${projects[index].img}.png`)}
              />
              <a href={projects[index].link}>
                <div className='mask'></div>
              </a>
            </div>

            <div className='card-body'>
              <h5 className='card-title'>{projects[index].name}</h5>
              <h6 className='card-subtitle mb-3 text-muted'>
                {projects[index].tech}
              </h6>
              <p className='card-text'>{projects[index].description}</p>
              {/* <a
                className='card-link'
                target='_blank'
                href={projects[index].link}
              >
                {projects[index].link}
              </a> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
