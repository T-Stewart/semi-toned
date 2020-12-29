import React, { Component } from "react";
import PlayWidget from "react-spotify-widgets";

class Spotify2_1 extends Component {
  render() {
    return (
      <div className="spotify">
        <PlayWidget
          className="cam-two"
          width={300}
          height={395}
          uri={"spotify:playlist:37i9dQZF1E34RWArBkyuZf"}
          lightTheme={true}
        />
      </div>
    );
  }
}

export default Spotify2_1;
