import React from 'react';
import Track from '../components/Track';

export default class TrackList extends React.Component {
    tracks = [
        {
            id: 0,
            name: 'foo',
        },
        {
            id: 1,
            name: 'bar',
        }
    ];

    state = {
        currentPlayingTrack: -1
    };

    constructor(props) {
        super(props);
        this.onTrackPlay = this.onTrackPlay.bind(this);
        this.onTrackStop = this.onTrackStop.bind(this);
    }
    render() {
        return (
            this.tracks.map((track) => <Track key={`track-${track.id}`} id={track.id} name={track.name} onPlay={this.onTrackPlay} onStop={this.onTrackStop} isPlaying={track.id === this.state.currentPlayingTrack} />)
        );
    }
    onTrackPlay(id) {
        this.setState({...this.state, currentPlayingTrack: id});
    }
    onTrackStop() {
        this.setState({...this.state, currentPlayingTrack: -1});
    }
}