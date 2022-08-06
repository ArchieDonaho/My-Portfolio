import React, { useState } from 'react';

const links = [
  {
    name: 'Email',
    link: 'mailto:archied5150@yahoo.com',
    shortLink: 'archied5150@yahoo.com',
    icon: 'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.021 17.824c-3.907 0-6.021-2.438-6.021-5.586 0-3.363 2.381-6.062 6.638-6.062 3.107 0 5.362 2.019 5.362 4.801 0 4.356-5.165 5.506-4.906 3.021-.354.555-.927 1.177-2.026 1.177-1.257 0-2.04-.92-2.04-2.403 0-2.222 1.461-4.1 3.19-4.1.829 0 1.399.438 1.638 1.11l.232-.816h1.169c-.122.416-1.161 4.264-1.161 4.264-.323 1.333.675 1.356 1.562.648 1.665-1.29 1.75-4.664-.499-6.071-2.411-1.445-7.897-.551-7.897 4.347 0 2.806 1.976 4.691 4.914 4.691 1.719 0 2.771-.465 3.648-.974l.588.849c-.856.482-2.231 1.104-4.391 1.104zm-1.172-7.153c-.357.67-.588 1.538-.588 2.212 0 1.805 1.761 1.816 2.626.12.356-.697.586-1.586.586-2.265 0-1.458-1.748-1.717-2.624-.067z',
  },
  {
    name: 'Gmail',
    link: 'mailto:archied5150@gmail.com',
    shortLink: 'archied5150@gmail.com',
    icon: 'M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm5.144 14.5h-10.288c-.472 0-.856-.384-.856-.856v-6.788c0-.472.384-.856.856-.856h10.288c.472 0 .856.384.856.856v6.788c0 .472-.384.856-.856.856zm-5.144-3.043l-4.671-3.241-.01 5.784h9.342v-5.784l-4.661 3.241zm4.435-4.957h-8.895l4.46 3.115s3.126-2.203 4.435-3.115z',
  },
  {
    name: 'GitHub',
    link: 'https://github.com/ArchieDonaho',
    shortLink: 'github.com/ArchieDonaho',
    icon: 'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 6c-3.313 0-6 2.686-6 6 0 2.651 1.719 4.9 4.104 5.693.3.056.396-.13.396-.289v-1.117c-1.669.363-2.017-.707-2.017-.707-.272-.693-.666-.878-.666-.878-.544-.373.041-.365.041-.365.603.042.92.619.92.619.535.917 1.403.652 1.746.499.054-.388.209-.652.381-.802-1.333-.152-2.733-.667-2.733-2.965 0-.655.234-1.19.618-1.61-.062-.153-.268-.764.058-1.59 0 0 .504-.161 1.65.615.479-.133.992-.199 1.502-.202.51.002 1.023.069 1.503.202 1.146-.776 1.648-.615 1.648-.615.327.826.121 1.437.06 1.588.385.42.617.955.617 1.61 0 2.305-1.404 2.812-2.74 2.96.216.186.412.551.412 1.111v1.646c0 .16.096.347.4.288 2.383-.793 4.1-3.041 4.1-5.691 0-3.314-2.687-6-6-6z',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/archie-donaho-63b3a5229/',
    shortLink: 'linkedin.com/in/archie-donaho/',
    icon: 'M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z',
  },
];

function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function Contact() {
  const [errorMessage, setErrorMessage] = useState('');
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = form;

  function handleInput(e) {
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMessage('Your email is invalid');
      } else {
        setErrorMessage('');
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${capitalizeFirstLetter(e.target.name)} is required`);
      } else {
        setErrorMessage('');
      }
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    // code to submit the form
  }

  return (
    // <section>
    //   <h2 className='text-center'>Contact Me</h2>
    //   <div className='row  d-flex justify-content-center'>
    //     <div className='col-xsm-11 col-md-6'>
    //       <form
    //         id='contact-form'
    //         className='bg-white border border-dark rounded-5'
    //         onSubmit={handleSubmit}
    //       >
    //         <div className='form-outline mb-2 mt-2 border-bottom'>
    //           <input
    //             type='text'
    //             name='name'
    //             className='form-control'
    //             defaultValue={name}
    //             onBlur={handleInput}
    //           />
    //           <label className='form-label' htmlFor='name'>
    //             Name
    //           </label>
    //         </div>

    //         <div className='form-outline mb-2  border-bottom'>
    //           <input
    //             type='email'
    //             name='email'
    //             className='form-control'
    //             defaultValue={email}
    //             onBlur={handleInput}
    //           />
    //           <label className='form-label' htmlFor='email'>
    //             Email address
    //           </label>
    //         </div>

    //         <div className='form-outline mb-4  border-bottom'>
    //           <textarea
    //             className='form-control'
    //             name='message'
    //             rows='4'
    //             defaultValue={message}
    //             onBlur={handleInput}
    //           ></textarea>
    //           <label className='form-label' htmlFor='message'>
    //             Message
    //           </label>
    //         </div>
    //         {errorMessage ? (
    //           <div className='btn bg-danger text-white btn-block mb-4'>
    //             {errorMessage}
    //           </div>
    //         ) : (
    //           <button type='submit' className='btn btn-primary btn-block mb-4'>
    //             Send
    //           </button>
    //         )}
    //       </form>
    //     </div>
    //   </div>
    // </section>

    <div id='about' className='my-5'>
      <div className='row'>
        <div className='col-md-5 col-12'>
          <img
            className='img-fluid rounded px-5'
            alt='self portrait'
            src={require('../assets/img/touch.jpg')}
          />
        </div>
        <div className='col-md-7 col-12 d-flex justify-content-center align-items-center mt-4 text-center'>
          <div className='text-center'>
            <h1>Want to get in touch?</h1>
            {links.map((link, index) => (
              <div className='my-3' key={links[index].name}>
                <a
                  className='w-100'
                  target='_blank'
                  rel='noreferrer'
                  href={links[index].link}
                >
                  <h3>
                    <svg
                      className='me-2'
                      xmlns='http://www.w3.org/2000/svg'
                      width='35'
                      height='35'
                      viewBox='0 0 24 24'
                    >
                      <path d={links[index].icon} />
                    </svg>
                    {links[index].shortLink}
                  </h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
