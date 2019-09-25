import React from 'react';
import Track from '../components/Track';

export default class TrackList extends React.Component {

    state = {
        currentPlayingTrack: -1
    };

    constructor(props) {
        super(props);
        this.onTrackPlay = this.onTrackPlay.bind(this);
        this.onTrackStop = this.onTrackStop.bind(this);
    }

    onTrackPlay(id) {
        this.setState({ ...this.state, currentPlayingTrack: id });
    }

    onTrackStop() {
        this.setState({ ...this.state, currentPlayingTrack: -1 });
    }

    render() {
        return (
            this.props.tracks.map((track) =>
                <Track
                    key={`track-${track.id}`}
                    id={track.id}
                    name={track.name}
                    source={track.file}
                    onPlay={this.onTrackPlay}
                    onStop={this.onTrackStop}
                    isPlaying={track.id === this.state.currentPlayingTrack}
                />
            )
        );
    }

}