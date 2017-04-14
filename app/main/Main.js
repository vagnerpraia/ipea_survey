import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';
import { Button, Container, Content, Header, List, ListItem, Text, Icon, Title } from 'native-base';

import AppStore from './../store/AppStore';
import { exitApp } from '../Util';

import AdminData from './../data/AdminData';

let admin;

export default class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false,
        };
    }

    componentWillMount(){
        admin = new AdminData();
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Button transparent>
                        <Text />
                    </Button>

                    <Title>Ipea Survey</Title>

                    <Button transparent onPress={exitApp}>
                        <Icon name='ios-close' />
                    </Button>
                </Header>
                <Content>
                    <List>
                        <ListItem iconLeft onPress={() => {
                            this.props.navigator.push({
                                name: 'quiz',
                                admin: admin,
                                newQuiz: true
                            });
                        }}>
                            <Icon name='md-document' style={styles.icon} />
                            <Text style={styles.text}>Novo</Text>
                            <Text note style={styles.note}>Abrir novo questionário</Text>
                        </ListItem>

                        <ListItem iconLeft onPress={() => {
                            this.props.navigator.push({
                                name: 'quiz',
                                admin: admin,
                                newQuiz: false
                            });
                        }}>
                            <Icon name='md-create' style={styles.icon} />
                            <Text style={styles.text}>Editar</Text>
                            <Text note style={styles.note}>Editar questionário</Text>
                        </ListItem>

                        <ListItem iconLeft onPress={() => {
                            this.props.navigator.push({
                                name: 'config'
                            });
                        }}>
                            <Icon name='md-settings' style={styles.icon} />
                            <Text style={styles.text}>Configurações</Text>
                            <Text note style={styles.note}>Configurações do aplicativo</Text>
                        </ListItem>

                        <ListItem iconLeft>
                            <Icon name='md-stats' style={styles.icon} />
                            <Text style={styles.text}>Estatísticas</Text>
                            <Text note style={styles.note}>Estatística dos questionários</Text>
                        </ListItem>

                        <ListItem iconLeft>
                            <Icon name='md-help-circle' style={styles.icon} />
                            <Text style={styles.text}>Instruções</Text>
                            <Text note style={styles.note}>Instruções sobre o questionário</Text>
                        </ListItem>

                        <ListItem iconLeft>
                            <Icon name='md-information-circle' style={styles.icon} />
                            <Text style={styles.text}>Sobre</Text>
                            <Text note style={styles.note}>Informações sobre o aplicativo</Text>
                        </ListItem>

                        <ListItem iconLeft onPress={exitApp}>
                            <Icon name='md-exit' style={styles.icon} />
                            <Text style={styles.text}>Sair</Text>
                            <Text note style={styles.note}>Sair do aplicativo</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
    button_footer: {
        fontSize: 20
    }
});
