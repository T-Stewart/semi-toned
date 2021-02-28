import React from 'react';
import RotatingBox from './Rotating-Box';
import RotatingBoxTwo from './Rotating-Box-Two'

export default class JukeBox extends React.Component{
    render(){
        return(
            <div>
                <h3>Jukebox</h3>
                <p>Have a gander at what Spotify has deemed interesting enough for us to listen to </p>
                <RotatingBox/>
                <RotatingBoxTwo/>
            </div>
        )
    }
}