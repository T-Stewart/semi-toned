import React from "react";
import Image from "../Images/cameron-podcast.png";
import Spotify2 from "../Spotify/Spotify2";
import Spotify2_1 from "../Spotify/Spotify2-1";
import Spotify2_2 from "../Spotify/Spotify2-2";
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
          <Spotify2_2></Spotify2_2>
        </div>
        <div className="left-side" id="box">
          <Spotify2></Spotify2>
        </div>
        <div className="right-side" id="box">
          <Spotify2_1></Spotify2_1>
        </div>
        <div className="top-side" id="box"></div>
        <div className="bottom-side" id="box"></div>
      </div>
    </div>
  );
}
}


