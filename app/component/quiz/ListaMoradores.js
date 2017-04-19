import React, { Component } from 'react';
import { View } from 'react-native';
import { Body, Button, Container, Content, Header, Left, Text, Icon, Title } from 'native-base';

import AdminData from './../../data/AdminData';
import QuizData from './../../data/QuizData';
import { styles } from './../../Styles';

export default class ListaMoradores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            admin: this.props.admin,
            quiz: this.props.quiz
        };
    }

    componentWillMount(){
        if(this.state.quiz === null){
            let id = new Date().getTime();
            this.state.admin = new AdminData(id);
            this.state.quiz = new QuizData(id);
        }else{
            this.state.admin = AdminData.object(this.props.admin);
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
            admin: this.state.admin,
            quiz: this.state.quiz
        });
    }

    voltar(){
        /*
         *  ====================================================================================================
         *  TODO: Adicionar popup informando se deseja cancelar ou não o questionário
         *  ====================================================================================================
         */
        this.popScreen();
    }

    checkCompleto(segment){

    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => {this.voltar()}}>
                            <Icon name='ios-arrow-back' />
                        </Button>
                    </Left>
                    <Body style={styles.bodyHeader}>
                        <View>
                            <Title>Lista de Moradores</Title>
                        </View>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.viewContentQuestionario}>
                        <Text style={styles.texLabeltViewContent}>Lista de moradores do domicílio</Text>
                    </View>

                    <Button full style={this.checkCompleto('identificacao')} onPress={() => {this.pushScreen('identificacao')}}>
                        <Icon name='md-finger-print' />
                        <Text style={styles.textButtonContent}>Identificação</Text>
                    </Button>

                    <Button full style={this.checkCompleto('domicilio')} onPress={() => {this.pushScreen('domicilio')}}>
                        <Icon name='md-home' />
                        <Text style={styles.textButtonContent}>Domicílio</Text>
                    </Button>

                    <Button full style={this.checkCompleto('morador')} onPress={() => {this.pushScreen('morador')}}>
                        <Icon name='md-contacts' />
                        <Text style={styles.textButtonContent}>Moradores</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
