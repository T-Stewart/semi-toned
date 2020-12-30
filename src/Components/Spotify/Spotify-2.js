import React, { Component } from "react";
import PlayWidget from "react-spotify-widgets";
import "../JukeBox/JukeBox.css"

class Spotify_2 extends Component {
  render() {
    return (
      <div className="spotify">
        <PlayWidget
          className="tom-one"
          width={300}
          height={395}
          uri={"spotify:playlist:37i9dQZF1E38IQ2ZGz1j4M"}
          lightTheme={true}
        />
      </div>
    );
  }
}

export default Spotify_2;
