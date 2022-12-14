
import React from "react";
import "./Player.css";
import Sidebar from "./Sidebar";
import Body from "./Body";
import Footer from "./Footer";

function Player({ Spotify }) {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar />
        <Body spotify={Spotify} />
      </div>
      <Footer spotify={Spotify} />
    </div>
  );
}

export default Player;