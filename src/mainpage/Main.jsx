import React from 'react'
import classes from './Main.module.css';
import icon from '../Icons';
import { useState } from 'react';

export default function Main() {
    const [showData, setShowData] = useState(false);

    const handleClick = () => {
        setShowData((show) => !show);
    };

    const userData =  JSON.parse(localStorage.getItem('user'));
    const currentUserName = userData ? userData.displayName : null; 
    const firstLatter = currentUserName.slice(0,1).toUpperCase();

    const currentUserEmail = userData.email;
    
  return (
    <div className={classes.mainPage}>
        <div className={classes.mainPageHeader}> 
            <img src={icon.registration} alt = 'logo'/> 

            <div className={classes.mainPageDatas} style={{height: showData ? '280px' : '80px'}}>
                <div className={classes.mainPageFirstLatter} onClick={handleClick}>
                    <p>{firstLatter}</p>
                </div>
                <div className={classes.mainPageList} style={{display: showData ? 'flex' : 'none',}}>
                    <ul>
                        <li>{currentUserName}</li>
                        <li>{currentUserEmail}</li>
                    </ul>

                    <button>Loge Out</button> 
                </div>  
            </div> 
        </div>

        <div className={classes.mainPageText}>
            <p>
                This project is created with a single purpose—user authentication. It implements a login and registration system that allows users to authenticate securely.
                No additional features are included since the main focus is on the authentication process.
                If you see this page, it means you have successfully logged in!
            </p>
        </div>
    </div>
  )
}
