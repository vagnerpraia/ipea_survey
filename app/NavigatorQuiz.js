import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Question1 from './quiz/questions/Question1';
import Question2 from './quiz/questions/Question2';
import Question3 from './quiz/questions/Question3';

export default class NavigatorApp extends Component {
    renderScene (route, navigator) {
        switch (route.name) {
            case 'question1':
                return <Question1 navigator={navigator} />
                break;

            case 'question1':
                return <Question2 navigator={navigator} />
                break;

            case 'question3':
                return <Question3 navigator={navigator} />
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
