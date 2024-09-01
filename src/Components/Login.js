import React from 'react'
import "./CSS/Login.css"
import { Button } from '@mui/material'
import { auth } from '../firebase'
import { provider } from '../firebase'
import { signInWithPopup } from 'firebase/auth'
import { useStateValue } from './StateProvider'
import { actionTypes } from './Reducer'

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
          dispatch({
            type: actionTypes.SET_USER,
            user: result.user,
          })
            console.log(result);
        })
        .catch((error) => alert(error.message))
    };
  return (
    <div className='login'>
      <div className='login__logo'>
        <img src = "https://thumbs.dreamstime.com/b/tree-psychology-logo-illustration-represent-isolated-white-background-88604721.jpg" alt=""/>
        <img src = ""/>

        <Button type = "submit" onClick = {signIn}>
            Sign In
        </Button>
      </div>
    </div>
  )
}

export default Login
