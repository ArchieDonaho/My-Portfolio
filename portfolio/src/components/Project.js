import React from 'react';

const projects = [
  {
    name: 'InsertDisc',
    description:
      'Built using a MySQL database, Express routes, and Handlebars, this application allows users to talk about everything music, games, and movies!',
    link: 'https://insertdisc.herokuapp.com/',
    img: 'insertdisc',
  },
  {
    name: 'Search, Watch, Chill',
    description: `A demonstration of using 3rd party api's and front end Javascript, this application will give you a list of movies based on a selected category, give a description, and other information.`,
    link: 'https://archiedonaho.github.io/Search-Watch-Chill/',
    img: 'search-watch-chill',
  },
  {
    name: 'Random Password Generator',
    description:
      'Using front end Javascript, this application asks for a series of prompts to give you a randomly generated password.',
    link: 'https://archiedonaho.github.io/Random-Password-Generator/',
    img: 'Password',
  },
  {
    name: 'Budget Tracker',
    description:
      'An application that you can take offline to track your finances, taking advantage of IndexedDB and Service Workers to upload your data when online.',
    link: 'https://radiant-inlet-28903.herokuapp.com/',
    img: 'budget-tracker',
  },
  {
    name: 'Your Tech Blog',
    description: `This application is a blog site where users can create accounts to post their thoughts on the current state of modern tech and comment on other's posts, utilizing Node, Express, MySQL, and HandleBars.`,
    link: 'https://hidden-tor-41102.herokuapp.com/',
    img: 'your-tech-blog',
  },
  {
    name: 'Employee Tracker',
    description:
      'This application allows the user to view and interact with an informational database that stores employees, departments, jobs, and managers using a Node CLI.',
    link: 'https://github.com/ArchieDonaho/Employee-Tracker',
    img: 'employee-tracker',
  },
];

function Project() {
  return (
    <div id='project'>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div>
          <div>{projects[index].name}</div>
          <div>{projects[index].description}</div>
          <a target='_blank' rel='noreferrer' href={projects[index].link}>
            {projects[index].link}
          </a>
          <img
            alt='inserdisc'
            src={require(`../assets/img/${projects[index].img}.png`)}
          />
        </div>
      ))}
    </div>
  );
}

export default Project;
