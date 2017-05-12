import React, { Component } from 'react';
import { View } from 'react-native';
import { Body, Button, Container, Content, Header, Left, List, ListItem, Right, Text, Icon, Title } from 'native-base';

import FileStore from './../../FileStore';
import AdminData from './../../data/AdminData';
import QuizData from './../../data/QuizData';
import { styles } from './../../Styles';

export default class ListaMoradores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            admin: this.props.admin,
            quiz: this.props.quiz,
            moradoresList: new Array()
        };
    }

    componentWillMount(){
        FileStore.getMoradoresList(this.state.admin.id, (result) => {
            if(result){
                this.state.moradoresList = result;
                this.forceUpdate();
            }
        });

        this.state.admin = new AdminData(this.state.admin.id);
    }

    popScreen(){
        this.props.navigator.replacePreviousAndPop({
            name: 'quiz',
            admin: this.state.admin,
            quiz: this.state.quiz,
            isOpen: false
        });
    }

    addMorador(){
        this.props.navigator.push({
            id: null,
            name: 'morador',
            admin: this.state.admin,
            quiz: this.state.quiz
        });
    }

    render() {
        let admin = this.state.admin;
        let quiz = this.state.quiz;
        let navigator = this.props.navigator;

        function openMorador(id){
            navigator.push({
                id: id,
                name: 'morador',
                admin: admin,
                quiz: quiz
            });
        }

        function deleteMorador(id){
            for(key in quiz.moradores){
                if(quiz.moradores[key].id === id){
                    quiz.moradores.splice(key, 1);
                }
            }
            FileStore.saveFileMoradores(admin.id, quiz.moradores);
            navigator.replacePreviousAndPop({
                name: 'lista_moradores',
                admin: admin,
                quiz: quiz,
                isOpen: false
            });
        }

        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => {this.popScreen()}}>
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
                        <Text style={styles.texLabeltViewContent}>Lista de moradores do domicilio</Text>
                    </View>
                    {this.state.moradoresList.map(function(object, i){
                        return(
                            <ListItem key={i}>
                                <Body>
                                    <Text onPress={() => {openMorador(object.id)}}>
                                        {object.id}
                                    </Text>
                                </Body>
                                <Right>
                                    <Button dark transparent onPress={() => {deleteMorador(object.id)}}>
                                        <Icon name='md-trash' />
                                    </Button>
                                </Right>
                            </ListItem>
                        );
                    })}
                    <View style={styles.viewAddMorador}>
                        <Button style={styles.buttonAddMorador} onPress={() => {this.addMorador()}}>
                            <Icon style={{fontSize: 30}} name='md-add' />
                            <Text style={{fontSize: 20}}>Adicionar Morador</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
