import React, { Component } from 'react';
import { PanResponder, StyleSheet, TextInput, ToastAndroid, View } from 'react-native';
import { Body, Button, Card, CardItem, Container, Content, Footer, FooterTab, Header, Icon, Left, Right, Text, Title } from 'native-base';
import SideMenu from 'react-native-side-menu';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

import SideMenuMoradores from './SideMenuMoradores';
import ReplyInputCurrency from './reply/ReplyInputCurrency';
import ReplyInputNumeric from './reply/ReplyInputNumeric';
import ReplyMultiSelect from './reply/ReplyMultiSelect';
import ReplyRadio from './reply/ReplyRadio';
import ReplyText from './reply/ReplyText';
import ReplyTime from './reply/ReplyTime';

import { passQuestion } from './business/PassQuestionMorador';

import FileStore from './../../FileStore';
import MoradorData from './../../data/MoradorData';
import { questoes } from './../../data/QuestoesMorador';
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

export default class Morador extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            admin: this.props.admin,
            quiz: this.props.quiz,
        };
    }

    componentWillMount(){
        if(this.state.quiz.moradores === null){
            this.state.id = 0;
            this.state.quiz.moradores = [new MoradorData(this.state.id)];
        }else if(this.state.id === null){
            this.state.id = this.state.quiz.moradores.length;
            this.state.quiz.moradores.push(new MoradorData(this.state.id));
        }

        FileStore.saveFileMoradores(this.state.admin.id, this.state.quiz.moradores);

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
            for(key in this.state.quiz.moradores){
                if(this.state.quiz.moradores[key].id === this.state.id){
                    this.state.quiz.moradores.splice(key, 1);
                }
            }

            if(this.state.quiz.moradores.length === 0) FileStore.deleteMorador(this.state.admin.id);
            else FileStore.saveFileMoradores(this.state.admin.id, this.state.quiz.moradores);
        };
        this.props.navigator.replacePreviousAndPop({
            name: 'lista_moradores',
            admin: this.state.admin,
            quiz: this.state.quiz,
            isOpen: false
        });
    }

    popScreen(){
        if(this.state.admin.indexPage > 0){
            this.state.admin.indexPage = Number(this.state.admin.indexPage) - 1;
            this.props.navigator.replacePreviousAndPop({
                id: this.state.id,
                name: 'morador',
                admin: this.state.admin,
                quiz: this.state.quiz
            });
        }else{
            ToastAndroid.showWithGravity('Não há como voltar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
        }
    }

    pushScreen(){
        let flagResponse = true;
        
        let morador = null;
        for(key in this.state.moradores){
            if(this.state.moradores[key].id === this.state.id){
                morador = quiz.moradores[key];
            }
        }

        if(type(morador) == 'array'){
            if(morador.length == 0){
                flagResponse = false;
            }
        }else{
            if(morador == null){
                flagResponse = false;
            }
        }

        if(flagResponse || Number(numeroQuestao) + 1 <= this.state.admin.maxQuestion){
            if(Number(numeroQuestao) + 1 <= this.state.admin.maxQuestion){
                this.state.admin.indexPage = Number(this.state.admin.indexPage) + 1;

                FileStore.saveFileMoradores(this.state.id, this.state.quiz.moradores);
                if(this.state.admin.indexPage >= questoes.length){
                    ToastAndroid.showWithGravity('Questionário Finalizado\nNão há como avançar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
                }else{
                    this.props.navigator.push({
                        id: this.state.id,
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
        let pergunta_extensao = questao.pergunta_extensao;

        let morador = null;
        for(key in quiz.moradores){
            if(quiz.moradores[key].id === this.state.id){
                morador = quiz.moradores[key];
            }
        }

        const menu = <SideMenuMoradores admin={admin} quiz={quiz} navigator={this.props.navigator} />;

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
                        {renderIf(questao.id == 'id',
                            <CardItem style={styles.cardItemQuestao}>
                                {
                                    questao.pergunta.map(function(item, i){
                                        return(
                                            <View style={styles.viewId}>
                                                <Text style={styles.questaoId}>{questao.pergunta[i]}</Text>
                                                <Sae
                                                    label={''}
                                                    defaultValue={morador['id'][i]}
                                                    iconClass={FontAwesomeIcon}
                                                    iconName={'pencil'}
                                                    iconColor={'#808080'}
                                                    autoCapitalize={'none'}
                                                    autoCorrect={false}
                                                    inputStyle={styles.respostaTextInput}
                                                    onChangeText={(value) => {
                                                        morador['id'][i] = value
                                                    }}
                                                    style={{paddingLeft: 20}}
                                                />
                                            </View>
                                        )
                                    })
                                }
                            </CardItem>
                        )}

                        {renderIf(questao.id !== 'id',
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
                            {renderIf(questao.tipo === 'input_currency',
                                <ReplyInputCurrency admin={admin} quiz={morador} questao={questao} passQuestion={passQuestion} />
                            )}
                            
                            {renderIf(questao.tipo === 'input_numeric',
                                <ReplyInputNumeric admin={admin} quiz={morador} questao={questao} passQuestion={passQuestion} />
                            )}

                            {renderIf(questao.tipo === 'multiple',
                                <ReplyMultiSelect admin={admin} quiz={morador} questao={questao} passQuestion={passQuestion} />
                            )}

                            {renderIf(questao.tipo === 'radio',
                                <ReplyRadio admin={admin} quiz={morador} questao={questao} passQuestion={passQuestion} />
                            )}

                            {renderIf(questao.tipo === 'text',
                                <ReplyText admin={admin} quiz={morador} questao={questao} passQuestion={passQuestion} />
                            )}

                            {renderIf(questao.tipo === 'input_time',
                                <ReplyTime admin={admin} quiz={morador} questao={questao} passQuestion={passQuestion} />
                            )}
                        </CardItem>

                        {renderIf(pergunta_extensao !== '',
                            <CardItem>
                                <Text style={styles.observacaoQuestao}>{pergunta_extensao.pergunta}</Text>
                                <TextInput
                                    style={{width: 500, fontSize: 20}}
                                    keyboardType = 'default'
                                    onChangeText = {(value) => {
                                        if(morador[idQuestao] != null){
                                            if(morador[idQuestao] == pergunta_extensao.referencia){
                                                morador[idQuestao + '_secundaria'] = value;
                                            }else if(morador[idQuestao].indexOf(Number(pergunta_extensao.referencia)) > -1){
                                                morador[idQuestao + '_secundaria'] = value;
                                            }
                                        }
                                    }}
                                    defaultValue = {morador[idQuestao + '_secundaria']}
                                    maxLength = {500}
                                />
                            </CardItem>
                        )}
                    </Card>
                </Content>
                <Footer style={styles.footer}>
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
