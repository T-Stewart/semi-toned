import React, { Component } from 'react'
import "../Episode.css"


export default class Ep9 extends Component {

    handleClick = () => {
        this.props.toggle();
    };

    render() {
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.handleClick}>&times;</span>
                    <iframe
                        title="episode-nine"
                        src="https://open.spotify.com/embed-podcast/episode/6GDvAhuUFyT8H6YOEfoTjJ"
                        frameborder="0"
                        allowtransparency="true"
                        allow="encrypted-media"
                    ></iframe>
                </div>
            </div>
        );
    }
}