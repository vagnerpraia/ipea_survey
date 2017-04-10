import React, { Component } from 'react';
import { StyleSheet, ToastAndroid, View } from 'react-native';
import { CheckBox, ListItem, Text } from 'native-base';

let model;
let passQuestion;
let businessQuestion;
let questao;

Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

export default class ReplyMultiSelect extends Component {
    constructor(props) {
        super(props);

        model = this.props.model;
        passQuestion = this.props.passQuestion;
        businessQuestion = this.props.businessQuestion;
        questao = this.props.questao;

        this.state = {
            selected: model.quiz['questao_' + questao.id]
        }
    }

    render() {
        let selected = this.state.selected;

        if(!Array.isArray(selected)){
            selected = new Array();
        }

        setQuestion = (value) => {
            let idQuestao = 'questao_' + questao.id;

            if(model.quiz[idQuestao] === -1){
                ToastAndroid.showWithGravity('Questão desativada\nPasse para a questão ' + model.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
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

                model.quiz[idQuestao] = this.state.selected;

                let numeroQuestao = Number(questao.id.replace(/\D/g,''));
                model.maxQuestion = numeroQuestao + 1;

                for(keyPass in passQuestion){
                    let item = passQuestion[keyPass];
                    if(item){
                        if(numeroQuestao == item.questao){
                            if(item.opcao.indexOf(value) >= 0){
                                model.maxQuestion = item.passe;
                                for (i = numeroQuestao + 1; i < item.passe; i++) {
                                    for(keyQuiz in model.quiz){
                                        if(keyQuiz.replace(/\D/g,'') == i){
                                            model.quiz[keyQuiz] = -1;
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
