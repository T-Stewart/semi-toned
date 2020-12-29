import React, { Component } from "react";
import PlayWidget from "react-spotify-widgets";

class Spotify_1 extends Component {
  render() {
    return (
      <div className="spotify">
        <PlayWidget
          className="tom-one"
          width={300}
          height={395}
          uri={"spotify:playlist:37i9dQZF1E39URxNev3xdn"}
          lightTheme={true}
        />
      </div>
    );
  }
}

export default Spotify_1;
