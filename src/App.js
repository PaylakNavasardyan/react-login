import './App.css';
import Entry from './entry/Entry';
import Signup from './signup/Signup';
import Login from './login/Login';
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
      </Routes>
    </div>
  );
}

export default App;