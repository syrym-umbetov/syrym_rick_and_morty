import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import CharacterPage from './pages/CharacterPage';
import SignInPage from './pages/SignInPage';
import { Auth } from './context/Auth';
import { Counter } from './components/Counter';
import Caesar from './components/Caesar';
import Todo from './components/Todo';

function App() {
  const [token, setToken] = useState(localStorage.getItem('idToken'));
  return (
    <Auth.Provider value={{ token, setToken }}>
      <div className='App'>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/character/:id' element={<CharacterPage />}></Route>
          <Route path='/signin' element={<SignInPage />}></Route>
          <Route path='/counter' element={<Counter />}></Route>
          <Route path='/caesar' element={<Caesar />}></Route>
        </Routes>
      </div>
    </Auth.Provider>
  );
}

export default App;
