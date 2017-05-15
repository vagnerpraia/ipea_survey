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
            selected: null,
        }
    }

    componentWillMount(){
        this.state.selected = this.props.quiz['questao_' + this.props.questao.id];

        this.state.quiz['questao_' + this.state.questao.id] = this.state.selected;
        //let numeroQuestao = Number(this.state.questao.id.replace(/\D/g,''));
        //this.state.admin.maxQuestion = numeroQuestao + 1;
    }

    setQuestion(value){
        let admin = this.state.admin;
        let quiz = this.state.quiz;
        let idQuestao = 'questao_' + this.state.questao.id;
        let numeroQuestao = Number(this.state.questao.id.replace(/\D/g,''));

        if(quiz[idQuestao] === -1){
            ToastAndroid.showWithGravity('Questão desativada\nPasse para a questão ' + admin.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
        }else{
            quiz[idQuestao] = value;
            admin.maxQuestion = numeroQuestao + 1;

            for(key in passQuestion){
                let item = passQuestion[key];
                if(numeroQuestao == item.questao){
                    if(item.opcao.indexOf(value) >= 0){
                        admin.maxQuestion = item.passe;
                        for (i = numeroQuestao + 1; i < item.passe; i++) {
                            for(key in quiz){
                                if(key.replace(/\D/g,'') == i){
                                    quiz[key] = -1;
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
                style={{width: 600, fontSize: 20}}
                keyboardType = 'default'
                onChangeText = {(value) => {
                    this.setQuestion(value);
                }}
                defaultValue = {this.state.selected}
                maxLength = {200}
            />
        );
    }
}
