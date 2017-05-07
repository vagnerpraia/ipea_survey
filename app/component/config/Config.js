import React, { Component } from 'react';
import { Alert, StyleSheet, ToastAndroid, View } from 'react-native';
import { Button, Container, Content, List, Header, Icon, ListItem, Picker, Text, Title } from 'native-base';
import TextField from 'react-native-md-textinput';
import RadioForm from 'react-native-simple-radio-button';
import RNFetchBlob from 'react-native-fetch-blob';

import { UF_MUNICIPIO, radio_localizacao, radio_loc_diferenciada } from './BdConfig';
import { exitApp } from '../../Util';

const Item = Picker.Item;

const dirs = RNFetchBlob.fs.dirs;
const fs = RNFetchBlob.fs;

var dir_base = dirs.DownloadDir.substring(0, dirs.DownloadDir.lastIndexOf('/') + 1);
var dir_file = dir_base + 'Ipea/IpeaSurvey/';

export default class Config extends Component {
    constructor(props) {
        super(props);

        let file_path = dir_file + 'config.json';
        fs.exists(file_path).then((exist) => {
            if(exist){
                fs.readFile(file_path, 'utf8').then((data) => {
                    console.log(data);
                });
            }
        });
    }

    state = {
        nome_aplicador: '',
        nome_entrevistado: '',
        selected_uf: 'ac',
        selected_municipio: 0,
        localidade: '',
        localizacao: '',
        loc_diferenciada: '',
        barragem: '',

        mode: Picker.MODE_DIALOG,
    }

    render() {
        let { nome_aplicador, nome_entrevistado, localidade, localizacao, loc_diferenciada, barragem } = this.state;

        var make = UF_MUNICIPIO[this.state.selected_uf];

        var config = {
            "nome_aplicador": nome_aplicador,
            "nome_entrevistado": nome_entrevistado,
            "uf": make.name,
            "municipio": make.municipios[this.state.selected_municipio],
            "localidade": localidade,
            "localizacao": localizacao,
            "loc_diferenciada": loc_diferenciada,
            "barragem": barragem
        };

        var createFileConfig = (content) => {
            var file_path = dir_file + 'config.json';
            var data = JSON.stringify(content);
            fs.exists(file_path).then((exist) => {
                if(exist){
                    fs.writeFile(file_path, data, 'utf8').then(() => {
                        ToastAndroid.showWithGravity('Configração salva', ToastAndroid.SHORT, ToastAndroid.CENTER);
                    });
                }else{
                    fs.createFile(file_path, data, 'utf8');
                    ToastAndroid.showWithGravity('Configração salva', ToastAndroid.SHORT, ToastAndroid.CENTER);
                }
            });
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
                            onValueChange={(selected_uf) => this.setState({selected_uf, selected_municipio: 0})}>
                            {Object.keys(UF_MUNICIPIO).map((selected_uf) => (
                                <Item
                                    key={selected_uf}
                                    value={selected_uf}
                                    label={UF_MUNICIPIO[selected_uf].name}
                                />
                            ))}
                        </Picker>
                        <Text style={styles.texttitle} >Município</Text>
                        <Picker
                            selectedValue={this.state.selected_municipio}
                            key={this.state.selected_uf}
                            onValueChange={(selected_municipio) => this.setState({selected_municipio})}>
                            {UF_MUNICIPIO[this.state.selected_uf].municipios.map((modelName, selected_municipio) => (
                                <Item
                                    key={this.state.selected_uf + '_' + selected_municipio}
                                    value={selected_municipio}
                                    label={modelName}
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
                            initial={null}
                            buttonColor={'#000000'}
                            buttonSize={8}
                            labelStyle={styles.radioLabel}
                            style={styles.radioForm}
                            onPress={(localizacao) => {this.setState({localizacao})}}
                        />
                        <Text style={styles.texttitle} >Localização diferenciada</Text>
                        <RadioForm
                            radio_props={radio_loc_diferenciada}
                            initial={null}
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
                        <Button style={{ marginTop: 10 }} onPress={()=> {
                            createFileConfig(config);
                        }}>
                            <Text>Salvar</Text>
                        </Button>
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
