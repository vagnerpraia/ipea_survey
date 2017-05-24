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

    setQuestion(value){
        let admin = this.state.admin;
        let quiz = this.state.quiz;
        let idQuestao = 'questao_' + this.state.questao.id;
        let numeroQuestao = this.state.numeroQuestao;

        if(quiz[idQuestao] === -1){
            ToastAndroid.showWithGravity('Questão desativada\nPasse para a questão ' + admin.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
        }else{
            quiz[idQuestao] = value;
            admin.maxQuestion = numeroQuestao + 1;

            for(key in passQuestion){
                if(numeroQuestao == passQuestion[key].questao){
                    let passe = passQuestion[key].passe;
                    if(passQuestion[key].opcao.indexOf(value) > -1){
                        this.state.admin.maxQuestion = passQuestion[key].passe;
                        for (i = numeroQuestao + 1; i < passe; i++) {
                            for(key in this.state.quiz){
                                if(key.replace(/\D/g,'') == i){
                                    this.state.quiz[key] = -1;
                                }
                            }
                        }
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
                    <Text style={styles.opcaoCurrency}>R$ </Text>
                    <TextInput
                        style={{width: 100, fontSize: 20}}
                        keyboardType = 'numeric'
                        onChangeText = {(value) => {
                            this.setQuestion(value);
                        }}
                        defaultValue = {this.state.selected}
                        maxLength = {10}
                    />
                </View>
            </View>
        );
    }
}
