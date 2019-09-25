import React from 'react';
import './AppHeader.css';

import AppHeaderTitle from '../components/AppHeaderTitle';
import AppHeaderLogo from '../components/AppHeaderLogo';


export default class AppHeader extends React.Component {
    render() {
        return <header className="header header--dark">
            <AppHeaderLogo logo={this.props.logo}></AppHeaderLogo>
            <AppHeaderTitle title={this.props.title}></AppHeaderTitle>
        </header>
    }
}