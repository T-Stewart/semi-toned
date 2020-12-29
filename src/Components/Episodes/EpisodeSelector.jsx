import React from "react"
import "./Episode.css"
import Ep1 from "./Content/Ep-1"
import Ep2 from "./Content/Ep-2"
import Ep3 from "./Content/Ep-3"
import Ep4 from "./Content/Ep-4"
import Ep5 from "./Content/Ep-5"
import Ep6 from "./Content/Ep-6"
import Ep7 from "./Content/Ep-7"
import Ep8 from "./Content/Ep-8"
import Ep9 from "./Content/Ep-9"
import Ep10 from "./Content/Ep-10"


export default class EpisodeSelector extends React.Component{

    state = {
        ep1: false,
        ep2: false,
        ep3: false,
        ep4: false,
        ep5: false,
        ep6: false,
        ep7: false,
        ep8: false,
        ep9: false,
        ep10: false,
     }
    ep1Click = () => {
       this.setState({
           ep1: !this.state.ep1
       })
    }

    ep2Click = () => {
       this.setState({
           ep2: !this.state.ep2
       })
    }

     ep3Click = () => {
       this.setState({
           ep3: !this.state.ep3
       })
    }

     ep4Click = () => {
       this.setState({
           ep4: !this.state.ep4
       })
    }

     ep5Click = () => {
       this.setState({
           ep5: !this.state.ep5
       })
    }

     ep6Click = () => {
       this.setState({
           ep6: !this.state.ep6
       })
    }

     ep7Click = () => {
       this.setState({
           ep7: !this.state.ep7
       })
    }

     ep8Click = () => {
       this.setState({
           ep8: !this.state.ep8
       })
    }

     ep9Click = () => {
       this.setState({
           ep9: !this.state.ep9
       })
    }

     ep10Click = () => {
       this.setState({
           ep10: !this.state.ep10
       })
    }

    render() {
        return(
        <div className="wrapper">
            <h3>Episodes</h3>
            <div className="episode-box">
                {this.state.ep1 ? <Ep1 toggle={this.ep1Click} /> : null}
                {this.state.ep2 ? <Ep2 toggle={this.ep2Click} /> : null}
                {this.state.ep3 ? <Ep3 toggle={this.ep3Click} /> : null}
                {this.state.ep4 ? <Ep4 toggle={this.ep4Click} /> : null}
                {this.state.ep5 ? <Ep5 toggle={this.ep5Click} /> : null}
                {this.state.ep6 ? <Ep6 toggle={this.ep6Click} /> : null}
                {this.state.ep7 ? <Ep7 toggle={this.ep7Click} /> : null}
                {this.state.ep8 ? <Ep8 toggle={this.ep8Click} /> : null}
                {this.state.ep9 ? <Ep9 toggle={this.ep9Click} /> : null}
                {this.state.ep10 ? <Ep10 toggle={this.ep10Click} /> : null}
            </div>
            <div className="button-wrapper">
                <div className="top-row">
                    <div className="show-card">
                    <button className="ep-button" onClick={this.ep1Click}>1</button>
                    </div>
                    <div className="show-card">
                    <button className="ep-button" onClick={this.ep2Click}>2</button>
                    </div>
                    <div className="show-card">
                    <button className="ep-button" onClick={this.ep3Click}>3</button>
                    </div>
                    <div className="show-card">
                    <button className="ep-button" onClick={this.ep4Click}>4</button>
                    </div>
                    <div className="show-card">
                    <button className="ep-button" onClick={this.ep5Click}>5</button>
                    </div>
                </div>
                <div className="second-row">
                    <div className="show-card">
                    <button className="ep-button" onClick={this.ep6Click}>6</button>
                    </div>
                    <div className="show-card">
                    <button className="ep-button" onClick={this.ep7Click}>7</button>
                    </div>
                    <div className="show-card">
                    <button className="ep-button" onClick={this.ep8Click}>8</button>
                    </div>
                    <div className="show-card">
                    <button className="ep-button" onClick={this.ep9Click}>9</button>
                    </div>
                    <div className="show-card">
                    <button className="ep-button" onClick={this.ep10Click}>10</button>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}