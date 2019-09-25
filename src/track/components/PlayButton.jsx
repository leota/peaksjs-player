import React from 'react';
import './PlayButton.css';

export default class PlayButton extends React.Component {

    constructor(props) {
        super(props);
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay() {
        this.props.onTogglePlay();
    }

    render() {
        return (
            <button className="btn" onClick={this.togglePlay}>
                <i className={"btn__icon fa " + (this.props.isPlaying ? 'fa-pause' : 'fa-play')}></i>
            </button>
        )
    }

}