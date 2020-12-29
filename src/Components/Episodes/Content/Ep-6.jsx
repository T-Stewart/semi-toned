import React, { Component } from 'react'
import "../Episode.css"


export default class Ep6 extends Component {

    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <iframe
                        className="episode"
                        src="https://open.spotify.com/embed-podcast/episode/03rO0F59x6xqL9CEwTe5rs"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                    ></iframe>
                </div>
            </div>
        );
    }
}