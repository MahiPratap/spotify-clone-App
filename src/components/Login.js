import React from 'react'
import  "./Login.css";
import { accessUrl } from './Spotify';

function Login() {
  return (
    <div className='login'>
        <img 
            src= "https://www.freepnglogos.com/pics/spotify-logo-png"
            alt='logo'
        />
        <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
        
        
    </div>
  );
}

export default Login
