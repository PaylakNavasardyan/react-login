import React from 'react';
import classes from './Entry.module.css';
import icon from '../Icons';
import { Link } from 'react-router-dom';

export default function Entry() {
  return (
    <div className={classes.entry}>
      <div className={classes.entryImage}>
        <img src={icon.registration} />
      </div>
      
      <div className={classes.entryButtons}>
        <Link to='/login'><button className={classes.login}>Log  In</button></Link>
        
        <Link to='/signup'><button className={classes.signup}>Sign Up</button></Link>
      </div>
    </div>
  )
}
