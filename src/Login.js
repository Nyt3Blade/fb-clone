import React from 'react'
import Button from '@material-ui/core/Button';
import "./Login.css";
import {auth} from './firebase';
import googleAuthProvider from "./firebase.js";

function Login() {

    const signIn = () => {
        auth
        .signInWithPopup(googleAuthProvider)
        .then((result) => {
            console.log(result);
        })
        .catch(error => alert(error.message) );
    }

  return (
    <div className='login'>
        <div className='login__logo'>
            <img src="https://cdn.iconscout.com/icon/free/png-64/facebook-logo-2019-1597680-1350125.png" alt="Logo" />
            <br></br>
            <img src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt="Logo" />
        </div>

        <Button type="submit" onClick={signIn}>
            Sign In
        </Button>
    </div>
  )
}

export default Login