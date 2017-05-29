import React, { Component } from 'react';
import { Alert, AsyncStorage, ToastAndroid, View } from 'react-native';
import { Body, Button, Container, Content, Header, Left, Text, Icon, Title } from 'native-base';

import AdminData from './../../data/AdminData';
import FileStore from './../../FileStore';
import QuizData from './../../data/QuizData';
import { styles } from './../../Styles';

import RNFetchBlob from 'react-native-fetch-blob';

const dirs = RNFetchBlob.fs.dirs;
const fs = RNFetchBlob.fs;

var dir_base = dirs.DownloadDir.substring(0, dirs.DownloadDir.lastIndexOf('/') + 1);
var dir_file = dir_base + 'Ipea/IpeaSurvey/';

export default class Quiz extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: 1,
            admin: this.props.admin,
            quiz: this.props.quiz,
            position: ''
        };
    }

    componentWillMount(){
        if((this.state.quiz === undefined || this.state.quiz === null) && (this.state.admin === undefined || this.state.admin === null)){
            let file_path = dir_file + 'admin.json';
            fs.exists(file_path).then((exist) => {
                if(exist){
                    fs.readFile(file_path, 'utf8').then((data) => {
                        let json = JSON.parse(data);
                        json.id = Number(json.id) + 1;
                        this.checkId(json.id);
                    });
                }else{
                    let data = '{"id": ' + this.state.id + '}';
                    fs.createFile(file_path, data, 'utf8');
                    this.state.admin = new AdminData(this.state.id);
                    this.state.quiz = new QuizData(this.state.id);
                }
            });
        }else if((this.state.quiz === undefined || this.state.quiz === null)){
            this.state.admin = AdminData.object(this.props.admin);
            this.state.quiz = new QuizData(this.state.admin.id);
            this.state.id = this.state.admin.id;
            FileStore.readQuiz(this.state.quiz, (result) => {
                this.state.quiz = result;
                this.forceUpdate();
            });
        }else{
            this.state.admin = AdminData.object(this.props.admin);
            this.state.id = this.state.admin.id;
            this.forceUpdate();
        }
    }

    componentDidMount() {
        let file_path = dir_file + 'Quiz/' + this.state.id + '/gps.json';
        fs.exists(file_path).then((exist) => {
            if(!exist){
                AsyncStorage.setItem('@IpeaSurvey:screen', 'quiz', () => {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            try {
                                let file_path = dir_file + 'Quiz/' + this.state.id + '/gps.json';
                                AsyncStorage.getItem('@IpeaSurvey:screen', (err, result) => {
                                    if(result == 'quiz'){
                                        fs.writeFile(file_path, JSON.stringify(position), 'utf8').then(() => {
                                            ToastAndroid.showWithGravity('Geolocalização capturada', ToastAndroid.SHORT, ToastAndroid.CENTER);
                                        });
                                    }
                                });
                            } catch (error) {
                                alert(JSON.stringify(error));
                            }
                        },
                        (error) => alert(JSON.stringify(error)),
                        {enableHighAccuracy: true, timeout: 50000, maximumAge: 1000}
                    );
                });
            }
        }).catch((error) => {
            console.log(error);
        });
    }

    checkId(id){
        let file_path = dir_file + 'Quiz/' + id;
        fs.exists(file_path).then((exist) => {
            if(exist){
                id = id + 1;
                this.checkId(id);
            }else{
                this.createId(id);
            }
        });
    }

    createId(id){
        this.state.id = id;
        let file_path = dir_file + 'admin.json';
        fs.writeFile(file_path, '{"id": ' + id + '}', 'utf8').then(() => {
            this.state.admin = new AdminData(this.state.id);
            this.state.quiz = new QuizData(this.state.id);
            this.forceUpdate();
        });
    }

    popScreen(){
        let quiz_path = dir_file + 'Quiz/' + this.state.id;
        let admin_path = dir_file + 'admin.json';
        fs.exists(quiz_path).then((exist) => {
            if(exist){
                this.props.navigator.replacePreviousAndPop({
                    name: 'home'
                });
            }else{
                let id = Number(this.state.id) - 1;
                fs.writeFile(admin_path, '{"id": ' + id + '}', 'utf8').then(() => {
                    this.props.navigator.replacePreviousAndPop({
                        name: 'home'
                    });
                });
            }
        });        
    }

    pushScreen(route){
        this.props.navigator.push({
            name: route,
            admin: this.state.admin,
            quiz: this.state.quiz
        });
    }

    cancelar(){
        Alert.alert(
            'Deseja cancelar este questionário?',
            alertMessage,
            [
                {
                    text: 'Sim', onPress: () => {
                        ToastAndroid.showWithGravity('Sim', ToastAndroid.SHORT, ToastAndroid.CENTER);
                    },
                },
                {
                    text: 'Não', onPress: () => {
                        ToastAndroid.showWithGravity('Não', ToastAndroid.SHORT, ToastAndroid.CENTER);
                    }
                }
            ]
        )
    }

    voltar(){
        let file_path = dir_file + 'Quiz/' + this.state.id;
        fs.ls(file_path).then((files) => {
            let flag_delete = true;
            files.forEach(function(file) {
                if(file != 'gps.json') flag_delete = false;
            });

            if(flag_delete){
                let file_path = dir_file + 'Quiz/' + this.state.id;
                fs.unlink(file_path).then(() => {
                    this.popScreen();
                }).catch((error) => {
                    console.log(error);
                    this.popScreen();
                });
            }

            this.popScreen();
        });
    }

    checkCompleto(segment){
        let result = styles.buttonIncompleto;
        if(this.state.quiz != null){
            if(segment == 'identificacao'){
                if(this.state.quiz.identificacao) if(this.state.quiz.identificacao.completo) result = styles.buttonCompleto;
            }else if(segment == 'domicilio'){
                if(this.state.quiz.domicilio) if(this.state.quiz.domicilio.completo) result = styles.buttonCompleto;
            }else if(segment == 'morador'){
                if(this.state.quiz.moradores){
                    let completo = true;
                    for(morador in this.state.quiz.moradores){
                        if(morador.completo === false){
                            completo = false;
                            break;
                        }
                    }
                    if(completo) result = styles.buttonCompleto;
                }
            }
        }
        return result;
    }

    render() {
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
                            <Title>Questionário</Title>
                        </View>
                    </Body>
                </Header>
                <Content>
                    <View style={styles.viewContentQuestionario}>
                        <Text style={styles.texLabeltViewContent}>Número do questionário:</Text>
                        <Text style={styles.textContentViewContent}>{this.state.id}</Text>
                    </View>
                    <Button full style={this.checkCompleto('identificacao')} onPress={() => {this.pushScreen('identificacao')}}>
                        <Icon name='md-finger-print' />
                        <Text style={styles.textButtonContent}>Identificação</Text>
                    </Button>

                    <Button full style={this.checkCompleto('domicilio')} onPress={() => {this.pushScreen('domicilio')}}>
                        <Icon name='md-home' />
                        <Text style={styles.textButtonContent}>Domicílio</Text>
                    </Button>

                    <Button full style={this.checkCompleto('morador')} onPress={() => {this.pushScreen('lista_moradores')}}>
                        <Icon name='md-contacts' />
                        <Text style={styles.textButtonContent}>Moradores</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
