import React, { Component } from "react";
import PlayWidget from "react-spotify-widgets";
import "../JukeBox/JukeBox.css"

class Spotify2_1 extends Component {
  render() {
    return (
      <div className="cam-left">
        <PlayWidget
          width={225}
          height={295}
          uri={"spotify:playlist:37i9dQZF1E34RWArBkyuZf"}
          lightTheme={true}
        />
      </div>
    );
  }
}

export default Spotify2_1;
