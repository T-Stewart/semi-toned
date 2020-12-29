import React from "react";
import "./App.css";
import RotatingBox from "./Components/JukeBox/Rotating-Box";
import RotatingBoxTwo from "./Components/JukeBox/Rotating-Box-Two";
import EpisodeSelector from "./Components/Episodes/EpisodeSelector"

function App() {
  return (
    <div className="App">
      <div className="intro">
      <h1>Semi-Toned Podcast</h1>
      <p >Welcome to Semi-toned Podcast! Have a listen to what Cameron and Tom are listening to, or check out our podcast episodes</p>
      </div>
      <div>
      <RotatingBox/>
      <RotatingBoxTwo/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div>
        <EpisodeSelector/>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default App;
