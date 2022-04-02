import React from 'react';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';

// const data = [
//   { email: 'admin@gmail.com', password: ' admin123' },
//   { email: 'user@gmail.com', password: ' user1234' },
// ];

const SignInPage = () => {
  // const [users, setUsers] = useState(data);
  return (
    <div>
      <SignInForm />
      <div style={{ width: '20px' }} />
      <SignUpForm />
      {/* <SignUpForm onSuccess={(data) => setUsers([...users, data])} /> */}

      {/* {users.map((item) => (
        <div>
          email: {item.email}
          <br />
          password: {item.password}
        </div>
      ))} */}
    </div>
  );
};

export default SignInPage;
