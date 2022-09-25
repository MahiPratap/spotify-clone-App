import React from 'react'
import  "./Login.css";
import { accessUrl } from './Spotify';

function Login() {
  return (
    <div className='login'>
        <img 
            src= "https://st.depositphotos.com/37050820/58882/v/450/depositphotos_588825950-stock-illustration-spotify-logo-dark-mode.jpg"
            alt='logo'
        />
        <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
        
        
    </div>
  );
}

export default Login
