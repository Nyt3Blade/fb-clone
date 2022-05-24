import React from 'react'
import Button from '@material-ui/core/Button';
import "./Login.css";
import auth from './firebase';
import provider from "./firebase.js";
import { actionTypes } from './Reducer';
import { useStateValue } from './StateProvider';

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            })
            console.log(result.user);
        })
        .catch((error) => alert(error.message) );
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