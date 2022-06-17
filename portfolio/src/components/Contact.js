import React, { useState } from 'react';

function validateEmail(email) {
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
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
        setErrorMessage(`${e.target.name} is required`);
      } else {
        setErrorMessage('');
      }
    }
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  return (
    <section>
      <h2 className='text-center'>Contact Me</h2>
      <div>
        <form id='contact-form'>
          <div>
            <label htmlFor='name'>Name:</label>
            <input
              type='text'
              name='name'
              defaultValue={name}
              onBlur={handleInput}
            ></input>
          </div>
          <div>
            <label htmlFor='email'>Email:</label>
            <input
              type='email'
              name='email'
              defaultValue={email}
              onBlur={handleInput}
            ></input>
          </div>
          <div>
            <label htmlFor='message'>Message:</label>
            <textarea
              type='text'
              name='message'
              rows='5'
              defaultValue={message}
              onBlur={handleInput}
            ></textarea>
          </div>
          <button type='submit'>Submit</button>
        </form>
        {errorMessage && (
          <div>
            <p>{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
