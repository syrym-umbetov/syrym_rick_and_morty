import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import { Button, styled } from '@mui/material';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cPassword, setCpassword] = useState('');
  // const [showPassword, setShowpassword] = useState('');

  function checkCorrectPassword(password) {
    const minNumberofChars = 8;
    const maxNumberofChars = 20;
    const pattern =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (
      password.length < minNumberofChars ||
      password.length > maxNumberofChars
    ) {
      return false;
    }
    for (var i in password)
      if (
        +password[+i + 1] == +password[i] + 1 &&
        +password[+i + 2] == +password[i] + 2
      )
        return false;
    if (!pattern.test(password)) {
      alert(
        'password should contain letters, at least one number and one special character and one big letter'
      );
      return false;
    }
  }
  const validateForm = (e) => {
    e.preventDefault();
    checkCorrectPassword(password);
    // if (password.length < 8) {
    //   alert('PASSWORDS LENGTH MUST BE MADE MORE THAN 8');
    //   return;
    // }
    if (cPassword !== password) {
      alert('PASSWORDS ARE NOT SAME!');
      return;
    }

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
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=
AIzaSyA0LeB1ceoO5rAmyZgk-rMY2vTcVbSWaSE`,
        {
          email: userData.email,
          password: userData.password,
          returnSecureToken: true,
        }
      )
      .then((data) => console.log(data))

      .catch((error) => {
        console.log({ ...error });
        alert(
          `User not registered. Error message: ${error.response.data.error.message}`
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
      <TextField
        value={cPassword}
        onChange={(e) => setCpassword(e.target.value)}
        id='filled-basic'
        label='Confirm Password'
        variant='filled'
        type='password'
        required
      />
      <Button type='submit' variant='container'>
        Sign Up
      </Button>
    </form>
  );
};

export default SignUpForm;
