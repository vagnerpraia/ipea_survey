import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container, Content, Header, Icon, Text, Title } from 'native-base';

import HeaderApp from '../HeaderApp';
import { exitApp } from '../Util';

export default class Config extends Component {
    render() {
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
                    <Text style={styles.text}>Config 1</Text>
                    <Text style={styles.text}>Config 2</Text>
                    <Text style={styles.text}>Config 3</Text>
                    <Text style={styles.text}>Config 4</Text>
                    <Text style={styles.text}>Config 5</Text>
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
