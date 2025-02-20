import React, { useState }  from 'react'
import classes from './Main.module.css';
import icon from '../Icons';
import { useNavigate } from 'react-router-dom';
import { auth } from "../Firebase";

export default function Main() {
    const [showData, setShowData] = useState(false);

    const handleClick = () => {
        setShowData((show) => !show);
    };

    const userData =  JSON.parse(localStorage.getItem('user'));
    const currentUserName = userData ? userData.displayName : null; 
    const firstLatter = currentUserName.slice(0,1).toUpperCase();

    const currentUserEmail = userData.email;
    
    const navigate = useNavigate();

    const exitCheck = async() => {
        let userConfirmed = window.confirm('Do you want to exit?');
        if (userConfirmed) {
            await exitUser();
            navigate('/');
        } else {
            console.log('User clicked NO!');
        };
    };

    const exitUser = () => {
        try {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.removeItem('isLoggedIn');

            console.log('user exited successfully');
        } catch (error) {
            console.log('error', error);
        };
    };

    const deleteCheck = () => {
        let deleteUser = prompt('If you really want to delete your account, please write your username down', '');
        if (deleteUser === currentUserName) {
            deleteUserAccount();
            navigate('/');
        } else {
            alert('deletion failed');
        };
    };

    const deleteUserAccount = async() => {
        try {
            await auth.currentUser.delete();
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.removeItem('isLoggedIn');

            console.log('user deleted successfully');
        } catch(error) {
            console.log('error', error);
        };
    };

  return (
    <div className={classes.mainPage}>
        <div className={classes.mainPageHeader}> 
            <img src={icon.registration} alt = 'logo'/> 

            <div className={classes.mainPageDatas} style={{height: showData ? '360px' : '80px'}}>
                <div className={classes.mainPageFirstLatter} onClick={handleClick}>
                    <p>{firstLatter}</p>
                </div>
                <div className={classes.mainPageList} style={{display: showData ? 'flex' : 'none',}}>
                    <ul>
                        <li>{currentUserName}</li>
                        <li>{currentUserEmail}</li>
                    </ul>

                    <button onClick={exitCheck}>Exit</button>
                    <button onClick={deleteCheck}>Log Out</button>
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