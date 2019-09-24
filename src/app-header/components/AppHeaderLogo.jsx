import React from 'react';
import './AppHeaderLogo.css';

class AppHeaderLogo extends React.Component {
    render() {
        return <img src={this.props.logo} className="app-logo" alt="logo" />
    }
}

export default AppHeaderLogo;