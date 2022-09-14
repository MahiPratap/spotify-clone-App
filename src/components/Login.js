import React from 'react'
import  "./Login.css";
import { loginUrl } from './Spotify';

function Login() {
  return (
    <div className='login'>
        <img 
            src= "https://thumbs.dreamstime.com/b/vinnytsia-ukraine-may-spotify-logo-dark-mode-cool-music-service-offers-legal-streaming-music-spotify-logo-dark-mode-218033923.jpg"
            alt=''
        />
        <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
        
        
    </div>
  );
}

export default Login