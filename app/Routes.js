import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Config from './component/config/Config';
import Edit from './component/edit/Edit';
import Main from './component/main/Main';
import Quiz from './component/quiz/Quiz';

export default class Routes extends Component {
    renderScene (route, navigator) {
        switch (route.name) {
            case 'main':
                return <Main navigator={navigator} />
                break;

            case 'quiz':
                return <Quiz navigator={navigator} admin={route.admin} quiz={route.quiz} newQuiz={route.newQuiz} />
                break;

            case 'config':
                return <Config navigator={navigator} />
                break;

            default:
                return <Main navigator={navigator} />
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
