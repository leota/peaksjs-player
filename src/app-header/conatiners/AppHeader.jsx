import React from 'react';
import './AppHeader.css';

import logo from './logo.svg';
import AppHeaderTitle from '../components/AppHeaderTitle';
import AppHeaderLogo from '../components/AppHeaderLogo';


class AppHeader extends React.Component {
    render() {
        return <header className="header header--dark">
            <AppHeaderLogo logo={logo}></AppHeaderLogo>
            <AppHeaderTitle title={this.props.title}></AppHeaderTitle>
        </header>
    }
}

export default AppHeader;