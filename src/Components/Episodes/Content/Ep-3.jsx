import React, { Component } from 'react'
import "../Episode.css"


export default class Ep3 extends Component {

    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                     <iframe
                        title="episode-three"
                        src="https://open.spotify.com/embed-podcast/episode/6AgSKSkrclusk9h8cQveI4"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                    ></iframe>
                </div>
            </div>
        );
    }
}