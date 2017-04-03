import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';
import { Button, Card, CardItem, Container, Content, DeckSwiper, Footer, FooterTab, Header, Icon, Text, Title } from 'native-base';
import RadioForm from 'react-native-simple-radio-button';
import RNFetchBlob from 'react-native-fetch-blob';

import { model } from '../Model';
import { questions } from './Questions';
import { exitApp } from '../Util';

export default class Quiz extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var modelApp = this.props.model;
        var questaoApp = this.props.questao;
        var idApp = this.props.id;

        function renderIf(condition, content) {
            if (condition) {
                return content;
            } else {
                return null;
            }
        }

        if(modelApp == null){
            modelApp = model;
        }

        if(idApp == null){
            modelApp.createFile((result) => {
                idApp = result;
            });
        }

        var questao = questions[questaoApp];

        return (
            <Container style={styles.container}>
                <Header>
                    <Button transparent onPress={() => {
                        this.props.navigator.pop();
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
                                <Text>{questao.id + '. ' + questao.pergunta}</Text>
                                <Text note>{questao.observacao_pergunta}</Text>
                            </CardItem>
                        )}

                        <CardItem cardBody style={styles.cardItem}>
                            {renderIf(questao.pergunta_secundaria !== '',
                                <View style={styles.pergunta_secundaria}>
                                    <Text>{questao.pergunta_secundaria.id + ') ' + questao.pergunta_secundaria.pergunta}</Text>
                                    <Text note>{questao.pergunta_secundaria.observacao_pergunta}</Text>
                                </View>
                            )}

                            {renderIf(questao.tipo === 'quiz_id',
                                <View>
                                    <Text>Nome do aplicador</Text>
                                    <TextInput
                                        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                        onChangeText={(value) => {
                                            modelApp.quiz['nome_aplicador'] = value;
                                        }}
                                        value={modelApp.quiz['nome_aplicador']}
                                    />
                                </View>
                            )}

                            {renderIf(questao.tipo === 'radio',
                                <View>
                                    <RadioForm
                                        radio_props={questao.opcoes}
                                        initial={modelApp.quiz['questao_' + questao.id]}
                                        buttonColor={'#000000'}
                                        buttonSize={10}
                                        labelStyle={styles.radioLabel}
                                        onPress={(value) => {
                                            modelApp.quiz['questao_' + questao.id] = value;
                                            modelApp.saveFile(idApp, modelApp.quiz);
                                        }}
                                        style={styles.radioForm}
                                    />
                                </View>
                            )}

                            {renderIf(questao.tipo === 'select',
                                <View>
                                    <Text>modelApp.quiz['questao_' + questao.id]</Text>
                                </View>
                            )}

                            {renderIf(questao.tipo === 'multiple',
                                <View>
                                    <RadioForm
                                        radio_props={questao.opcoes}
                                        initial={modelApp.quiz['questao_' + questao.id]}
                                        buttonColor={'#000000'}
                                        buttonSize={10}
                                        labelStyle={styles.radioLabel}
                                        onPress={(value) => {
                                            modelApp.quiz['questao_' + questao.id] = value;
                                            modelApp.saveFile(id, modelApp.quiz);
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
                                            modelApp.quiz['questao_' + questao.id] = value;
                                            modelApp.saveFile(idApp, modelApp.quiz);
                                        }}
                                        value = {null}
                                        maxLength = {2}
                                    />
                                </View>
                            )}
                        </CardItem>

                        {renderIf(questao.id !== 'id',
                            <CardItem>
                                <Text>{questao.observacao_opcoes}</Text>
                            </CardItem>
                        )}
                    </Card>
                </Content>
                <Footer>
                    <FooterTab>
                        <Button transparent onPress={() => {
                            this.props.navigator.push({
                                name: 'quiz',
                                id: idApp,
                                model: modelApp,
                                questao: Number(questaoApp) - 1
                            });
                        }}>
                            <Icon name='ios-arrow-back' />
                        </Button>
                        <Button transparent onPress={() => {
                            this.props.navigator.push({
                                name: 'quiz',
                                id: idApp,
                                model: modelApp,
                                questao: Number(questaoApp) + 1
                            });
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
        paddingLeft: 10,
    },
    pergunta_secundaria: {
        paddingBottom: 10,
    },
    textInputNumeric: {
        width: 50,
    }
});
