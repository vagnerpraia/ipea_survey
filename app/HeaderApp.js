import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Button, Header, Icon, Right, Title } from 'native-base';

import { exitApp } from './Util';

export default class HeaderApp extends Component {
    render() {
        return (
            <Header>
                <Button transparent onPress={() => { this.props.navigator.pop(); }}>
                    <Icon name='ios-arrow-back' />
                </Button>

                <Title>Ipea Survey</Title>

                <Button transparent onPress={exitApp}>
                    <Icon name='ios-close' />
                </Button>
            </Header>
        );
    }
}
