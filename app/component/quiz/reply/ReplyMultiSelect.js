import React, { Component } from 'react';
import { StyleSheet, ToastAndroid, View } from 'react-native';
import { CheckBox, ListItem, Text } from 'native-base';

import { businessQuestion } from './../business/BusinessQuestion';
import { passQuestion } from './../business/PassQuestion';

let admin;
let quiz;
let questao;

Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

export default class ReplyMultiSelect extends Component {
    constructor(props) {
        super(props);

        admin = this.props.admin;
        quiz = this.props.quiz;
        questao = this.props.questao;

        this.state = {
            selected: quiz.domicilio['questao_' + questao.id]
        }
    }

    render() {
        let selected = this.state.selected;

        if(!Array.isArray(selected)){
            selected = new Array();
        }

        setQuestion = (value) => {
            let idQuestao = 'questao_' + questao.id;

            if(quiz.domicilio[idQuestao] === -1){
                ToastAndroid.showWithGravity('Questão desativada\nPasse para a questão ' + admin.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
            }else{
                if(selected.indexOf(value) >= 0){
                    selected.remove(selected.indexOf(value));
                }else{
                    selected.push(value);
                }

                for(keyBusiness in businessQuestion){
                    let business = businessQuestion[keyBusiness];
                    if(typeof business === 'object'){
                        if(business.opcao.indexOf(value) >= 0){
                            for(keyBloqueio in business.bloqueio){
                                let bloqueio = business.bloqueio[keyBloqueio];
                                if(selected.indexOf(bloqueio) >= 0){
                                    selected.remove(selected.indexOf(bloqueio));
                                }
                            }
                        }
                    }
                }

                this.setState({
                    selected: selected
                });

                quiz.domicilio[idQuestao] = this.state.selected;

                let numeroQuestao = Number(questao.id.replace(/\D/g,''));
                admin.maxQuestion = numeroQuestao + 1;

                for(keyPass in passQuestion){
                    let item = passQuestion[keyPass];
                    if(item){
                        if(numeroQuestao == item.questao){
                            if(item.opcao.indexOf(value) >= 0){
                                admin.maxQuestion = item.passe;
                                for (i = numeroQuestao + 1; i < item.passe; i++) {
                                    for(keyQuiz in quiz.domicilio){
                                        if(keyQuiz.replace(/\D/g,'') == i){
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
                {questao.opcoes.map(function(object, i){
                    return(
                        <ListItem key={object.value}>
                            <CheckBox checked={selected.indexOf(object.value) >= 0} onPress={() => {
                                this.setQuestion(object.value);
                            }} />
                            <View>
                                <Text onPress={() => {
                                    this.setQuestion(object.value);
                                }}>
                                    {object.label}
                                </Text>
                                <Text style={styles.note}>
                                    {object.observacao}
                                </Text>
                            </View>
                        </ListItem>
                    );
                })}
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
