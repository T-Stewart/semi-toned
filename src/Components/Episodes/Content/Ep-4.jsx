import React, { Component } from 'react'
import "../Episode.css"


export default class Ep4 extends Component {

    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                     <iframe
                        title="episode-four"
                        src="https://open.spotify.com/embed-podcast/episode/47QBy5yj9X4ks7WmkHTqKX"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                    ></iframe>
                </div>
            </div>
        );
    }
}