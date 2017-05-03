import React, { Component } from 'react';
import { View } from 'react-native';
import { Body, Button, Container, Content, Header, Left, List, ListItem, Text, Icon, Title } from 'native-base';

import FileStore from './../../FileStore';
import AdminData from './../../data/AdminData';
import QuizData from './../../data/QuizData';
import { styles } from './../../Styles';

export default class ListaMoradores extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            admin: this.props.admin,
            quiz: this.props.quiz,
            moradoresList: new Array()
        };
    }

    componentWillMount(){
        FileStore.getMoradoresList(this.state.id, (result) => {
            this.state.moradoresList = result;
            this.forceUpdate();
        });
    }

    popScreen(){
        this.props.navigator.replacePreviousAndPop({
            name: 'home'
        });
    }

    pushScreen(){
        this.props.navigator.push({
            name: 'morador',
            admin: this.state.admin,
            quiz: this.state.quiz
        });
    }

    render() {
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
                    <View style={styles.viewAddMorador}>
                        <Button style={styles.buttonAddMorador} onPress={() => {this.pushScreen()}}>
                            <Icon style={{fontSize: 30}} name='md-add' />
                            <Text style={{fontSize: 20}}>Adicionar Morador</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        );
    }
}
