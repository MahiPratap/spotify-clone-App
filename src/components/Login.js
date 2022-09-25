import React from 'react'
import  "./Login.css";
import { accessUrl } from './Spotify';

function Login() {
  return (
    <div className='login'>
        <img 
            src= "https://images.indianexpress.com/2021/08/Spotify.jpg"
            alt='logo'
        />
        <a href={accessUrl}>LOGIN WITH SPOTIFY</a>
        
        
    </div>
  );
}

export default Login
