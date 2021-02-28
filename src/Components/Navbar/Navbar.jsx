import React from 'react'
import {Link} from 'react-router-dom';
import Tom from '../Images/tom-navbar.png';
import Cam from '../Images/cameron-navbar.png';
import './Navbar.css'




export default class Navbar extends React.Component{
    render() {
        return (
            <div className="nav">
                <img id="cam-nav" src={Cam} alt=""/>
                <Link className= 'btn' to="/">Home </Link>
                <Link className= 'btn' to="/jukebox">JukeBox</Link>
                <Link className= 'btn' to="/episodes">Episodes</Link>
                <img id="tom-nav" src={Tom} alt=""/>
            </div>
        );
    }
}