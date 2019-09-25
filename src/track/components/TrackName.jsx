import React from 'react';
import './TrackName.css';

export default class TrackName extends React.Component {
    render() {
        return (
            <h3 className="name">{this.props.name}</h3>
        )
    }
}