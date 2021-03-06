import React from 'react';
import Peaks from 'peaks.js';
import './Track.css';
import PlayButton from './PlayButton';
import TrackName from './TrackName';

export default class Track extends React.Component {

    state = {
        isTrackReady: false
    };

    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
        this.audioRef = React.createRef();
        this.togglePlay = this.togglePlay.bind(this);
    }

    componentDidUpdate() {
        if (!this.props.isPlaying) {
            this.audioRef.current.pause();
        } else if (this.props.isPlaying) {
            this.audioRef.current.play();
        }
    }

    componentDidMount() {
        this.peaksInit();
    }

    peaksInit() {
        this.peaks = Peaks.init({
            container: this.containerRef.current,
            mediaElement: this.audioRef.current,
            webAudio: {
                audioContext: new AudioContext(),
            },
            zoomWaveformColor: 'rgba(0, 225, 128, 1)',
            overviewWaveformColor: 'rgba(0,0,0,0.2)',
            overviewHighlightRectangleColor: 'green',
            height: 100,
        },
            () => this.setState({ ...this.state, isTrackReady: true })
        );

        this.peaks.zoom.setZoom(0);
    }

    togglePlay() {
        if (!this.props.isPlaying) {
            this.props.onPlay(this.props.id);
        } else {
            this.props.onStop();
        }
    }

    render() {
        const invisibleCssClass = !this.state.isTrackReady ? 'track--invisible' : '';
        return (
            <div className={`track track--dark ${invisibleCssClass}`}>
                <TrackName name={this.props.name}></TrackName>
                <PlayButton onTogglePlay={this.togglePlay} isPlaying={this.props.isPlaying}>Play</PlayButton>
                <div ref={this.containerRef} className="track__waveform">Loading...</div>
                <audio ref={this.audioRef}>
                    <source src={this.props.source} type='audio/mpeg; codecs="mp3"'></source>
                </audio>
            </div>
        )
    }

}