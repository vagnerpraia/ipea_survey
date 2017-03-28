import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Main from './main/Main';
import Quiz from './quiz/Quiz';

import { model } from './ModelApp';

export default class NavigatorApp extends Component {
    renderScene (route, navigator) {
        switch (route.name) {
            case 'main':
                return <Main navigator={navigator} model={model} />
                break;

            case 'quiz':
                return <Quiz navigator={navigator} model={model} />
                break;

            case 'config':
                console.log('TESTE');
                return <Quiz navigator={navigator} model={model} />
                break;

            default:
                return <Main navigator={navigator} model={model} />
                break;
        }
    }

    render () {
        return (
            <Navigator
                initialRoute={{name: 'main'}}
                renderScene={this.renderScene}
            />
        );
    }
}

NavigatorApp.propTypes = {
    route: React.PropTypes.func.isRequired,
    route: React.PropTypes.string
};
