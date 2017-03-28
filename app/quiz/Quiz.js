import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';
import { Card, CardItem, Container, DeckSwiper, Text, Form } from 'native-base';
import RadioForm from 'react-native-simple-radio-button';

import HeaderApp from '../HeaderApp';
import SideMenuApp from '../SideMenuApp';

import { questions } from './Questions';

const SideMenu = require('react-native-side-menu');

export default class Quiz extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const menu = <SideMenuApp />;
        var nav = this.props.navigator;
        var model = this.props.model;

        function renderIf(condition, content) {
            if (condition) {
                return content;
            } else {
                return null;
            }
        }

        return (
            <SideMenu menu={menu}>
                <HeaderApp navigator={nav} />
                <Container style={styles.container}>
                    <View>
                        <DeckSwiper
                            dataSource={questions}
                            renderItem={item =>
                                <Card style={{ elevation: 3 }}>
                                    {renderIf(item.id !== 'id',
                                        <CardItem>
                                            <Text>{item.id + '. ' + item.pergunta}</Text>
                                            <Text note>{item.observacao_pergunta}</Text>
                                        </CardItem>
                                    )}

                                    <CardItem cardBody>
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
                                                initial={model.quiz['question' + item.id]}
                                                buttonColor={'#000000'}
                                                buttonSize={10}
                                                labelStyle={styles.radioLabel}
                                                onPress={(value) => {
                                                    model.quiz['question' + item.id] = value;
                                                    model.saveFile('test', model)
                                                }}
                                                style={styles.radioForm}
                                            />
                                        )}

                                        {renderIf(item.tipo === 'select',
                                            <Text>model.quiz['question' + item.id]</Text>
                                        )}

                                        {renderIf(item.tipo === 'multiple',
                                            <RadioForm
                                                radio_props={item.opcoes}
                                                initial={model.quiz['question' + item.id]}
                                                buttonColor={'#000000'}
                                                buttonSize={10}
                                                labelStyle={styles.radioLabel}
                                                onPress={(value) => {
                                                    model.quiz['question' + item.id] = value;
                                                    model.saveFile('test', model)
                                                }}
                                                style={styles.radioForm}
                                            />
                                        )}

                                        {renderIf(item.tipo === 'input_numeric',
                                            <TextInput
                                                style={styles.textInputNumeric}
                                                keyboardType = 'numeric'
                                                onChangeText = {(value) => {this.setState({question: value})}}
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
            </SideMenu>
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
