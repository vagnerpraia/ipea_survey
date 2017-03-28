import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, View } from 'react-native';
import { Text } from 'native-base';

export default class QuestionId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome_aplicador: '',
            estado: ''
        };
    }

    render() {
        var model = this.props.model;
        var item = this.props.item;

        return (
            <View>
                <Text>Nome do aplicador</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(value) => {
                        model.quiz['question' + item.id] = value;
                    }}
                    value={model.quiz['question' + item.id.nome_aplicador]}
                />
            </View>
        );
    }
}
