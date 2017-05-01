import React, { Component } from 'react';
import { View } from 'react-native';
import { Body, Button, Container, Content, Header, Left, Text, Icon, Title } from 'native-base';

import AdminData from './../../data/AdminData';
import QuizData from './../../data/QuizData';
import { styles } from './../../Styles';

export default class Quiz extends Component {
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
        let result = styles.buttonIncompleto;
        if(segment == 'identificacao'){
            if(this.state.admin.identificacaoCompleto) result = styles.buttonCompleto;
        }else if(segment == 'domicilio'){
            if(this.state.admin.domicilioCompleto) result = styles.buttonCompleto;
        }else if(segment == 'morador'){
            if(this.state.admin.moradorCompleto) result = styles.buttonCompleto;
        }
        return result;
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
                            <Title>Questionário</Title>
                        </View>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.viewContentQuestionario}>
                        <Text style={styles.texLabeltViewContent}>Número do questionário:</Text>
                        <Text style={styles.textContentViewContent}>{this.state.admin.id}</Text>
                    </View>
                    <Button full style={this.checkCompleto('identificacao')} onPress={() => {this.pushScreen('identificacao')}}>
                        <Icon name='md-finger-print' />
                        <Text style={styles.textButtonContent}>Identificação</Text>
                    </Button>

                    <Button full style={this.checkCompleto('domicilio')} onPress={() => {this.pushScreen('domicilio')}}>
                        <Icon name='md-home' />
                        <Text style={styles.textButtonContent}>Domicílio</Text>
                    </Button>

                    <Button full style={this.checkCompleto('morador')} onPress={() => {this.pushScreen('lista_moradores')}}>
                        <Icon name='md-contacts' />
                        <Text style={styles.textButtonContent}>Moradores</Text>
                    </Button>

                    <View style={{alignItems: 'center', paddingTop: 20, paddingRight: 20}}>
                        <Icon name='md-information-circle' style={{fontSize: 50, color: '#005376'}} />
                    </View>
                </Content>
            </Container>
        );
    }
}
