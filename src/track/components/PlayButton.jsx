import React from 'react';

export default class PlayButton extends React.Component {
    constructor(props) {
        super(props);
        this.togglePlay = this.togglePlay.bind(this);
    }

    togglePlay() {
        this.props.onTogglePlay();
    }

    render() {
        return <button onClick={this.togglePlay}>{!this.props.isPlaying ? 'Play' : 'Pause'}</button>
    }
}