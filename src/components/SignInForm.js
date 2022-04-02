import React, { useContext, useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { Auth } from './../context/Auth';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { token, setToken } = useContext(Auth);

  const validateForm = (e) => {
    e.preventDefault();

    // if (password.length < 8) {
    //   alert('PASSWORDS LENGTH MUST BE MADE MORE THAN 8');
    //   return;
    // }
    // if (cPassword !== password) {
    //   alert('Passwords dont sync');
    //   return;
    // }
    const data = {
      email,
      password,
    };
    // onSuccess(data);
    sendUserData(data);
  };

  function sendUserData(userData) {
    axios
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=
AIzaSyA0LeB1ceoO5rAmyZgk-rMY2vTcVbSWaSE`,
        {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true,
        }
      )
      .then((data) => {
        // console.log(data.data.idToken)
        setToken(data.data.idToken);
        localStorage.setItem('idToken', data.data.idToken);
      })
      // .then((data) => setToken(data.data.idToken))
      .catch((error) => {
        alert(
          `Failed to Authorize. Error message: ${error.response.data.error.message}`
        );
      });
  }
  return (
    <form onSubmit={validateForm}>
      <TextField
        id='outlined-basic'
        label='Email'
        variant='outlined'
        type='email'
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        id='filled-basic'
        label='Password'
        variant='filled'
        type='password'
        required
      />
      {/* <input
        type='checkbox'
        checked={showPassword}
        onChange={(e) => setShowpassword(e.target.value)}
      /> */}

      <Button type='submit' variant='container'>
        Sign In
      </Button>
      {token ? 'AUTHORISED' : 'NOT AUTHORISED'}
    </form>
  );
};

export default SignInForm;
