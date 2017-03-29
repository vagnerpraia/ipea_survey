import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Routes from './app/Routes';

export default class IpeaSurvey extends Component {
    render() {
        return (
            <Routes />
        );
    }
}

AppRegistry.registerComponent('IpeaSurvey', () => IpeaSurvey);
