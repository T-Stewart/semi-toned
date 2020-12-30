import React, { Component } from 'react'
import "../Episode.css"


export default class Ep2 extends Component {

    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <iframe
                        title="episode-two"
                        src="https://open.spotify.com/embed-podcast/episode/7kaAjXeSBp5XZx5kADIKwL"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                    ></iframe>
                </div>
            </div>
        );
    }
}