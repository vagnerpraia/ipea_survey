import React, { Component } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Text } from 'native-base';

import { passQuestion } from './business/PassQuestion';

let model;
let questao;

export default class ViewDomicilio extends Component {
    constructor(props) {
        super(props);

        model = this.props.model;
        questao = this.props.questao;
    }

    render() {
        setQuestion = (value) => {
            let idQuestao = 'questao_' + questao.id;
            if(model.quiz[idQuestao] === -1){
                ToastAndroid.showWithGravity('Questão desativada\nPasse para a questão ' + model.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
            }else{
                model.quiz[idQuestao] = value;

                let numeroQuestao = Number(questao.id.replace(/\D/g,''));
                model.maxQuestion = numeroQuestao + 1;

                for(key in passQuestion){
                    let item = passQuestion[key];
                    if(item){
                        if(numeroQuestao == item.questao){
                            if(item.opcao.indexOf(value) >= 0){
                                model.maxQuestion = item.passe;
                                for (i = numeroQuestao + 1; i < item.passe; i++) {
                                    for(key in model.quiz){
                                        if(key.replace(/\D/g,'') == i){
                                            model.quiz[key] = -1;
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
                <Text>Nome do aplicador</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(value) => {
                        this.setQuestion(value);
                    }}
                    value={model.quiz['question_' + questao.id]}
                />
            </View>
        );
    }
}
