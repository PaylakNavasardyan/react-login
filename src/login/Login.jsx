import React from 'react';
import classes from './Login.module.css';
import icon from '../Icons';

export default function Login() {
  return (
    <div>
       <div className={classes.login}>
      <div className={classes.loginBody}>
        <div className={classes.loginText}>
          <h2>Loge in</h2>
        </div>

        <form>
          <div className={classes.loginForms}>
            <input 
              type='text'
              placeholder='UserName'
              required
            />
            <img src={icon.user} alt='icon'/>
          </div>

          <div className={classes.loginForms}>
            <input 
              type='password'
              placeholder='Password'
              required
            />
            <img src={icon.lock} alt='icon'/>
          </div>

          <button type='submit'>Sign In</button>
        </form>
      </div>
    </div>
    </div>
  )
}
