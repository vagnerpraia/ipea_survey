import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, ToastAndroid, View } from 'react-native';
import { Button, Card, CardItem, Container, Content, DeckSwiper, Footer, FooterTab, Header, Icon, Text, Title } from 'native-base';
import RadioForm from 'react-native-simple-radio-button';
import RNFetchBlob from 'react-native-fetch-blob';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

import { model } from '../Model';
import { questions } from './Questions';
import { exitApp } from '../Util';

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

    componentDidMount(){
        if(idQuestao > modelQuiz.maxQuestion){
            modelQuiz.notice = 'Responda a questão';
            this.props.navigator.replacePreviousAndPop({
                name: 'quiz',
                id: idQuiz,
                model: modelQuiz,
                novo: false,
                questao: Number(questaoQuiz) - 1
            });
        }else{
            if(modelQuiz.quiz['questao_3'] == 1 && idQuestao == '4'){
                modelQuiz.notice = 'Necessário passar para a questão 5';
                this.props.navigator.push({
                    name: 'quiz',
                    id: idQuiz,
                    model: modelQuiz,
                    novo: false,
                    questao: Number(questaoQuiz) + 1
                });
            }
            else{
                if(modelQuiz.notice !== ''){
                    ToastAndroid.showWithGravity(modelQuiz.notice, ToastAndroid.SHORT, ToastAndroid.CENTER);
                }
                modelQuiz.notice = '';
            }
        }

        if(this.props.novo === true){
            for(key in modelQuiz.quiz){
                modelQuiz.quiz[key] = null;
            }

            modelQuiz.createFile((result) => {
                idQuiz = result;
            });
        }
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
                            modelQuiz.deleteFile(idQuiz);
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
                <Content>
                    <Card style={styles.card}>
                        {renderIf(questions.id !== 'id',
                            <CardItem>
                                <Text>{questao.id.replace(/\D/g,'') + '. ' + questao.pergunta}</Text>
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
                                <View>
                                    <RadioForm
                                        radio_props={questao.opcoes}
                                        initial={modelQuiz.quiz['questao_' + questao.id]}
                                        buttonColor={'#000000'}
                                        buttonSize={10}
                                        labelStyle={styles.radioLabel}
                                        onPress={(value) => {
                                            if(idQuestao == 3){
                                                if(value == 1){
                                                    modelQuiz.quiz['questao_4'] = null;
                                                    modelQuiz.maxQuestion = 5;
                                                }
                                                else{
                                                    modelQuiz.maxQuestion ++;
                                                }
                                            }
                                            else{
                                                modelQuiz.maxQuestion ++
                                            };

                                            modelQuiz.quiz['questao_' + questao.id] = value;
                                        }}
                                        style={styles.radioForm}
                                    />
                                </View>
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
                                            if(questao.id.replace(/\D/g,'') === '3'){
                                                modelQuiz.maxQuestion = 5;
                                            };
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

                        {renderIf(questao.id !== 'id',
                            <CardItem>
                                <Text>{questao.observacao_opcoes}</Text>
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
                                modelQuiz.saveFile(idQuiz, modelQuiz.quiz);
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
                            if(modelQuiz.quiz['questao_' + questao.id] != null){
                                modelQuiz.saveFile(idQuiz, modelQuiz.quiz);

                                this.props.navigator.push({
                                    name: 'quiz',
                                    id: idQuiz,
                                    model: modelQuiz,
                                    novo: false,
                                    questao: Number(questaoQuiz) + 1
                                });
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
