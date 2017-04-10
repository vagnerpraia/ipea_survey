import React, { Component } from 'react';
import { PanResponder, StyleSheet, TextInput, ToastAndroid, View } from 'react-native';
import { Button, Card, CardItem, Container, Content, DeckSwiper, Footer, FooterTab, Header, Icon, ListItem, Radio, Text, Title } from 'native-base';
import RNFetchBlob from 'react-native-fetch-blob';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleGesture from 'react-native-simple-gesture';
import { Sae } from 'react-native-textinput-effects';

import { exitApp } from '../Util';

import { questions } from './content/Questions';
import { businessQuestion } from './content/BusinessQuestion';
import { passQuestion } from './content/PassQuestion';

import ViewId from './ViewId';

import ReplyInputNumeric from './reply/ReplyInputNumeric';
import ReplyMultiSelect from './reply/ReplyMultiSelect';
import ReplyRadio from './reply/ReplyRadio';

let id;
let model;
let indexPage;
let idQuestao;
let numeroQuestao;

export default class Quiz extends Component {
    constructor(props) {
        super(props);

        id = this.props.id;
        model = this.props.model;
        indexPage = this.props.indexPage;
        idQuestao = 'questao_' + questions[indexPage].id;
        numeroQuestao = questions[indexPage].id.replace(/\D/g,'');
    }

    componentWillMount(){
        if(this.props.newQuiz === true){
            for(key in model.quiz){
                model.quiz[key] = null;
            }

            model.createFile('quiz', (result) => {
                id = result;
            });

            this.state = {
                radioSelected: null
            };
        }

        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (e, gs) => {
                let sgs = new SimpleGesture(e, gs);

                if(sgs.isSimpleSwipeRight()){
                    if(model.flagSwiperVoltar){
                        model.flagSwiperVoltar = false;
                        if(indexPage > 0){
                            this.props.navigator.replacePreviousAndPop({
                                name: 'quiz',
                                id: id,
                                model: model,
                                indexPage: Number(indexPage) - 1,
                                newQuiz: false
                            });
                        }else{
                            ToastAndroid.showWithGravity('Não há como voltar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
                        }
                    }else{
                        model.flagSwiperVoltar = true;
                    }
                }
                if(sgs.isSimpleSwipeLeft()){
                    if(model.flagSwiperSeguir){
                        model.flagSwiperSeguir = false;
                        model.saveFile(id, 'quiz', model.quiz);

                        if(model.quiz[idQuestao] != null){
                            if(Number(numeroQuestao) + 1 <= model.maxQuestion){
                                this.props.navigator.push({
                                    name: 'quiz',
                                    id: id,
                                    model: model,
                                    indexPage: Number(indexPage) + 1,
                                    newQuiz: false
                                });
                            }
                        }else{
                            ToastAndroid.showWithGravity('Responda a questão ' + numeroQuestao, ToastAndroid.SHORT, ToastAndroid.CENTER);
                        }
                    }else{
                        ToastAndroid.showWithGravity('Responda a questão', ToastAndroid.SHORT, ToastAndroid.CENTER);
                    }
                }
            }
        });
    }

    render() {
        function renderIf(condition, content) {
            if (condition) {
                return content;
            } else {
                return null;
            }
        }

        var questao = questions[indexPage];

        return (
            <Container style={styles.container}>
                <Header>
                    <Button transparent onPress={() => {
                        if(indexPage === 0){
                            model.deleteQuiz(id);
                        };

                        this.props.navigator.replacePreviousAndPop({
                            name: 'main'
                        });
                    }}>
                        <Icon name='ios-arrow-back' />
                    </Button>

                    <Title>Questionário</Title>

                    <Button transparent onPress={
                        exitApp
                    }>
                        <Icon name='ios-close' />
                    </Button>
                </Header>
                <Content {...this._panResponder.panHandlers}>
                    <Card style={styles.card}>
                        {renderIf(questions.id !== 'id',
                            <CardItem>
                                <Text style={styles.question}>{questao.id.replace(/\D/g,'') + '. ' + questao.pergunta}</Text>
                                <Text note>{questao.observacao_pergunta}</Text>
                            </CardItem>
                        )}

                        <CardItem cardBody style={styles.cardItem}>
                            {renderIf(questao.pergunta_secundaria !== '',
                                <View style={styles.pergunta_secundaria}>
                                    <Text>{questao.id.replace(/[0-9]/g, '').toUpperCase() + ') ' + questao.pergunta_secundaria.pergunta}</Text>
                                    <Text note>{questao.pergunta_secundaria.observacao_pergunta}</Text>
                                </View>
                            )}

                            {renderIf(questao.tipo === 'quiz_id',
                                <ViewId model={model} passQuestion={passQuestion} questao={questao} />
                            )}

                            {renderIf(questao.tipo === 'input_numeric',
                                <ReplyInputNumeric model={model} passQuestion={passQuestion} questao={questao} />
                            )}

                            {renderIf(questao.tipo === 'multiple',
                                <ReplyMultiSelect model={model} passQuestion={passQuestion} businessQuestion={businessQuestion} questao={questao} />
                            )}

                            {renderIf(questao.tipo === 'radio',
                                <ReplyRadio model={model} passQuestion={passQuestion} questao={questao} />
                            )}
                        </CardItem>

                        {renderIf(questao.pergunta_extensao !== '',
                            <CardItem>
                                <Sae
                                    label={questao.pergunta_extensao.pergunta}
                                    defaultValue={model.quiz[idQuestao + '_secundaria']}
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
                <Footer>
                    <FooterTab>
                        {renderIf(indexPage == 0,
                            <Button transparent onPress={()=> {
                                ToastAndroid.showWithGravity('Não há como voltar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
                            }}>
                                <Icon name='ios-arrow-back' />
                            </Button>
                        )}

                        {renderIf(indexPage != 0,
                            <Button transparent onPress={() => {
                                model.saveFile(id, 'quiz', model.quiz);
                                this.props.navigator.replacePreviousAndPop({
                                    name: 'quiz',
                                    id: id,
                                    model: model,
                                    indexPage: Number(indexPage) - 1,
                                    newQuiz: false
                                });
                            }}>
                                <Icon name='ios-arrow-back' />
                            </Button>
                        )}

                        <Button transparent onPress={() => {
                            model.saveFile(id, 'quiz', model.quiz);

                            if(model.quiz[idQuestao] != null){
                                if(Number(numeroQuestao) + 1 <= model.maxQuestion){
                                    this.props.navigator.push({
                                        name: 'quiz',
                                        id: id,
                                        model: model,
                                        indexPage: Number(indexPage) + 1,
                                        newQuiz: false
                                    });
                                }else{
                                    ToastAndroid.showWithGravity('Responda a questão ' + numeroQuestao, ToastAndroid.SHORT, ToastAndroid.CENTER);
                                }
                            }else{
                                ToastAndroid.showWithGravity('Responda a questão', ToastAndroid.SHORT, ToastAndroid.CENTER);
                            }
                        }}>
                            <Icon name='ios-arrow-forward' />
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    content:{
        paddingBottom: 20,
    },
    card:{
        elevation: 3
    },
    cardItem:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
    },
    label: {
        fontSize: 14,
        color: '#000000',
        textAlignVertical: 'center',
        paddingLeft: 10,
        paddingBottom: 14,
    },
    question: {
        fontWeight: 'bold',
    },
    observacao_opcoes: {
        fontSize: 14,
        color: 'gray',
    },
    radioLabel: {
        fontSize: 14,
        color: '#000000',
        paddingTop: 5,
        paddingBottom: 5,
    },
    radioForm: {
        paddingLeft: 0,
    },
    pergunta_secundaria: {
        paddingBottom: 10,
    },
    textInput: {
        fontSize: 14,
        color: '#000000'
    },
    textInputNumeric: {
        width: 50,
    },
});
