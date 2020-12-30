import React from "react";
import Image from "../Images/tom-podcast.png";
import SpotifyTom from "../Spotify/Spotify";
import SpotifyTomTwo from "../Spotify/Spotify-1";
import SpotifyTomThree from "../Spotify/Spotify-2";
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
            <SpotifyTomThree/>
          </div>
          <div className="left-side" id="box">
            <SpotifyTom/>
          </div>
          <div className="right-side" id="box">
            <SpotifyTomTwo/>
          </div>
          <div className="top-side" id="box"></div>
          <div className="bottom-side" id="box"></div>
        </div>
      </div>
    );
  }
}

export default RotatingBoxTwo;
