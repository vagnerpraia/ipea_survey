import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import DropDown, { Select, Option, OptionList } from 'react-native-selectme';

export default class SelectState extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ''
        };
    }

    _getOptionList() {
        return this.refs['OPTIONLIST'];
    }

    _state(name) {
        this.setState({
        ...this.name,
            state: name
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Select
                    width={250}
                    ref="SELECT1"
                    optionListRef={this._getOptionList.bind(this)}
                    defaultValue="Selecione o estado"
                    onSelect={this._state.bind(this)}>
                    <Option>Acre</Option>
                    <Option>Alagoas</Option>
                    <Option>Amapá</Option>
                    <Option>Amazonas</Option>
                    <Option>Bahia</Option>
                    <Option>Ceará</Option>
                    <Option>Distrito Federal</Option>
                    <Option>Espírito Santo</Option>
                    <Option>Goiás</Option>
                    <Option>Maranhão</Option>
                    <Option>Mato Grosso</Option>
                    <Option>Mato Grosso do Sul</Option>
                    <Option>Minas Gerais</Option>
                    <Option>Pará</Option>
                    <Option>Paraíba</Option>
                    <Option>Paraná</Option>
                    <Option>Pernanbuco</Option>
                    <Option>Piauí</Option>
                    <Option>Rio de Janeiro</Option>
                    <Option>Rio Grando do Norte</Option>
                    <Option>Rio Grando do Sul</Option>
                    <Option>Rondônia</Option>
                    <Option>Roraima</Option>
                    <Option>Santa Catarina</Option>
                    <Option>São Paulo</Option>
                    <Option>Sergipe</Option>
                    <Option>Tocantins</Option>
                </Select>

                <OptionList ref="OPTIONLIST" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
