import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Main from './component/main/Main';
import Quiz from './component/quiz/Quiz';
import Identificacao from './component/quiz/Identificacao';
import Domicilio from './component/quiz/Domicilio';
import ListaMoradores from './component/quiz/ListaMoradores';
import Morador from './component/quiz/Morador';
import Config from './component/config/Config';
import Edit from './component/edit/Edit';

export default class Routes extends Component {
    renderScene (route, navigator) {
        switch (route.name) {
            case 'home':
                return <Main navigator={navigator} />
                break;

            case 'quiz':
                return <Quiz navigator={navigator} admin={route.admin} quiz={route.quiz} />
                break;

            case 'identificacao':
                return <Identificacao navigator={navigator} admin={route.admin} quiz={route.quiz} />
                break;

            case 'domicilio':
                return <Domicilio navigator={navigator} admin={route.admin} quiz={route.quiz} />
                break;

            case 'lista_moradores':
                return <ListaMoradores navigator={navigator} admin={route.admin} quiz={route.quiz} />
                break;

            case 'morador':
                return <Morador navigator={navigator} admin={route.admin} quiz={route.quiz} />
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
