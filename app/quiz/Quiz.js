import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';
import { Button, Card, CardItem, Container, DeckSwiper, Header, Icon, Text, Title } from 'native-base';
import RadioForm from 'react-native-simple-radio-button';
import RNFetchBlob from 'react-native-fetch-blob';

import { questions } from './Questions';
import { exitApp } from '../Util';

export default class Quiz extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var model = this.props.model;
        var id;

        function renderIf(condition, content) {
            if (condition) {
                return content;
            } else {
                return null;
            }
        }

        model.createFile((result) => {
            id = result;
        });

        return (
            <Container style={styles.container}>
                <Header>
                    <Button transparent onPress={() => { this.props.navigator.pop(); }}>
                        <Icon name='ios-arrow-back' />
                    </Button>

                    <Title>Questionário</Title>

                    <Button transparent onPress={exitApp}>
                        <Icon name='ios-close' />
                    </Button>
                </Header>
                <View>
                    <DeckSwiper
                        dataSource={questions}
                        renderItem={item =>
                            <Card style={styles.card}>
                                {renderIf(item.id !== 'id',
                                    <CardItem>
                                        <Text>{item.id + '. ' + item.pergunta}</Text>
                                        <Text note>{item.observacao_pergunta}</Text>
                                    </CardItem>
                                )}

                                <CardItem cardBody style={styles.cardItem}>
                                    {renderIf(item.pergunta_secundaria !== '',
                                        <View style={styles.pergunta_secundaria}>
                                            <Text>{item.pergunta_secundaria.id + ') ' + item.pergunta_secundaria.pergunta}</Text>
                                            <Text note>{item.pergunta_secundaria.observacao_pergunta}</Text>
                                        </View>
                                    )}

                                    {renderIf(item.tipo === 'quiz_id',
                                        <View>
                                            <Text>Nome do aplicador</Text>
                                            <TextInput
                                                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                                                onChangeText={(value) => {
                                                    model.quiz['nome_aplicador'] = value;
                                                }}
                                                value={model.quiz['nome_aplicador']}
                                            />
                                        </View>
                                    )}

                                    {renderIf(item.tipo === 'radio',
                                        <RadioForm
                                            radio_props={item.opcoes}
                                            initial={model.quiz['questao_' + item.id]}
                                            buttonColor={'#000000'}
                                            buttonSize={10}
                                            labelStyle={styles.radioLabel}
                                            onPress={(value) => {
                                                model.saveFile(id, 'questao_' + item.id, value)
                                            }}
                                            style={styles.radioForm}
                                        />
                                    )}

                                    {renderIf(item.tipo === 'select',
                                        <Text>model.quiz['questao_' + item.id]</Text>
                                    )}

                                    {renderIf(item.tipo === 'multiple',
                                        <RadioForm
                                            radio_props={item.opcoes}
                                            initial={model.quiz['questao_' + item.id]}
                                            buttonColor={'#000000'}
                                            buttonSize={10}
                                            labelStyle={styles.radioLabel}
                                            onPress={(value) => {
                                                model.quiz['questao_' + item.id] = value;
                                                model.saveFile('test', model)
                                            }}
                                            style={styles.radioForm}
                                        />
                                    )}

                                    {renderIf(item.tipo === 'input_numeric',
                                        <TextInput
                                            style={styles.textInputNumeric}
                                            keyboardType = 'numeric'
                                            onChangeText = {(value) => {this.setState({questao_: value})}}
                                            value = {null}
                                            maxLength = {2}
                                        />
                                    )}
                                </CardItem>

                                {renderIf(item.id !== 'id',
                                    <CardItem>
                                        <Text>{item.observacao_opcoes}</Text>
                                    </CardItem>
                                )}
                            </Card>
                        }
                    />
                </View>
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
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
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
