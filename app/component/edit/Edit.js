import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, Button, Container, Content, Header, Left, List, ListItem, Icon, Right, Text, Title } from 'native-base';

import FileStore from './../../FileStore';
import { styles } from './../../Styles';
import { exitApp } from '../../Util';

export default class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quizList: new Array(),
        }
    }

    componentWillMount(){
        FileStore.getQuizList((result) => {
            this.state.quizList = result;
            this.forceUpdate();
        });
    }

    render() {
        var model = this.props.model;

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
                            <Title>Configuração</Title>
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
                                    <Text>{object}</Text>
                                </Body>
                                <Right>
                                    <Button dark transparent onPress={() => {}}>
                                        <Icon name='md-trash' />
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
