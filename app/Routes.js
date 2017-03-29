import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Config from './config/Config';
import Edit from './edit/Edit';
import Main from './main/Main';
import Quiz from './quiz/Quiz';

import { model } from './Model';

export default class Routes extends Component {
    renderScene (route, navigator) {
        switch (route.name) {
            case 'main':
                return <Main navigator={navigator} model={model} />
                break;

            case 'quiz':
                return <Quiz navigator={navigator} model={model} />
                break;

            case 'edit':
                return <Edit navigator={navigator} model={model} />
                break;

            case 'config':
                return <Config navigator={navigator} model={model} />
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

Routes.propTypes = {
    route: React.PropTypes.func.isRequired,
    route: React.PropTypes.string
};
