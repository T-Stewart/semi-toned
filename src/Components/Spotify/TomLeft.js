import React, { Component } from "react";
import PlayWidget from "react-spotify-widgets";
import "../JukeBox/JukeBox.css"

class Spotify_1 extends Component {
  render() {
    return (
      <div className="tom-left">
        <PlayWidget
          width={225}
          height={295}
          uri={"spotify:playlist:37i9dQZF1E39URxNev3xdn"}
          lightTheme={true}
        />
      </div>
    );
  }
}

export default Spotify_1;
