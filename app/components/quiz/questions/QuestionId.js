import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default class QuestionId extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nome_aplicador: '',
            estado: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Nome do aplicador</Text>
                <TextInput
                    onChangeText={(nome_aplicador) => this.setState({nome_aplicador})}
                    value={this.state.nome_aplicador}
                />
                <Text>Estado</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
});
