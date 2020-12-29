import React, { Component } from "react";
import PlayWidget from "react-spotify-widgets";

class Spotify extends Component {
  render() {
    return (
      <div className="spotify">
        <PlayWidget
          className="tom-one"
          width={300}
          height={395}
          uri={"spotify:playlist:37i9dQZF1E38Y6O4jILiSf"}
          lightTheme={true}
        />
      </div>
    );
  }
}

export default Spotify;
// https://open.spotify.com/playlist/37i9dQZF1E3ajHQUJddPTF
// 37i9dQZF1E34RWArBkyuZf
// 37i9dQZF1E37JSQjyWQCs6
