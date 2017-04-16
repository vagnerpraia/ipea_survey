import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Body, Button, Container, Content, Header, Left, Text, Icon, Title } from 'native-base';

import AdminData from './../../data/AdminData';
import { styles } from './../../Styles';
import { exitApp } from '../../Util';

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    pushScreen(route){
        this.props.navigator.push({
            name: route
        });
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Text/>
                    </Left>
                    <Body style={styles.bodyHeader}>
                        <View>
                            <Title>Menu Principal</Title>
                        </View>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.viewContentMenuPrincipal}>
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
