import React, { Component } from 'react';
import { StyleSheet, TextInput, ToastAndroid, View } from 'react-native';
import { Text } from 'native-base';
import { passQuestion } from './../business/PassQuestion';

let admin;
let quiz;
let questao;

export default class ReplyInputNumeric extends Component {
    constructor(props) {
        super(props);

        admin = this.props.admin;
        quiz = this.props.quiz;
        questao = this.props.questao;
    }

    render() {
        setQuestion = (value) => {
            let idQuestao = 'questao_' + questao.id;
            if(quiz.domicilio[idQuestao] === -1){
                ToastAndroid.showWithGravity('Questão desativada\nPasse para a questão ' + admin.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
            }else{
                quiz.domicilio[idQuestao] = value;

                let numeroQuestao = Number(questao.id.replace(/\D/g,''));
                admin.maxQuestion = numeroQuestao + 1;

                for(key in passQuestion){
                    let item = passQuestion[key];
                    if(item){
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
        }

        return (
            <View>
                <TextInput
                    style={styles.textInputNumeric}
                    keyboardType = 'numeric'
                    onChangeText = {(value) => {
                        this.setQuestion(value);
                    }}
                    value = {null}
                    maxLength = {2}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    note: {
        fontSize: 14,
        color: 'gray',
    },
});
