import React, { Component } from 'react';
import { PanResponder, StyleSheet, TextInput, ToastAndroid, View } from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Text, Title } from 'native-base';
import SideMenu from 'react-native-side-menu';

import SideMenuDomicilio from './SideMenuDomicilio';
import ReplyInputCurrency from './reply/ReplyInputCurrency';
import ReplyInputNumeric from './reply/ReplyInputNumeric';
import ReplyMultiSelect from './reply/ReplyMultiSelect';
import ReplyRadio from './reply/ReplyRadio';
import ReplyText from './reply/ReplyText';
import ReplyTime from './reply/ReplyTime';

import { passQuestion } from './business/PassQuestionDomicilio';

import FileStore from './../../FileStore';
import DomicilioData from './../../data/DomicilioData';
import { questoes } from './../../data/QuestoesDomicilio';
import { styles } from './../../Styles';

var type = (function(global) {
    var cache = {};
    return function(obj) {
        var key;
        return obj === null ? 'null'
            : obj === global ? 'global'
            : (key = typeof obj) !== 'object' ? key
            : obj.nodeType ? 'object'
            : cache[key = ({}).toString.call(obj)]
            || (cache[key] = key.slice(8, -1).toLowerCase());
    };
}(this));

export default class Domicilio extends Component {
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

        let questao = questoes[this.state.admin.indexPage].id.replace(/\D/g,'');
        for(key in passQuestion){
            if(questao == passQuestion[key].questao){
                //this.state.admin.maxQuestion = passQuestion[key].passe;
                for (i = questao + 1; i < passQuestion[key].passe; i++) {
                    for(key in this.state.quiz){
                        if(key.replace(/\D/g,'') == i){
                            this.state.quiz[key] = -1;
                        }
                    }
                }
                break;
            }
        }

        idQuestao = 'questao_' + questoes[this.state.admin.indexPage].id;
        numeroQuestao = questoes[this.state.admin.indexPage].id.replace(/\D/g,'');
    }

    popQuizScreen(){
        if(this.state.admin.indexPage === 0 && this.state.quiz['questao_1'] === null){
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

    pushScreen(){
        let flagResponse = true;
        if(type(this.state.quiz.domicilio[idQuestao]) == 'array'){
            if(this.state.quiz.domicilio[idQuestao].length == 0){
                flagResponse = false;
            }
        }else{
            if(this.state.quiz.domicilio[idQuestao] == null){
                flagResponse = false;
            }
        }

        if(flagResponse || Number(numeroQuestao) + 1 <= this.state.admin.maxQuestion){
            if(Number(numeroQuestao) + 1 <= this.state.admin.maxQuestion){
                this.state.admin.indexPage = Number(this.state.admin.indexPage) + 1;

                FileStore.saveFileDomicilio(this.state.quiz.domicilio);
                if(this.state.admin.indexPage >= questoes.length){
                    ToastAndroid.showWithGravity('Questionário Finalizado\nNão há como avançar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
                }else{
                    this.props.navigator.push({
                        name: 'domicilio',
                        admin: this.state.admin,
                        quiz: this.state.quiz
                    });
                }
            }else{
                ToastAndroid.showWithGravity('Responda a questão ' + numeroQuestao, ToastAndroid.SHORT, ToastAndroid.CENTER);
            }
        }else{
            ToastAndroid.showWithGravity('Responda a questão', ToastAndroid.SHORT, ToastAndroid.CENTER);
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
        let questao = questoes[admin.indexPage];
        let pergunta_extensao = questao.pergunta_extensao;

        const menu = <SideMenuDomicilio admin={admin} quiz={quiz} navigator={this.props.navigator} />;

        function renderIf(condition, contentIf, contentElse = null) {
            if (condition) {
                return contentIf;
            } else {
                return contentElse;
            }
        }

        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => {this.popQuizScreen()}}>
                            <Icon name='ios-arrow-back' />
                        </Button>
                    </Left>

                    <Body style={styles.bodyHeader}>
                        <Title>{questao.titulo}</Title>
                    </Body>

                    <Right>
                        <Button transparent onPress={() => {this.updateMenuState()}}>
                            <Text></Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Card>
                        <CardItem style={styles.cardItemQuestao}>
                            <Text style={styles.questao}>{questao.id.replace(/\D/g,'') + '. ' + questao.pergunta}</Text>
                            <Text style={styles.observacaoQuestao}>{questao.observacao_pergunta}</Text>
                        </CardItem>

                        {renderIf(questao.pergunta_secundaria !== '',
                            <CardItem style={styles.pergunta_secundaria}>
                                <Text style={styles.questao_secundaria}>{questao.id.replace(/[0-9]/g, '').toUpperCase() + ') ' + questao.pergunta_secundaria.pergunta}</Text>
                                <Text note>{questao.pergunta_secundaria.observacao_pergunta}</Text>
                            </CardItem>
                        )}

                        <CardItem cardBody style={{justifyContent: 'center'}}>
                            {renderIf(questao.tipo === 'input_currency',
                                <ReplyInputCurrency admin={admin} quiz={quiz.domicilio} questao={questao} passQuestion={passQuestion} />
                            )}

                            {renderIf(questao.tipo === 'input_numeric',
                                <ReplyInputNumeric admin={admin} quiz={quiz.domicilio} questao={questao} passQuestion={passQuestion} />
                            )}

                            {renderIf(questao.tipo === 'multiple',
                                <ReplyMultiSelect admin={admin} quiz={quiz.domicilio} questao={questao} passQuestion={passQuestion} />
                            )}

                            {renderIf(questao.tipo === 'radio',
                                <ReplyRadio admin={admin} quiz={quiz.domicilio} questao={questao} passQuestion={passQuestion} />
                            )}

                            {renderIf(questao.tipo === 'text',
                                <ReplyText admin={admin} quiz={quiz.domicilio} questao={questao} passQuestion={passQuestion} />
                            )}

                            {renderIf(questao.tipo === 'input_time',
                                <ReplyTime admin={admin} quiz={quiz.domicilio} questao={questao} passQuestion={passQuestion} />
                            )}
                        </CardItem>

                        {renderIf(pergunta_extensao != '',
                            <CardItem>
                                <Text style={styles.observacaoQuestao}>{pergunta_extensao.pergunta}</Text>
                                <TextInput
                                    style={{width: 500, fontSize: 20}}
                                    keyboardType = 'default'
                                    onChangeText = {(value) => {
                                        if(quiz.domicilio[idQuestao] != null){
                                            if(quiz.domicilio[idQuestao] == pergunta_extensao.referencia){
                                                quiz.domicilio[idQuestao + '_secundaria'] = value;
                                            }else if(quiz.domicilio[idQuestao].indexOf(Number(pergunta_extensao.referencia)) > -1){
                                                quiz.domicilio[idQuestao + '_secundaria'] = value;
                                            }
                                        }
                                    }}
                                    defaultValue = {quiz.domicilio[idQuestao + '_secundaria']}
                                    maxLength = {500}
                                />
                            </CardItem>
                        )}
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button style={{backgroundColor: '#005376'}} onPress={() => {this.popScreen()}}>
                            <Icon name='ios-arrow-back' />
                        </Button>
                        <Button style={{backgroundColor: '#005376'}} onPress={() => {this.pushScreen()}}>
                            <Icon name='ios-arrow-forward' />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}
