import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container, Content, Header, Icon, Text, Title } from 'native-base';

import { exitApp } from '../Util';

export default class Edit extends Component {
    render() {
        var model = this.props.model;

        return (
            <Container style={styles.container}>
                <Header>
                    <Button transparent onPress={() => { this.props.navigator.pop(); }}>
                        <Icon name='ios-arrow-back' />
                    </Button>

                    <Title>Configuração</Title>

                    <Button transparent onPress={exitApp}>
                        <Icon name='ios-close' />
                    </Button>
                </Header>
                <Content>
                    <Text style={styles.text}>Edit</Text>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
});
