import './App.css';
import Entry from './entry/Entry';
import Signup from './signup/Signup';
import Login from './login/Login';
import Main from './mainpage/Main';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element={
          <Entry />
        } />

        <Route path={'/signup'} element={
          <Signup />
        } />

        <Route path={'/login'} element={
          <Login />
        } />

        <Route path={'/mainPage'} element={
          <Main />
        } />
      </Routes>
    </div>
  );
}

export default App;