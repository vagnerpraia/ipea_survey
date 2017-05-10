import React, { Component } from 'react';
import { Alert, StyleSheet, ToastAndroid, View } from 'react-native';
import { Body, Button, Container, Content, Left, List, Header, Icon, ListItem, Picker, Radio, Text, Title } from 'native-base';
import RadioForm from 'react-native-simple-radio-button';
import RNFetchBlob from 'react-native-fetch-blob';

import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Sae } from 'react-native-textinput-effects';

import FileStore from './../../FileStore';
import IdentificacaoData from './../../data/IdentificacaoData';
import { UF_MUNICIPIO, radio_localizacao, radio_loc_diferenciada } from './BdIdentificacao';
import { styles } from './../../Styles';

const Item = Picker.Item;

const dirs = RNFetchBlob.fs.dirs;
const fs = RNFetchBlob.fs;

var dir_base = dirs.DownloadDir.substring(0, dirs.DownloadDir.lastIndexOf('/') + 1);
var dir_file = dir_base + 'Ipea/IpeaSurvey/';

export default class Identificacao extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mode: Picker.MODE_DIALOG,
            admin: this.props.admin,
            quiz: this.props.quiz
        }
    }

    componentWillMount(){
        if(this.state.quiz.identificacao === null){
            this.state.quiz.identificacao = new IdentificacaoData(this.state.admin.id);
        }

        let file_path_orign = dir_file + 'config.json';
        let file_path_dest = dir_file + this.state.quiz.identificacao.id + '/identificacao.json';

        fs.exists(file_path_dest).then((exist) => {
            if(exist){
                fs.readFile(file_path_dest, 'utf8').then((data) => {
                    let json = JSON.parse(data);

                    this.state.quiz.identificacao.nomeAplicador = json.nomeAplicador;
                    this.state.quiz.identificacao.nomeEntrevistado = json.nomeEntrevistado;
                    this.state.quiz.identificacao.estado = json.estado;
                    this.state.quiz.identificacao.municipio = json.municipio;
                    this.state.quiz.identificacao.localidade = json.localidade;
                    this.state.quiz.identificacao.localizacao = json.localizacao;
                    this.state.quiz.identificacao.localizacaoDiferenciada = json.localizacaoDiferenciada;
                    this.state.quiz.identificacao.barragem = json.barragem;

                    if(this.state.quiz.identificacao.estado == null) this.state.quiz.identificacao.estado = 'ac';
                    if(this.state.quiz.identificacao.municipio == null) this.state.quiz.identificacao.municipio = 0;

                    this.forceUpdate();
                });
            }else{
                let data = JSON.stringify(this.state.quiz.identificacao);
                fs.createFile(file_path_dest, data, 'utf8');

                fs.exists(file_path_orign).then((exist) => {
                    if(exist){
                        fs.readFile(file_path_orign, 'utf8').then((data) => {
                            let json = JSON.parse(data);

                            this.state.quiz.identificacao.nomeAplicador = json.nomeAplicador;
                            this.state.quiz.identificacao.nomeEntrevistado = json.nomeEntrevistado;
                            this.state.quiz.identificacao.estado = json.estado;
                            this.state.quiz.identificacao.municipio = json.municipio;
                            this.state.quiz.identificacao.localidade = json.localidade;
                            this.state.quiz.identificacao.localizacao = json.localizacao;
                            this.state.quiz.identificacao.localizacaoDiferenciada = json.localizacaoDiferenciada;
                            this.state.quiz.identificacao.barragem = json.barragem;

                            if(this.state.quiz.identificacao.estado == null) this.state.quiz.identificacao.estado = 'ac';
                            if(this.state.quiz.identificacao.municipio == null) this.state.quiz.identificacao.municipio = 0;

                            this.forceUpdate();
                        });
                    }
                });
            }
        });
    }

    voltar(){
        let data = JSON.stringify(this.state.quiz.identificacao);

        let file_path = dir_file + this.state.quiz.identificacao.id + 'config.json';
        FileStore.saveFileIdentificacao(this.state.quiz.identificacao);

        if(this.state.quiz.identificacao.nomeAplicador != null, this.state.quiz.identificacao.nomeEntrevistado != null,
        this.state.quiz.identificacao.estado != null, this.state.quiz.identificacao.municipio != null,
        this.state.quiz.identificacao.localidade != null, this.state.quiz.identificacao.localizacao != null,
        this.state.quiz.identificacao.localizacaoDiferenciada != null, this.state.quiz.identificacao.barragem != null){
            this.state.quiz.identificacao.completo = true;
        }

        this.props.navigator.replacePreviousAndPop({
            name: 'quiz',
            admin: this.state.admin,
            quiz: this.state.quiz,
            isOpen: false
        });
    }

    render() {
        let localizacao = this.state.quiz.identificacao.localizacao;
        let localizacaoDiferenciada = this.state.quiz.identificacao.localizacaoDiferenciada;

        let estado = this.state.quiz.identificacao.estado;
        let municipio = this.state.quiz.identificacao.municipio;

        if(estado == undefined || estado == null){
            estado = 'ac';
        }

        if(municipio == undefined || municipio == null){
            municipio = 0;
        }

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
                            <Title>Identificação</Title>
                        </View>
                    </Body>
                </Header>

                <Content>
                    <View style={styles.viewConfig}>
                        <View style={styles.viewQuestaoConfig}>
                            <Text style={styles.questaoConfig}>Nome do Aplicador</Text>
                            <Sae
                                label={''}
                                value={this.state.quiz.identificacao.nomeAplicador}
                                iconClass={FontAwesomeIcon}
                                iconName={'pencil'}
                                iconColor={'#808080'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                inputStyle={styles.respostaTextInput}
                                onChangeText={(value) => {
                                    this.state.quiz.identificacao.nome_aplicador = value
                                }}
                                style={{paddingLeft: 20}}
                            />
                        </View>

                        <View style={styles.viewQuestaoConfig}>
                            <Text style={styles.questaoConfig}>Nome do Entrevistado</Text>
                            <Sae
                                label={''}
                                value={this.state.quiz.identificacao.nomeEntrevistado}
                                iconClass={FontAwesomeIcon}
                                iconName={'pencil'}
                                iconColor={'#808080'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                inputStyle={styles.respostaTextInput}
                                onChangeText={(value) => {
                                    this.state.quiz.identificacao.nomeEntrevistado = value
                                }}
                            />
                        </View>

                        <View style={styles.viewQuestaoConfig}>
                            <Text style={styles.questaoConfig}>Estado</Text>
                            <Picker
                                selectedValue={this.state.quiz.identificacao.estado}
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
                                selectedValue={this.state.quiz.identificacao.municipio}
                                key={this.state.quiz.identificacao.estado}
                                onValueChange={(municipio) => this.setState({municipio})}>
                                {UF_MUNICIPIO[estado].municipios.map((modelName, municipio) => (
                                    <Item
                                        key={this.state.quiz.identificacao.estado + '_' + municipio}
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
                                value={this.state.quiz.identificacao.localidade}
                                iconClass={FontAwesomeIcon}
                                iconName={'pencil'}
                                iconColor={'#808080'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                inputStyle={styles.respostaTextInput}
                                onChangeText={(value) => {
                                    this.state.quiz.identificacao.localidade = value
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
                                value={this.state.quiz.identificacao.barragem}
                                iconClass={FontAwesomeIcon}
                                iconName={'pencil'}
                                iconColor={'#808080'}
                                autoCapitalize={'none'}
                                autoCorrect={false}
                                inputStyle={styles.respostaTextInput}
                                onChangeText={(value) => {
                                    this.state.quiz.identificacao.barragem = value
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
