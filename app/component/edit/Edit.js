import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Body, Button, Container, Content, Header, Left, List, ListItem, Icon, Right, Text, Title } from 'native-base';

import { styles } from './../../Styles';
import { exitApp } from '../../Util';

export default class Edit extends Component {
    render() {
        var model = this.props.model;

        var quizList = [
            {
                'id': '123456789',
                'data': '25/01/2017',
                'entrevistado': 'João da Silva',
                'endereco': 'Rua Paulo Martins'
            },
            {
                'id': '123456789',
                'data': '25/01/2017',
                'entrevistado': 'João da Silva',
                'endereco': 'Rua Paulo Martins'
            },
            {
                'id': '123456789',
                'data': '25/01/2017',
                'entrevistado': 'João da Silva',
                'endereco': 'Rua Paulo Martins'
            },
            {
                'id': '123456789',
                'data': '25/01/2017',
                'entrevistado': 'João da Silva',
                'endereco': 'Rua Paulo Martins'
            },
            {
                'id': '123456789',
                'data': '25/01/2017',
                'entrevistado': 'João da Silva',
                'endereco': 'Rua Paulo Martins'
            },
            {
                'id': '123456789',
                'data': '25/01/2017',
                'entrevistado': 'João da Silva',
                'endereco': 'Rua Paulo Martins'
            },
        ];

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
                    <List dataArray={quizList}
                        renderRow={(item) =>
                            <ListItem>
                                <Body>
                                    <Text>{item.id}</Text>
                                    <Text note>Data: {item.data}</Text>
                                    <Text note>Entrevistado: {item.entrevistado}</Text>
                                    <Text note>Endereço: {item.endereco}</Text>
                                </Body>
                                <Right>
                                    <Button dark transparent onPress={() => {}}>
                                        <Icon name='md-trash' />
                                    </Button>
                                </Right>
                            </ListItem>
                        }>
                    </List>
                </Content>
            </Container>
        );
    }
}
