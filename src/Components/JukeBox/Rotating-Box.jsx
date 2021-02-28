import React from "react";
import Image from "../Images/cameron-podcast.png";
import CamBack from "../Spotify/CamBack";
import CamLeft from "../Spotify/CamLeft";
import CamRight from "../Spotify/CamRight";
import './JukeBox.css'

export default class RotatingBox extends React.Component {
  state = {
    rotate: true
  }

  rotation = () => {
    let box = document.getElementById('single-rb');
    box.style.animationPlayState = 'running';
    if(this.state.rotate === true){
      setTimeout(() => { box.style.animationPlayState = 'paused'}, 3000);
    };
  };
  render(){
    
  return (
    <div className="rotating-box">
      <div id="single-rb">
        <div className="front-side" id="box">
          <img src={Image} alt="" />
        </div>
        <div className="back-side" id="box">
          <CamBack/>
        </div>
        <div className="left-side" id="box">
          <CamLeft/>
        </div>
        <div className="right-side" id="box">
          <CamRight/>
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


