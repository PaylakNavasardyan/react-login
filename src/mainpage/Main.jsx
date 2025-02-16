import React from 'react'
import classes from './Main.module.css';
import icon from '../Icons';

export default function Main() {
  return (
    <div className={classes.mainPage}>
      <img src={icon.registration} alt = 'logo'/>
    </div>
  )
}
