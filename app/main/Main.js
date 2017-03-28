import React, { Component } from 'react';
import { Navigator, StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge } from 'native-base';

import HeaderApp from '../HeaderApp';
import SideMenuApp from '../SideMenuApp';
import { exitApp } from '../Util';

import Quiz from '../quiz/Quiz';

const SideMenu = require('react-native-side-menu');

export default class Main extends Component {
    render() {
        const menu = <SideMenuApp />;
        var nav = this.props.navigator;

        return (
            <SideMenu menu={menu}>
                <HeaderApp navigator={nav} />
                <Container style={styles.container}>
                    <Content>
                        <List>
                            <ListItem iconLeft onPress={() => {
                                this.props.navigator.push({
                                    name: 'quiz'
                                });
                            }}>
                                <Icon name='md-document' style={styles.icon} />
                                <Text style={styles.text}>Novo</Text>
                                <Text note style={styles.note}>Abrir novo questionário</Text>
                            </ListItem>
                            <ListItem iconLeft onPress={() => {
                                this.props.navigator.push({
                                    name: 'config'
                                });
                            }}>
                                <Icon name='md-create' style={styles.icon} />
                                <Text style={styles.text}>Editar</Text>
                                <Text note style={styles.note}>Editar questionário</Text>
                            </ListItem>
                            <ListItem iconLeft>
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
            </SideMenu>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
});
