import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';
import RadioForm from 'react-native-simple-radio-button';

export default class Question1 extends Component {
    constructor(props) {
        super(props);
    }

    getInitialState = function() {
        return {
            model: this.props.model
        };
    };

    setQuestion = function (value) {
        model.question2 = value
    };

    render() {
        return (
            <Container style={styles.container}>
                <Content>
                    <Text style={styles.label}>2. O atual domicílio é:</Text>
                    <RadioForm
                        radio_props={[
                            {label: 'Próprio – já pago', value: 1 },
                            {label: 'Próprio – ainda pagando', value: 2 },
                            {label: 'Alugado', value: 3 },
                            {label: 'Cedido por empregador', value: 4 },
                            {label: 'Cedido de outra forma', value: 5 },
                            {label: 'Ocupado/invadido', value: 6 },
                            {label: 'Outro', value: 7 },
                            {label: 'Não sabe', value: 8 }
                        ]}
                        initial={this.props.model.question2}
                        buttonColor={'#000000'}
                        buttonSize={10}
                        labelStyle={styles.radioLabel}
                        onPress={(value) => {this.setQuestion(value)}}
                        style={styles.radioForm}
                    />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        paddingTop: 10
    },
    content:{
        paddingBottom: 20
    },
    label: {
        fontSize: 14,
        color: '#000000',
        textAlignVertical: 'center',
        paddingLeft: 10,
        paddingBottom: 14
    },
    radioLabel: {
        fontSize: 14,
        color: '#000000',
        paddingTop: 5,
        paddingBottom: 5
    },
    radioForm: {
        paddingLeft: 10
    }
});
