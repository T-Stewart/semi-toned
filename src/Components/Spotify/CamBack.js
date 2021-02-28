import React, { Component } from "react";
import PlayWidget from "react-spotify-widgets";

class Spotify2 extends Component {
  render() {
    return (
      <div className="cam-back">
        <PlayWidget
          
          width={225}
          height={295}
          uri={"spotify:playlist:37i9dQZF1E3ajHQUJddPTF"}
          lightTheme={true}
        />
      </div>
    );
  }
}

export default Spotify2;
// 1st https://open.spotify.com/playlist/37i9dQZF1E3ajHQUJddPTF
//2nd 37i9dQZF1E34RWArBkyuZf
// 3rd 37i9dQZF1E37JSQjyWQCs6
