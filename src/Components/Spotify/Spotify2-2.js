import React, { Component } from "react";
import PlayWidget from "react-spotify-widgets";

class Spotify2_2 extends Component {
  render() {
    return (
      <div className="spotify">
        <PlayWidget
          className="cam-three"
          width={300}
          height={395}
          uri={"spotify:playlist:37i9dQZF1E37JSQjyWQCs6"}
          lightTheme={true}
        />
      </div>
    );
  }
}

export default Spotify2_2;
