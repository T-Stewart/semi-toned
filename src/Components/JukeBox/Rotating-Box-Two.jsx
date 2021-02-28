import React from "react";
import Image from "../Images/tom-podcast.png";
import TomRight from "../Spotify/TomRight";
import TomLeft from "../Spotify/TomLeft";
import TomBack from "../Spotify/TomBack";
import './JukeBox.css'


class RotatingBoxTwo extends React.Component {
  state = {
    rotate: true
  }

  rotation = () => {
    let box = document.getElementById('single-rb2');
    box.style.animationPlayState = 'running';
    if(this.state.rotate === true){
      setTimeout(() => { box.style.animationPlayState = 'paused'}, 3000);
    };
  };

  render() {
    return (
      <div className="rotating-box-two">
        <div id="single-rb2">
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
        <div className="button-container" id="">
          <button
            onClick={this.rotation}
            className="button">
           Scroll
          </button>
          </div>
      </div>
    );
  }
}

export default RotatingBoxTwo;
