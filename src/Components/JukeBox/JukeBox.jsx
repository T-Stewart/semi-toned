import React from 'react';
import RotatingBox from './Rotating-Box';
import RotatingBoxTwo from './Rotating-Box-Two'

export default class JukeBox extends React.Component{
    render(){
        return(
            <div>
                <RotatingBox/>
                <RotatingBoxTwo/>
            </div>
        )
    }
}