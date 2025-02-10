import classes from './Signup.module.css';
import icon from '../Icons';
import { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth/cordova';
import { auth } from '../Firebase';

export default function Signup() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [copyPassword, setCopyPassword] = useState('');

  const [error, setError] = useState('');

  const [aboutUser, setAboutUser] = useState('');

  const registration = async(e) => {
    e.preventDefault();

    if (password !== copyPassword) {
      setError("password didn't match");
      setUserName('');
      setEmail('');
      setPassword('');
      setCopyPassword('');

      setTimeout(() => {
        setError('')
      },5000);

      return;
    };
   
    try {
      const createUser = await createUserWithEmailAndPassword(auth, email, password);
      const user = createUser.user;
      
      await updateProfile(user, {
        displayName: userName,
      });

      if (updateProfile) {
        let firstChar = user.displayName.slice(0,1);
        setAboutUser(firstChar);
      }

      console.log('user is registered', user);

      localStorage.setItem("user", JSON.stringify({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        accessToken: user.accessToken,
      }));

      setError('');
      setUserName('');
      setEmail('');
      setPassword('');
      setCopyPassword('');
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <div className={classes.signup}>
      <div className={classes.signupBody}>
        <div className={classes.signupText}>
          <h2>Registration</h2>
        </div>

        <form onSubmit={registration}>
          <div className={classes.signupForms}>
            <input 
              type='text'
              placeholder='UserName'
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <img src={icon.user} alt='icon'/>
          </div>

          <div className={classes.signupForms}>
            <input 
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <img src={icon.email} alt='icon'/>
          </div>

          <div className={classes.signupForms}>
            <input 
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
            <img src={icon.lock} alt='icon'/>
          </div>

          <div className={classes.signupForms}>
            <input 
              type='password'
              placeholder='Copy Password'
              value={copyPassword}
              onChange={(e) => setCopyPassword(e.target.value)}
              required
            />
            <img src={icon.lock} alt='icon'/>
          </div>

          <button type='submit'>Sign Up</button>
        </form>

        {error && <p style={{color: 'red'}}>{error}</p>}
      </div>
    </div>
  )
}