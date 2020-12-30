import React, { Component } from 'react'
import "../Episode.css"


export default class Ep5 extends Component {

    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <iframe
                        title="episode-five"
                        src="https://open.spotify.com/embed-podcast/episode/5kOIBGll5grfaGCBXLPJgS"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                    ></iframe>
                </div>
            </div>
        );
    }
}