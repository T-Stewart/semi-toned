import React from 'react';
import Header from '../Images/header-image.jpeg'
import './About.css'
export default class About extends React.Component {
    render(){
        return (
            <div>
                 <h1>Semi-Toned Podcast</h1>
                 <p >Welcome to Semi-toned Podcast! Have a listen to what Cameron and Tom are listening to, or check out our podcast episodes</p>
                 <img className ="header-image"src={Header} alt=""/>
            </div>
        )
    }
}