import React, { Component } from 'react';
import { PanResponder, StyleSheet, ToastAndroid, View } from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Text, Title } from 'native-base';
import SideMenu from 'react-native-side-menu';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

import SideMenuQuiz from './SideMenuQuiz';

import FileStore from './../../FileStore';
import DomicilioData from './../../data/DomicilioData';
import { styles } from './../../Styles';

export default class DomicilioFim extends Component {
    constructor(props) {
        super(props);

        this.state = {
            admin: this.props.admin,
            quiz: this.props.quiz
        };
    }

    componentWillMount(){
        if(this.state.quiz.domicilio === null){
            this.state.quiz.domicilio = new DomicilioData(this.state.admin.id);
        }

        FileStore.saveFileDomicilio(this.state.quiz.domicilio);
    }

    popQuizScreen(){
        if(this.state.admin.indexPage === 0){
            this.state.quiz.domicilio = null;
            FileStore.deleteDomicilio(this.state.admin.id);
        };
        this.props.navigator.replacePreviousAndPop({
            name: 'quiz',
            admin: this.state.admin,
            quiz: this.state.quiz,
            isOpen: false
        });
    }

    popScreen(){
        if(this.state.admin.indexPage > 0){
            this.state.admin.indexPage = Number(this.state.admin.indexPage) - 1;
            this.props.navigator.replacePreviousAndPop({
                name: 'domicilio',
                admin: this.state.admin,
                quiz: this.state.quiz
            });
        }else{
            ToastAndroid.showWithGravity('Não há como voltar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
    }

    updateMenuState() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    setMenuState(isOpen) {
        this.setState({
            isOpen: isOpen
        });
    }

    render() {
        let isOpen = this.state.isOpen;
        let admin = this.state.admin;
        let quiz = this.state.quiz;

        admin.domicilioCompleto = true;

        const menu = <SideMenuQuiz admin={admin} quiz={quiz} navigator={this.props.navigator} />;

        return (
            <SideMenu menu={menu} menuPosition={'right'} isOpen={isOpen} onChange={(isOpen) => {this.setMenuState(isOpen)}}>
                <Container style={styles.container}>
                    <Header style={styles.header}>
                        <Left>
                            <Button transparent onPress={() => {this.popQuizScreen()}}>
                                <Icon name='ios-arrow-back' />
                            </Button>
                        </Left>

                        <Body style={styles.bodyHeader}>
                            <Title>Questionário Finalizado</Title>
                        </Body>

                        <Right>
                            <Button transparent onPress={() => {this.updateMenuState()}}>
                                <Icon name='ios-menu' />
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <Card style={{flex: 1, flexDirection:'column', justifyContent: 'center', alignItems: 'center', paddingTop: 50}}>
                            <View>
                                <Text style={{fontSize: 30}}>Questionário Finalizado</Text>
                            </View>
                            <View style={{paddingTop: 50, paddingBottom: 50}}>
                                <Button style={{width: 100, backgroundColor: '#005376', justifyContent: 'center'}} onPress={() => {this.popQuizScreen()}}>
                                    <Text style={{fontSize: 20}}>Voltar</Text>
                                </Button>
                            </View>
                        </Card>
                    </Content>
                    <Footer style={styles.footer}>
                        <FooterTab>
                            <Button onPress={() => {this.popScreen()}}>
                                <Icon name='ios-arrow-back' />
                            </Button>
                            <Button onPress={() => {this.pushScreen()}}>
                                <Icon name='ios-arrow-forward' />
                            </Button>
                        </FooterTab>
                    </Footer>
                </Container>
            </SideMenu>
        );
    }
}
