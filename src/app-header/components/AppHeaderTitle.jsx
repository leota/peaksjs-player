import React from 'react';
import './AppHeaderTitle.css';

class AppHeaderTitle extends React.Component {
    render() {
        return <h1 className="header-title header-title--white">{this.props.title}</h1>
    }
}

export default AppHeaderTitle;