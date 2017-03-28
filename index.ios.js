import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import NavigatorApp from './app/NavigatorApp';

export default class IpeaSurvey extends Component {
    render() {
        return (
            <NavigatorApp />
        );
    }
}

AppRegistry.registerComponent('IpeaSurvey', () => IpeaSurvey);
