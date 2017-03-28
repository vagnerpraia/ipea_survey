import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text } from 'native-base';
import RadioForm from 'react-native-simple-radio-button';

export default class Question1 extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Content style={styles.content}>
                    <Text style={styles.label}>1. Tipo de domicílio:</Text>
                    <RadioForm
                        radio_props={[
                            {label: 'Casa', value: 1 },
                            {label: 'Casa de agrovila', value: 2 },
                            {label: 'Apartamento', value: 3 },
                            {label: 'Cômodo ou peça', value: 4 },
                            {label: 'Barraca ou tenda', value: 5 },
                            {label: 'Alojamento', value: 6 },
                            {label: 'Hotel/pensão/albergue', value: 7 },
                            {label: 'Oca ou maloca (para setores de terras indígenas)', value: 8 },
                            {label: 'Outro', value: 9 },
                            {label: 'Não sabe', value: 10 }
                        ]}
                        initial={this.props.model.question1}
                        buttonColor={'#000000'}
                        buttonSize={10}
                        labelStyle={styles.radioLabel}
                        onPress={(value) => {this.setState({question: value})}}
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
