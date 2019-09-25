import React from 'react';
import './AppHeaderTitle.css';

export default class AppHeaderTitle extends React.Component {
    render() {
        return <h1 className="header-title header-title--white">{this.props.title}</h1>
    }
}