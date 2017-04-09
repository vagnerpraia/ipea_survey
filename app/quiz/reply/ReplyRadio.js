import React, { Component } from 'react';
import { StyleSheet, ToastAndroid, View } from 'react-native';
import { ListItem, Radio, Text } from 'native-base';

let model;
let passQuestion;
let questao;

export default class ReplyRadio extends Component {
    constructor(props) {
        super(props);

        model = this.props.model;
        passQuestion = this.props.passQuestion;
        questao = this.props.questao;

        this.state = {
            radioSelected: model.quiz['questao_' + questao.id]
        }
    }

    render() {
        let radioSelected = this.state.radioSelected;

        setQuestion = (value) => {
            let idQuestao = 'questao_' + questao.id;
            console.log('idQuestao: ' + idQuestao);
            if(model.quiz[idQuestao] === -1){
                ToastAndroid.showWithGravity('Questão desativada\nPasse para a questão ' + model.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
            }else{
                this.setState({
                    radioSelected: value
                });
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
                {questao.opcoes.map(function(object, i){
                    return(
                        <ListItem key={object.value}>
                            <Radio selected={radioSelected === object.value} onPress={() => {
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
