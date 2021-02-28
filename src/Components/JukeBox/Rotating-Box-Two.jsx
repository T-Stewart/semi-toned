import React from "react";
import Image from "../Images/tom-podcast.png";
import TomRight from "../Spotify/TomRight";
import TomLeft from "../Spotify/TomLeft";
import TomBack from "../Spotify/TomBack";
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
            <TomBack/>
          </div>
          <div className="left-side" id="box">
            <TomLeft/>
          </div>
          <div className="right-side" id="box">
            <TomRight/>
          </div>
          <div className="top-side" id="box"></div>
          <div className="bottom-side" id="box"></div>
        </div>
      </div>
    );
  }
}

export default RotatingBoxTwo;
