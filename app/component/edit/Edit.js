import React, { Component } from 'react';
import { View } from 'react-native';
import { Body, Button, Container, Content, Header, Left, List, ListItem, Icon, Right, Text, Title } from 'native-base';

import FileStore from './../../FileStore';
import AdminData from './../../data/AdminData';
import { styles } from './../../Styles';
import { exitApp } from '../../Util';

export default class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quizList: new Array()
        }
    }

    componentWillMount(){
        FileStore.getQuizList((result) => {
            this.state.quizList = result;
            this.forceUpdate();
        });
    }

    popScreen(){
        this.props.navigator.replacePreviousAndPop({
            name: 'home'
        });
    }

    render() {
        let navigator = this.props.navigator;

        function openMorador(id){
            navigator.push({
                name: 'quiz',
                admin: new AdminData(id)
            });
        }

        function deleteMorador(id){
            FileStore.deleteQuiz(id);
            navigator.replacePreviousAndPop({
                name: 'edit'
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
                            <Title>Editar</Title>
                        </View>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.viewContentQuestionario}>
                        <Text style={styles.texLabeltViewContent}>Lista de quiz</Text>
                    </View>
                    {this.state.quizList.map(function(object, i){
                        return(
                            <ListItem key={i}>
                                <Body>
                                    <Text style={{fontSize: 20}} onPress={() => {openMorador(object)}}>
                                        {object}
                                    </Text>
                                </Body>
                                <Right>
                                    <Button dark transparent onPress={() => {deleteMorador(object)}}>
                                        <Icon style={{fontSize: 35}} name='md-trash' />
                                    </Button>
                                </Right>
                            </ListItem>
                        );
                    })}
                </Content>
            </Container>
        );
    }
}
