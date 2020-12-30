import React, { Component } from 'react'
import "../Episode.css"


export default class Ep1 extends Component {

    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                   
                    <iframe
                        title="episode-one"
                        src="https://open.spotify.com/embed-podcast/episode/2U6JY0NEovCKWLvYGMxXU3"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                    ></iframe>
  
                </div>
            </div>
        );
    }
}