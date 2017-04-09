import React, { Component } from 'react';
import { PanResponder, StyleSheet, TextInput, ToastAndroid, View } from 'react-native';
import { Button, Card, CardItem, Container, Content, DeckSwiper, Footer, FooterTab, Header, Icon, ListItem, Radio, Text, Title } from 'native-base';
import RadioForm from 'react-native-simple-radio-button';
import RNFetchBlob from 'react-native-fetch-blob';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import SimpleGesture from 'react-native-simple-gesture';
import { Sae } from 'react-native-textinput-effects';

import { model } from '../Model';
import { block } from '../Block';
import { questions } from './Questions';
import { exitApp } from '../Util';

import RadioButton from './RadioButton';

let modelQuiz;
let questaoQuiz;
let idQuiz;
let idQuestao;

export default class Quiz extends Component {
    constructor(props) {
        super(props);

        modelQuiz = this.props.model;
        questaoQuiz = this.props.questao;
        idQuiz = this.props.id;

        idQuestao = questions[questaoQuiz].id.replace(/\D/g,'');
    }

    componentWillMount(){
        if(this.props.novo === true){
            for(key in modelQuiz.quiz){
                modelQuiz.quiz[key] = null;
            }

            modelQuiz.createFile('quiz', (result) => {
                idQuiz = result;
            });

            this.state = {
                radioSelected: null
            };
        }

        this._panResponder = PanResponder.create({
            onMoveShouldSetPanResponder: (e, gs) => {
                let sgs = new SimpleGesture(e,gs);
                if(sgs.isSimpleSwipeRight()){
                    if(modelQuiz.flagSwiperVoltar){
                        modelQuiz.flagSwiperVoltar = false;
                        this.props.navigator.replacePreviousAndPop({
                            name: 'quiz',
                            id: idQuiz,
                            model: modelQuiz,
                            novo: false,
                            questao: Number(questaoQuiz) - 1
                        });
                    }else{
                        modelQuiz.flagSwiperVoltar = true;
                    }
                }
                if(sgs.isSimpleSwipeLeft()){
                    if(modelQuiz.flagSwiperSeguir){
                        modelQuiz.flagSwiperSeguir = false;

                        if(modelQuiz.quiz['questao_' + questions[questaoQuiz].id] != null){
                            modelQuiz.saveFile(idQuiz, 'quiz', modelQuiz.quiz);
                        }

                        if(Number(idQuestao) + 1 <= modelQuiz.maxQuestion){
                            this.props.navigator.push({
                                name: 'quiz',
                                id: idQuiz,
                                model: modelQuiz,
                                novo: false,
                                questao: Number(questaoQuiz) + 1
                            });
                        }else{
                            ToastAndroid.showWithGravity('Responda a questão ' + idQuestao, ToastAndroid.SHORT, ToastAndroid.CENTER);
                        }
                    }else{
                        modelQuiz.flagSwiperSeguir = true;
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

        var questao = questions[questaoQuiz];

        return (
            <Container style={styles.container}>
                <Header>
                    <Button transparent onPress={() => {
                        if(questaoQuiz === 0){
                            modelQuiz.deleteQuiz(idQuiz);
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
                                <View>
                                    <Text>Nome do aplicador</Text>
                                    <TextInput
                                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                        onChangeText={(value) => {
                                            modelQuiz.quiz['nome_aplicador'] = value;
                                        }}
                                        value={modelQuiz.quiz['nome_aplicador']}
                                    />
                                </View>
                            )}

                            {renderIf(questao.tipo === 'radio',
                                <RadioButton model={modelQuiz} block={block} questao={questao} />
                            )}

                            {renderIf(questao.tipo === 'select',
                                <View>
                                    <Text>modelQuiz.quiz['questao_' + questao.id]</Text>
                                </View>
                            )}

                            {renderIf(questao.tipo === 'multiple',
                                <View>
                                    <RadioForm
                                        radio_props={questao.opcoes}
                                        initial={modelQuiz.quiz['questao_' + questao.id]}
                                        buttonColor={'#000000'}
                                        buttonSize={10}
                                        labelStyle={styles.radioLabel}
                                        onPress={(value) => {
                                            modelQuiz.maxQuestion = Number(idQuestao) + 1;
                                            for(key in block){
                                                let item = block[key];
                                                if(item){
                                                    if(idQuestao == item.questao){
                                                        if(item.opcao.indexOf(value) >= 0){
                                                            modelQuiz.block.push(item.bloqueio);
                                                            modelQuiz.maxQuestion = item.passe;
                                                        }
                                                    }
                                                }
                                            }
                                            modelQuiz.quiz['questao_' + questao.id] = value;
                                        }}
                                        style={styles.radioForm}
                                    />
                                </View>
                            )}

                            {renderIf(questao.tipo === 'input_numeric',
                                <View>
                                    <TextInput
                                        style={styles.textInputNumeric}
                                        keyboardType = 'numeric'
                                        onChangeText = {(value) => {
                                            modelQuiz.quiz['questao_' + questao.id] = value;
                                        }}
                                        value = {null}
                                        maxLength = {2}
                                    />
                                </View>
                            )}
                        </CardItem>

                        {renderIf(questao.pergunta_extensao !== '',
                            <CardItem>
                                <Sae
                                    label={questao.pergunta_extensao.pergunta}
                                    defaultValue={modelQuiz.quiz['questao_' + questao.id + '_secundaria']}
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
                        {renderIf(questaoQuiz == 0,
                            <Button transparent onPress={()=> {
                                ToastAndroid.showWithGravity('Não há como voltar mais', ToastAndroid.SHORT, ToastAndroid.CENTER);
                            }}>
                                <Icon name='ios-arrow-back' />
                            </Button>
                        )}

                        {renderIf(questaoQuiz != 0,
                            <Button transparent onPress={() => {
                                console.log(modelQuiz);
                                modelQuiz.saveFile(idQuiz, 'quiz', modelQuiz.quiz);
                                this.props.navigator.replacePreviousAndPop({
                                    name: 'quiz',
                                    id: idQuiz,
                                    model: modelQuiz,
                                    novo: false,
                                    questao: Number(questaoQuiz) - 1
                                });
                            }}>
                                <Icon name='ios-arrow-back' />
                            </Button>
                        )}

                        <Button transparent onPress={() => {
                            console.log(modelQuiz);
                            if(modelQuiz.quiz['questao_' + questao.id] != null){
                                modelQuiz.saveFile(idQuiz, 'quiz', modelQuiz.quiz);
                            }

                            if(Number(idQuestao) + 1 <= modelQuiz.maxQuestion){
                                this.props.navigator.push({
                                    name: 'quiz',
                                    id: idQuiz,
                                    model: modelQuiz,
                                    novo: false,
                                    questao: Number(questaoQuiz) + 1
                                });
                            }else{
                                ToastAndroid.showWithGravity('Responda a questão ' + idQuestao, ToastAndroid.SHORT, ToastAndroid.CENTER);
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
