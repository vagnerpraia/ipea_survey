import React, { Component } from 'react';
import { Navigator } from 'react-native';
import { Header, Button, Icon, Title } from 'native-base';

import { exitApp } from './util/Util';

export default class HeaderApp extends Component {
    render() {
        console.log(this.props);
        if(this.props.navigator != null){
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
}
