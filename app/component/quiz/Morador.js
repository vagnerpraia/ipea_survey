import React, { Component } from 'react';
import { PanResponder, StyleSheet, ToastAndroid, View } from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Text, Title } from 'native-base';
import SideMenu from 'react-native-side-menu';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

import SideMenuQuiz from './SideMenuQuiz';
import ReplyInputNumeric from './reply/ReplyInputNumeric';
import ReplyMultiSelect from './reply/ReplyMultiSelect';
import ReplyRadio from './reply/ReplyRadio';

import FileStore from './../../FileStore';
import MoradorData from './../../data/MoradorData';
import { questoes } from './../../data/QuestoesMorador';
import { styles } from './../../Styles';

export default class Morador extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            admin: this.props.admin,
            quiz: this.props.quiz
        };
    }

    componentWillMount(){
        if(this.state.quiz.moradores === null){
            this.state.quiz.moradores = [new MoradorData(0)];
        }else if(this.state.id === null){
            let id = 0;
            FileStore.getMoradoresList(this.state.quiz.id, function(listFile) {
                listFile.forEach(function(idFile) {
                    if(idFile > id) id = idFile;
                });
            });
            this.state.id = id;
            this.state.quiz.moradores.push(new MoradorData(id));
        }

        FileStore.saveFileMorador(this.state.quiz.id, this.state.id, this.state.quiz.moradores);

        idQuestao = 'questao_' + questoes[this.state.admin.indexPage].id;
        numeroQuestao = questoes[this.state.admin.indexPage].id.replace(/\D/g,'');
    }

    popQuizScreen(){
        if(this.state.admin.indexPage === 0){
            this.state.quiz.moradores = null;
            FileStore.deleteMorador(this.state.quiz.id, this.state.id);
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
                name: 'morador',
                admin: this.state.admin,
                quiz: this.state.quiz
            });
        }else{
            ToastAndroid.showWithGravity('Não há como voltar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
    }

    pushScreen(){
        if(this.state.quiz.moradores[idQuestao] != null){
            if(Number(numeroQuestao) + 1 <= this.state.admin.maxQuestion){
                this.state.admin.indexPage = Number(this.state.admin.indexPage) + 1;

                if(this.state.admin.indexPage >= questoes.length){
                    ToastAndroid.showWithGravity('Questionário Finalizado\nNão há como avançar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
                    FileStore.saveFileMorador(this.state.quiz.id, this.state.id, this.state.quiz.moradores);
                }else{
                    this.props.navigator.push({
                        name: 'morador',
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

        const menu = <SideMenuQuiz admin={admin} quiz={quiz} navigator={this.props.navigator} />;

        function renderIf(condition, contentIf, contentElse = null) {
            if (condition) {
                return contentIf;
            } else {
                return contentElse;
            }
        }

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
                            <Title>{questao.titulo}</Title>
                        </Body>

                        <Right>
                            <Button transparent onPress={() => {this.updateMenuState()}}>
                                <Icon name='ios-menu' />
                            </Button>
                        </Right>
                    </Header>
                    <Content>
                        <Card>
                            {renderIf(questoes.id !== 'id',
                                <CardItem style={styles.cardItemQuestao}>
                                    <Text style={styles.questao}>{questao.id.replace(/\D/g,'') + '. ' + questao.pergunta}</Text>
                                    <Text style={styles.observacaoQuestao}>{questao.observacao_pergunta}</Text>
                                </CardItem>
                            )}

                            {renderIf(questao.pergunta_secundaria !== '',
                                <CardItem style={styles.pergunta_secundaria}>
                                    <Text style={styles.questao_secundaria}>{questao.id.replace(/[0-9]/g, '').toUpperCase() + ') ' + questao.pergunta_secundaria.pergunta}</Text>
                                    <Text note>{questao.pergunta_secundaria.observacao_pergunta}</Text>
                                </CardItem>
                            )}

                            <CardItem cardBody style={{justifyContent: 'center'}}>
                                {renderIf(questao.tipo === 'input_numeric',
                                    <ReplyInputNumeric admin={admin} quiz={quiz} questao={questao} tipo={'moradores'} />
                                )}

                                {renderIf(questao.tipo === 'multiple',
                                    <ReplyMultiSelect admin={admin} quiz={quiz} questao={questao} tipo={'moradores'} />
                                )}

                                {renderIf(questao.tipo === 'radio',
                                    <ReplyRadio admin={admin} quiz={quiz} questao={questao} tipo={'moradores'} />
                                )}
                            </CardItem>

                            {renderIf(questao.pergunta_extensao !== '',
                                <CardItem>
                                    <Sae
                                        label={questao.pergunta_extensao.pergunta}
                                        defaultValue={quiz.moradores[idQuestao + '_secundaria']}
                                        iconClass={FontAwesomeIcon}
                                        iconName={'pencil'}
                                        iconColor={'black'}
                                        autoCapitalize={'none'}
                                        autoCorrect={false}
                                        labelStyle={styles.textInput}
                                        inputStyle={styles.textInput}
                                    />
                                </CardItem>
                            )}
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
