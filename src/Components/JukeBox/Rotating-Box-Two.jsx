import React from "react";
import Image from "../Images/tom-podcast.png";
import Spotify from "../Spotify/Spotify";
import Spotify_1 from "../Spotify/Spotify-1";
import Spotify_2 from "../Spotify/Spotify-2";
import './JukeBox.css'


class RotatingBoxTwo extends React.Component {
  render() {
    return (
      <div className="rotating-box-two">
        <div className="single-rb2">
          <div className="front-side" id="box">
            <img src={Image} alt="" id="faces" />
          </div>
          <div className="back-side" id="box">
            <Spotify_2></Spotify_2>
          </div>
          <div className="left-side" id="box">
            <Spotify></Spotify>
          </div>
          <div className="right-side" id="box">
            <Spotify_1></Spotify_1>
          </div>
          <div className="top-side" id="box"></div>
          <div className="bottom-side" id="box"></div>
        </div>
      </div>
    );
  }
}

export default RotatingBoxTwo;
