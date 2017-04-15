import React, { Component } from 'react';
import { Image, Navigator, View } from 'react-native';
import { Body, Button, Container, Content, Header, Left, Text, Icon, Right, Title } from 'native-base';

import AdminData from './../../data/AdminData';
import { exitApp } from '../../Util';

let admin;

export default class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    componentWillMount(){
        admin = new AdminData();
    }

    pushScreen(route){
        this.props.navigator.push({
            name: route,
            admin: admin,
            newQuiz: true
        });
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Text/>
                    </Left>
                    <Body>
                        <View>
                            <Title>Menu Principal</Title>
                        </View>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Text>Sair</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <View style={styles.viewImageContent}>
                        <Image style={styles.imageContent} source={require('./../../img/ipea_survey.png')} />
                    </View>
                    <Button full style={styles.buttonContent} onPress={() => {this.pushScreen('new')}}>
                        <Icon name='md-document' />
                        <Text style={styles.textButtonContent}>Novo</Text>
                    </Button>

                    <Button full style={styles.buttonContent} onPress={() => {this.pushScreen('edit')}}>
                        <Icon name='md-create' />
                        <Text style={styles.textButtonContent}>Editar</Text>
                    </Button>

                    <Button full style={styles.buttonContent} onPress={() => {this.pushScreen('config')}}>
                        <Icon name='md-settings' />
                        <Text style={styles.textButtonContent}>Configuração</Text>
                    </Button>

                    <Button full style={styles.buttonContent} onPress={exitApp}>
                        <Icon name='md-exit' />
                        <Text style={styles.textButtonContent}>Sair</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}

const styles = {
    header: {
        backgroundColor: '#005376'
    },
    container: {
        backgroundColor: '#ffffff',
    },
    viewImageContent: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageContent: {
    },
    buttonContent: {
        backgroundColor: '#005376',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        height: 60,
    },
    textButtonContent: {
        paddingLeft: 10,
        fontSize: 14,
    },
};
