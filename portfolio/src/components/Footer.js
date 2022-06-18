import React from 'react';

const links = [
  {
    name: 'GitHub',
    link: 'https://github.com/ArchieDonaho',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/archie-donaho-63b3a5229/',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/archie_donaho/',
  },
  {
    name: 'Email',
    link: 'mailto:archied5150@yahoo.com',
  },
];

function Footer() {
  return (
    <footer id='contact' className='my-5'>
      <div className='row'>
        {links.map((link, index) => (
          <div className='col-3 text-center'>
            <a target='_blank' rel='noreferrer' href={links[index].link}>
              {links[index].name}
            </a>
          </div>
        ))}

        <button type='button' className='btn btn-primary btn-floating mx-1'>
          <i className='fab fa-facebook-f'></i>
        </button>

        <button type='button' className='btn btn-primary btn-floating mx-1'>
          <i className='fab fa-google'></i>
        </button>

        <button type='button' className='btn btn-primary btn-floating mx-1'>
          <i className='fab fa-twitter'></i>
        </button>

        <button type='button' className='btn btn-primary btn-floating mx-1'>
          <i className='fab fa-github'></i>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
