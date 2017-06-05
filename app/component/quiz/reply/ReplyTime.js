import React, { Component } from 'react';
import { StyleSheet, TextInput, ToastAndroid, View } from 'react-native';
import { Text } from 'native-base';

import { styles } from './../../../Styles';

export default class ReplyTime extends Component {
    constructor(props) {
        super(props);

        this.state = {
            admin: this.props.admin,
            quiz: this.props.quiz,
            questao: this.props.questao,
            selected: null,
            numeroQuestao: 1
        }
    }

    componentWillMount(){
        this.state.selected = this.state.quiz['questao_' + this.state.questao.id];
        this.state.numeroQuestao = Number(this.state.questao.id.replace(/\D/g,''));

        if(this.state.selected != null){
            this.state.admin.maxQuestion = this.state.numeroQuestao + 1;
        }
    }

    setHoras(value){
        let passQuestion = this.props.passQuestion;
        let admin = this.state.admin;
        let quiz = this.state.quiz;
        let idQuestao = 'questao_' + this.state.questao.id;
        let numeroQuestao = this.state.numeroQuestao;

        if(quiz[idQuestao] === -1){
            ToastAndroid.showWithGravity('Questão desativada\nPasse para a questão ' + admin.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
        }else{
            quiz[idQuestao] = value + ':' + quiz[idQuestao].split(':')[1];
            console.log(quiz[idQuestao]);
            admin.maxQuestion = numeroQuestao + 1;

            for(key in passQuestion){
                if(numeroQuestao == passQuestion[key].questao){
                    let passe = passQuestion[key].passe;
                    if(quiz[idQuestao] != '' && passQuestion[key].opcao.indexOf(Number(quiz[idQuestao])) > -1){
                        this.state.admin.maxQuestion = passQuestion[key].passe;
                        for (i = numeroQuestao + 1; i < passe; i++) {
                            for(key in this.state.quiz){
                                if(key.replace(/\D/g,'') == i){
                                    this.state.quiz[key] = -1;
                                }
                            }
                        }
                        break;
                    }else{
                        for (i = numeroQuestao + 1; i < passe; i++) {
                            for(key in this.state.quiz){
                                if(key.replace(/\D/g,'') == i){
                                    this.state.quiz[key] = null;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    setMinutos(value){
        let passQuestion = this.props.passQuestion;
        let admin = this.state.admin;
        let quiz = this.state.quiz;
        let idQuestao = 'questao_' + this.state.questao.id;
        let numeroQuestao = this.state.numeroQuestao;

        if(quiz[idQuestao] === -1){
            ToastAndroid.showWithGravity('Questão desativada\nPasse para a questão ' + admin.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
        }else{
            quiz[idQuestao] = quiz[idQuestao].split(':')[0] + ':' + value;
            console.log(quiz[idQuestao]);
            admin.maxQuestion = numeroQuestao + 1;

            for(key in passQuestion){
                if(numeroQuestao == passQuestion[key].questao){
                    let passe = passQuestion[key].passe;
                    if(quiz[idQuestao] != '' && passQuestion[key].opcao.indexOf(Number(quiz[idQuestao])) > -1){
                        this.state.admin.maxQuestion = passQuestion[key].passe;
                        for (i = numeroQuestao + 1; i < passe; i++) {
                            for(key in this.state.quiz){
                                if(key.replace(/\D/g,'') == i){
                                    this.state.quiz[key] = -1;
                                }
                            }
                        }
                        break;
                    }else{
                        for (i = numeroQuestao + 1; i < passe; i++) {
                            for(key in this.state.quiz){
                                if(key.replace(/\D/g,'') == i){
                                    this.state.quiz[key] = null;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    render() {
        return (
            <View style={styles.opcaoView}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={styles.opcaoCurrency}>Horas: </Text>
                    <TextInput
                        style={{width: 40, fontSize: 20}}
                        keyboardType = 'default'
                        onChangeText = {(value) => {
                            this.setHoras(value);
                        }}
                        defaultValue = {this.state.selected}
                        maxLength = {2}
                    />
                    <Text style={styles.opcaoCurrency}>Minutos: </Text>
                    <TextInput
                        style={{width: 40, fontSize: 20}}
                        keyboardType = 'default'
                        onChangeText = {(value) => {
                            this.setMinutos(value);
                        }}
                        defaultValue = {this.state.selected}
                        maxLength = {2}
                    />
                </View>
            </View>
        );
    }
}
