import React from "react";
import Image from "../Images/cameron-podcast.png";
import SpotifyCam from "../Spotify/Spotify2";
import SpotifyCamTwo from "../Spotify/Spotify2-1";
import SpotifyCamThree from "../Spotify/Spotify2-2";
import './JukeBox.css'

export default class RotatingBox extends React.Component {
  render(){
  return (
    <div className="rotating-box">
      <div className="single-rb">
        <div className="front-side" id="box">
          <img src={Image} alt="" />
        </div>
        <div className="back-side" id="box">
          <SpotifyCamThree/>
        </div>
        <div className="left-side" id="box">
          <SpotifyCam/>
        </div>
        <div className="right-side" id="box">
          <SpotifyCamTwo/>
        </div>
        <div className="top-side" id="box"></div>
        <div className="bottom-side" id="box"></div>
      </div>
    </div>
  );
}
}


