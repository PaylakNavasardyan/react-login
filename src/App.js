import './App.css';
import Entry from './entry/Entry';
import Signup from './signup/Signup';
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
        }/>
      </Routes>
    </div>
  );
}

export default App;