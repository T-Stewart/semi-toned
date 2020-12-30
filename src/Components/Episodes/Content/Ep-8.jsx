import React, { Component } from 'react'
import "../Episode.css"


export default class Ep8 extends Component {

    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <iframe
                        title="episode-eight"
                        src="https://open.spotify.com/embed-podcast/episode/4ACWInWS1EbDhlVtcoLVRu"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                    ></iframe>
                </div>
            </div>
        );
    }
}