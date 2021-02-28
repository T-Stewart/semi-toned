import React from "react";
import "./App.css";
import JukeBox from './Components/JukeBox/JukeBox';
import About from './Components/About/About';
import EpisodeSelector from "./Components/Episodes/EpisodeSelector";
import Navbar from './Components/Navbar/Navbar'
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
      <Route path="/" component={About} exact />
      <Route path="/jukebox" component={JukeBox} exact />
      <Route path="/episodes" component={EpisodeSelector} exact />
      </Switch>
    </div>
  );
}

export default App;
