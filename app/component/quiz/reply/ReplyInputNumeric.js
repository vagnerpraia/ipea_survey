import React, { Component } from 'react';
import { StyleSheet, TextInput, ToastAndroid, View } from 'react-native';
import { Text } from 'native-base';
import { passQuestion } from './../business/PassQuestion';
import { styles } from './../../../Styles';

export default class ReplyInputNumeric extends Component {
    constructor(props) {
        super(props);

        this.state = {
            admin: this.props.admin,
            quiz: this.props.quiz,
            questao: this.props.questao,
        }
    }

    setQuestion(value){
        let admin = this.state.admin;
        let quiz = this.state.quiz;
        let idQuestao = 'questao_' + this.state.questao.id;
        let numeroQuestao = Number(this.state.questao.id.replace(/\D/g,''));

        if(quiz.domicilio[idQuestao] === -1){
            ToastAndroid.showWithGravity('Questão desativada\nPasse para a questão ' + admin.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
        }else{
            quiz.domicilio[idQuestao] = value;
            admin.maxQuestion = numeroQuestao + 1;

            for(key in passQuestion){
                let item = passQuestion[key];
                if(numeroQuestao == item.questao){
                    if(item.opcao.indexOf(value) >= 0){
                        admin.maxQuestion = item.passe;
                        for (i = numeroQuestao + 1; i < item.passe; i++) {
                            for(key in quiz.domicilio){
                                if(key.replace(/\D/g,'') == i){
                                    quiz.domicilio[key] = -1;
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
            <TextInput
                style={{width: 100}}
                keyboardType = 'numeric'
                onChangeText = {(value) => {
                    this.setQuestion(value);
                }}
                value = {null}
                maxLength = {2}
            />
        );
    }
}
