import React from 'react';
import classes from './Entry.module.css';
import icon from '../Icons';

export default function Entry() {
  return (
    <div className={classes.entry}>
      <div className={classes.entryImage}>
        <img src={icon.registration} />
      </div>
      
      <div className={classes.entryButtons}>
        <button className={classes.login}>Log  In</button>
        
        <button className={classes.signup}>Sign Up</button>
      </div>
    </div>
  )
}
