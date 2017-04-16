import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Body, Button, Container, Content, Header, Left, Text, Icon, Right, Title } from 'native-base';

import AdminData from './../../data/AdminData';
import FileStore from './../../FileStore';
import { styles } from './../../Styles';
import { exitApp } from '../../Util';

let id;
let admin;

export default class Quiz extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount(){
        admin = new AdminData();

        if(this.props.id == null){
            id = new Date().getTime();
        }else{
            id = this.props.id;
        }
    }

    popScreen(){
        this.props.navigator.replacePreviousAndPop({
            name: 'home'
        });
    }

    pushScreen(route){
        this.props.navigator.push({
            name: route,
            admin: admin
        });
    }

    voltar(){
        this.popScreen();
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => {this.voltar()}}>
                            <Text>Voltar</Text>
                        </Button>
                    </Left>
                    <Body style={styles.bodyHeader}>
                        <View>
                            <Title>Questionário</Title>
                        </View>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.viewContentQuestionario}>
                        <Text style={styles.texLabeltViewContent}>Número do questionário:</Text>
                        <Text style={styles.textContentViewContent}>{id}</Text>
                    </View>
                    <Button full style={styles.buttonContent} onPress={() => {this.pushScreen('new')}}>
                        <Icon name='md-finger-print' />
                        <Text style={styles.textButtonContent}>Identificação</Text>
                    </Button>

                    <Button full style={styles.buttonContent} onPress={() => {this.pushScreen('edit')}}>
                        <Icon name='md-home' />
                        <Text style={styles.textButtonContent}>Domicílio</Text>
                    </Button>

                    <Button full style={styles.buttonContent} onPress={() => {this.pushScreen('config')}}>
                        <Icon name='md-contacts' />
                        <Text style={styles.textButtonContent}>Moradores</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
