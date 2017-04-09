import React, { Component } from 'react';
import { StyleSheet, ToastAndroid, View } from 'react-native';
import { CheckBox, ListItem, Text } from 'native-base';

let model;
let passQuestion;
let questao;

export default class ReplyMultiSelect extends Component {
    constructor(props) {
        super(props);

        model = this.props.model;
        passQuestion = this.props.passQuestion;
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
                this.setState({
                    selected: selected
                });

                model.quiz[idQuestao] = this.state.selected;

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
                {questao.opcoes.map(function(object, i){
                    return(
                        <ListItem key={object.value}>
                            <CheckBox checked={!Boolean(selected.indexOf(object.value))} onPress={() => {
                                this.setQuestion(object.value);
                            }} />
                            <Text onPress={() => {
                                this.setQuestion(object.value);
                            }}>
                                {object.label}
                            </Text>
                            <Text style={styles.note}>
                                {object.observacao}
                            </Text>
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
