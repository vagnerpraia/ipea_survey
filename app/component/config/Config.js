import React, { Component } from 'react';
import { Alert, StyleSheet, ToastAndroid, View } from 'react-native';
import { Body, Button, Container, Content, Left, List, Header, Icon, ListItem, Picker, Radio, Text, Title } from 'native-base';
import RadioForm from 'react-native-simple-radio-button';
import RNFetchBlob from 'react-native-fetch-blob';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

import { UF_MUNICIPIO, radio_localizacao, radio_loc_diferenciada } from './BdConfig';
import { styles } from './../../Styles';

const Item = Picker.Item;

const dirs = RNFetchBlob.fs.dirs;
const fs = RNFetchBlob.fs;

var dir_base = dirs.DownloadDir.substring(0, dirs.DownloadDir.lastIndexOf('/') + 1);
var dir_file = dir_base + 'Ipea/IpeaSurvey/';

export default class Config extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nomeAplicador: '',
            nomeEntrevistado: '',
            estado: 'ac',
            municipio: 0,
            localidade: '',
            localizacao: null,
            localizacaoDiferenciada: null,
            barragem: '',

            mode: Picker.MODE_DIALOG,
        }
    }

    componentWillMount(){
        let file_path = dir_file + 'config.json';
        fs.exists(file_path).then((exist) => {
            if(exist){
                fs.readFile(file_path, 'utf8').then((data) => {
                    let json = JSON.parse(data);

                    this.state.nomeAplicador = json.nomeAplicador;
                    this.state.nomeEntrevistado = json.nomeEntrevistado;
                    this.state.estado = json.estado;
                    this.state.municipio = json.municipio;
                    this.state.localidade = json.localidade;
                    this.state.localizacao = json.localizacao;
                    this.state.localizacaoDiferenciada = json.localizacaoDiferenciada;
                    this.state.barragem = json.barragem;

                    if(this.state.estado == undefined) this.state.estado = 'ac';
                    if(this.state.municipio == undefined) this.state.municipio = 0;

                    this.forceUpdate();
                });
            }
        });
    }

    voltar(){
        let content = {
            "nomeAplicador": this.state.nomeAplicador,
            "nomeEntrevistado": this.state.nomeEntrevistado,
            "estado": this.state.estado,
            "municipio": this.state.municipio,
            "localidade": this.state.localidade,
            "localizacao": this.state.localizacao,
            "localizacaoDiferenciada": this.state.localizacaoDiferenciada,
            "barragem": this.state.barragem
        };

        let data = JSON.stringify(content);

        let file_path = dir_file + 'config.json';
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

        this.props.navigator.replacePreviousAndPop({
            name: 'home'
        });
    }

    render() {
        let localizacao = this.state.localizacao;
        let localizacaoDiferenciada = this.state.localizacaoDiferenciada;

        setLocalizacao = (value) => {
            this.setState({
                localizacao: value
            });
        }

        setLocalizacaoDiferenciada = (value) => {
            this.setState({
                localizacaoDiferenciada: value
            });
        }

        return (
            <Container style={styles.container}>
                <Header style={styles.header}>
                    <Left>
                        <Button transparent onPress={() => {this.voltar()}}>
                            <Icon name='ios-arrow-back' />
                        </Button>
                    </Left>
                    <Body style={styles.bodyHeader}>
                        <View>
                            <Title>Configuração</Title>
                        </View>
                    </Body>
                </Header>

                <Content>
                    <View style={styles.viewConfig}>
                        <View style={styles.viewQuestaoConfig}>
                            <Text style={styles.questaoConfig}>Nome do Aplicador</Text>
                            <Sae
                                label={''}
                                value={this.state.nomeAplicador}
                                iconClass={FontAwesomeIcon}
                                iconName={'pencil'}
                                iconColor={'#808080'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                inputStyle={styles.respostaTextInput}
                                onChangeText={(value) => {
                                    this.state.nomeAplicador = value
                                }}
                                style={{paddingLeft: 20}}
                            />
                        </View>

                        <View style={styles.viewQuestaoConfig}>
                            <Text style={styles.questaoConfig}>Nome do Entrevistado</Text>
                            <Sae
                                label={''}
                                value={this.state.nomeEntrevistado}
                                iconClass={FontAwesomeIcon}
                                iconName={'pencil'}
                                iconColor={'#808080'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                inputStyle={styles.respostaTextInput}
                                onChangeText={(value) => {
                                    this.state.nomeEntrevistado = value
                                }}
                            />
                        </View>

                        <View style={styles.viewQuestaoConfig}>
                            <Text style={styles.questaoConfig}>Estado</Text>
                            <Picker
                                selectedValue={this.state.estado}
                                onValueChange={(estado) => this.setState({estado, municipio: 0})}>
                                {Object.keys(UF_MUNICIPIO).map((estado) => (
                                    <Item
                                        key={estado}
                                        value={estado}
                                        label={UF_MUNICIPIO[estado].name}
                                    />
                                ))}
                            </Picker>
                        </View>

                        <View style={styles.viewQuestaoConfig}>
                            <Text style={styles.questaoConfig}>Município</Text>
                            <Picker
                                selectedValue={this.state.municipio}
                                key={this.state.estado}
                                onValueChange={(municipio) => this.setState({municipio})}>
                                {UF_MUNICIPIO[this.state.estado].municipios.map((modelName, municipio) => (
                                    <Item
                                        key={this.state.estado + '_' + municipio}
                                        value={municipio}
                                        label={modelName}
                                    />
                                ))}
                            </Picker>
                        </View>

                        <View style={styles.viewQuestaoConfig}>
                            <Text style={styles.questaoConfig}>Localidade</Text>
                            <Sae
                                label={''}
                                value={this.state.localidade}
                                iconClass={FontAwesomeIcon}
                                iconName={'pencil'}
                                iconColor={'#808080'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                inputStyle={styles.respostaTextInput}
                                onChangeText={(value) => {
                                    this.state.localidade = value
                                }}
                            />
                        </View>

                        <View style={styles.viewQuestaoConfig}>
                            <Text style={styles.questaoConfig}>Localização/Zona</Text>
                            <List style={{flex: 1, flexDirection:'column'}}>
                                {radio_localizacao.map(function(item, i){
                                    return(
                                        <ListItem key={i} style={{paddingLeft: 20}}  onPress={() => {
                                            this.setLocalizacao(item.value)
                                        }}>
                                            <View>
                                                <Radio selected={localizacao === item.value} />
                                            </View>
                                            <View style={styles.opcaoView}>
                                                <View>
                                                    <Text style={styles.opcaoTexto}>{item.label}</Text>
                                                </View>
                                                <View>
                                                    <Text note style={styles.opcaoObservacao}>{item.observacao}</Text>
                                                </View>
                                            </View>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </View>

                        <View style={styles.viewQuestaoConfig}>
                            <Text style={styles.questaoConfig}>Localização diferenciada</Text>
                            <List style={{flex: 1, flexDirection:'column'}}>
                                {radio_loc_diferenciada.map(function(item, i){
                                    return(
                                        <ListItem key={i} style={{paddingLeft: 20}}  onPress={() => {
                                            this.setLocalizacaoDiferenciada(item.value)
                                        }}>
                                            <View>
                                                <Radio selected={localizacaoDiferenciada === item.value} />
                                            </View>
                                            <View style={styles.opcaoView}>
                                                <View>
                                                    <Text style={styles.opcaoTexto}>{item.label}</Text>
                                                </View>
                                                <View>
                                                    <Text note style={styles.opcaoObservacao}>{item.observacao}</Text>
                                                </View>
                                            </View>
                                        </ListItem>
                                    );
                                })}
                            </List>
                        </View>

                        <View style={styles.viewQuestaoConfig}>
                            <Text style={styles.questaoConfig}>Barragem</Text>
                            <Sae
                                label={''}
                                value={this.state.barragem}
                                iconClass={FontAwesomeIcon}
                                iconName={'pencil'}
                                iconColor={'#808080'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                inputStyle={styles.respostaTextInput}
                                onChangeText={(value) => {
                                    this.state.barragem = value
                                }}
                            />
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}

const styles2 = StyleSheet.create({
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
