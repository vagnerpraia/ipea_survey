import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';
import { Card, CardItem, Container, DeckSwiper, ListItem, Radio, Text } from 'native-base';
import RadioForm from 'react-native-simple-radio-button';

import RadioButton from './RadioButton';

import HeaderApp from '../HeaderApp';
import SideMenuApp from '../SideMenuApp';

import { questions } from '../Questions';

const SideMenu = require('react-native-side-menu');

export default class Quiz2 extends Component {
    constructor(props) {
        super(props);
        this.state = {option: null};
    }

    render() {
        const menu = <SideMenuApp />;
        var nav = this.props.navigator;
        var option = this.state.option;

        function renderIf(condition, content) {
            if (condition) {
                return content;
            } else {
                return null;
            }
        }

        buttonPress = (item) => {
            console.log(item.value);
            this.setState({
                option: item.value
            });
            option = this.state.option;
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
                                    <CardItem>
                                        <Text>{item.id + '. ' + item.pergunta}</Text>
                                        <Text note>{item.observacao_pergunta}</Text>
                                    </CardItem>

                                    <CardItem cardBody>
                                        {renderIf(item.pergunta_secundaria !== '',
                                            <View style={styles.pergunta_secundaria}>
                                                <Text>{item.pergunta_secundaria.id + ') ' + item.pergunta_secundaria.pergunta}</Text>
                                                <Text note>{item.pergunta_secundaria.observacao_pergunta}</Text>
                                            </View>
                                        )}
                                        {renderIf(item.tipo === 'radio',
                                            <View>
                                                {item.opcoes.map(function(item, index){
                                                    return(
                                                        <ListItem selected={this.option === item.value}>
                                                            <Text>{item.label}</Text>

                                                            <Radio
                                                                selected={this.option === item.value}
                                                                onPress={() => {this.buttonPress(item)}}
                                                            />
                                                        </ListItem>
                                                    )
                                                })}
                                            </View>
                                        )}

                                        {renderIf(item.tipo === 'select',
                                            <Text>Select</Text>
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
                                    <CardItem>
                                        <Text>{item.observacao_opcoes}</Text>
                                    </CardItem>
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
