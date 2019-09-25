import React from 'react';
import './AppHeaderLogo.css';

export default class AppHeaderLogo extends React.Component {

    render() {
        return (
            <img src={this.props.logo} className="app-logo" alt="logo" />
        )
    }

}