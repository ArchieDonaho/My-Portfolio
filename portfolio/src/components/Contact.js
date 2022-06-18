import React, { useState } from 'react';

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
    <section>
      <h2 className='text-center'>Contact Me</h2>
      <div className='row  d-flex justify-content-center'>
        <div className='col-xsm-11 col-md-6'>
          <form
            id='contact-form'
            className='bg-white border border-dark rounded-5'
            onSubmit={handleSubmit}
          >
            <div className='form-outline mb-2 mt-2 border-bottom'>
              <input
                type='text'
                name='name'
                className='form-control'
                defaultValue={name}
                onBlur={handleInput}
              />
              <label className='form-label' htmlFor='name'>
                Name
              </label>
            </div>

            <div className='form-outline mb-2  border-bottom'>
              <input
                type='email'
                name='email'
                className='form-control'
                defaultValue={email}
                onBlur={handleInput}
              />
              <label className='form-label' htmlFor='email'>
                Email address
              </label>
            </div>

            <div className='form-outline mb-4  border-bottom'>
              <textarea
                className='form-control'
                name='message'
                rows='4'
                defaultValue={message}
                onBlur={handleInput}
              ></textarea>
              <label className='form-label' htmlFor='message'>
                Message
              </label>
            </div>
            {errorMessage ? (
              <div className='btn bg-danger text-white btn-block mb-4'>
                {errorMessage}
              </div>
            ) : (
              <button type='submit' className='btn btn-primary btn-block mb-4'>
                Send
              </button>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
