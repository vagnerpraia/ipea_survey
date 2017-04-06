import React, { Component } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Button, Container, Content, List, Header, Icon, ListItem, Picker, Text, Title } from 'native-base';
import TextField from 'react-native-md-textinput';
import RadioForm from 'react-native-simple-radio-button';

import { exitApp } from '../Util';

const Item = Picker.Item;

var UF = {
  select_uf: {
    name: 'Selecione um Estado', value: '0',
  },
  rj: {
    name: 'RJ', value: 'RJ',
  },
  rn: {
    name: 'RN', value: 'RN',
  },
  ro: {
    name: 'RO', value: 'RO',
  },
};

var MUNICIPIO = {
  select_municipio: {
    name: 'Selecione um Município', value: '0',
  },
  rj: {
    name: 'Rio de Janeiro', value: 'Rio de Janeiro',
  },
  rn: {
    name: 'São Gonçalo', value: 'São Gonçalo',
  },
  ro: {
    name: 'Duque de Caxias', value: 'Duque de Caxias',
  },
};

var radio_localizacao = [
  {label: 'Urbana', value: 'Urbana' },
  {label: 'Rural', value: 'Rural' }
];

var radio_loc_diferenciada = [
  {label: 'Não se aplica', value: 'Não se aplica' },
  {label: 'Reassentamento coletivo', value: 'Reassentamento coletivo' },
  {label: 'Assentamento de reforma agrária', value: 'Assentamento de reforma agrária' },
  {label: 'Área remanescente de quilombos', value: 'Área remanescente de quilombos' },
  {label: 'Terra indígena', value: 'Terra indígena' },
];

export default class Config extends Component {
    state = {
      nome_aplicador: '',
      nome_entrevistado: '',
      selected_uf: 'select_uf',
      selected_municipio: 'select_municipio',
      localidade: '',
      localizacao: '',
      loc_diferenciada: '',
      barragem: '',

      mode: Picker.MODE_DIALOG,
    }
    render() {
        let { nome_aplicador, nome_entrevistado, localidade, localizacao, loc_diferenciada, barragem } = this.state;

        var make_uf = UF[this.state.selected_uf];
        var make_municipio = MUNICIPIO[this.state.selected_municipio];

        const onButtonPress = () => {
          Alert.alert(nome_aplicador + "\n" + nome_entrevistado + "\n" + make_uf.value + "\n" + make_municipio.value + "\n" + localidade + "\n" + localizacao + "\n" + loc_diferenciada + "\n" + barragem);
        };

        return (
            <Container style={styles.container}>
                <Header>
                    <Button transparent onPress={() => { this.props.navigator.pop(); }}>
                        <Icon name='ios-arrow-back' />
                    </Button>

                    <Title>Configuração</Title>

                    <Button transparent onPress={exitApp}>
                        <Icon name='ios-close' />
                    </Button>
                </Header>
                <Content>
                <View style={styles.view}>
                  <TextField
                      label={'Nome do aplicador'}
                      value={nome_aplicador}
                      labelColor={'#000000'}
                      onChangeText={ (nome_aplicador) => this.setState({ nome_aplicador }) }
                      highlightColor={'#00BCD4'}
                      dense={true}
                  />
                  <TextField
                      label={'Nome do entrevistado'}
                      value={nome_entrevistado}
                      labelColor={'#000000'}
                      onChangeText={ (nome_entrevistado) => this.setState({ nome_entrevistado }) }
                      highlightColor={'#00BCD4'}
                      dense={true}
                  />
                  <Text style={styles.texttitle} >UF</Text>
                  <Picker
                    selectedValue={this.state.selected_uf}
                    onValueChange={(selected_uf) => this.setState({selected_uf})}>
                    {Object.keys(UF).map((selected_uf) => (
                      <Item
                        key={selected_uf}
                        value={selected_uf}
                        label={UF[selected_uf].name}
                      />
                    ))}
                  </Picker>
                  <Text style={styles.texttitle} >Município</Text>
                  <Picker
                    selectedValue={this.state.selected_municipio}
                    onValueChange={(selected_municipio) => this.setState({selected_municipio})}>
                    {Object.keys(MUNICIPIO).map((selected_municipio) => (
                      <Item
                        key={selected_municipio}
                        value={selected_municipio}
                        label={MUNICIPIO[selected_municipio].name}
                      />
                    ))}
                  </Picker>
                  <TextField
                        label={'Localidade '}
                        value={localidade}
                        labelColor={'#000000'}
                        onChangeText={ (localidade) => this.setState({ localidade }) }
                        highlightColor={'#00BCD4'}
                        dense={true}
                  />
                  <Text style={styles.texttitle} >Localização/Zona</Text>
                  <RadioForm
                    radio_props={radio_localizacao}
                    initial={0}
                    buttonColor={'#000000'}
                    buttonSize={8}
                    labelStyle={styles.radioLabel}
                    style={styles.radioForm}
                    onPress={(localizacao) => {this.setState({localizacao})}}
                  />
                  <Text style={styles.texttitle} >Localização diferenciada</Text>
                  <RadioForm
                    radio_props={radio_loc_diferenciada}
                    initial={0}
                    buttonColor={'#000000'}
                    buttonSize={8}
                    labelStyle={styles.radioLabel}
                    style={styles.radioForm}
                    onPress={(loc_diferenciada) => {this.setState({loc_diferenciada})}}
                  />
                  <TextField
                        label={'Barragem'}
                        value={barragem}
                        labelColor={'#000000'}
                        onChangeText={ (barragem) => this.setState({ barragem }) }
                        highlightColor={'#00BCD4'}
                        dense={true}
                  />
                  <Button
                    style={{ marginTop: 10 }}
                    onPress={onButtonPress}
                    > Salvar </Button>
                </View>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
    view: {
      flex: 1,
      flexDirection: 'column',
      padding: 15,
      marginTop: -15
    },
    texttitle: {
      color: '#000000',
      marginTop: 10,
      fontSize: 13,
    },
    radioLabel: {
        fontSize: 13,
        color: '#000000',
        paddingTop: 5,
        paddingBottom: 5,
    },
    radioForm: {
        paddingLeft: 10,
    },
});
