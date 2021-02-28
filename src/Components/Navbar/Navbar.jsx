import React from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css'




export default class Navbar extends React.Component{
    render() {
        return (
            <div className="nav">
                <Link className= 'btn' to="/">Home </Link>
                <Link className= 'btn' to="/jukebox">JukeBox</Link>
                <Link className= 'btn' to="/episodes">Episodes</Link>
            </div>
        );
    }
}