import React, { Component } from 'react';
import { StyleSheet, ToastAndroid, View } from 'react-native';
import { ListItem, Radio, Text } from 'native-base';
import { passQuestion } from './../content/PassQuestion';

let admin;
let quiz;
let questao;

export default class ReplyRadio extends Component {
    constructor(props) {
        super(props);

        admin = this.props.admin;
        quiz = this.props.quiz;
        questao = this.props.questao;

        this.state = {
            selected: quiz['questao_' + questao.id]
        }
    }

    render() {
        let selected = this.state.selected;

        setQuestion = (value) => {
            let idQuestao = 'questao_' + questao.id;

            if(quiz.domicilio[idQuestao] === -1){
                ToastAndroid.showWithGravity('Questão desativada\nPasse para a questão ' + admin.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
            }else{
                this.setState({
                    selected: value
                });

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
                {questao.opcoes.map(function(object, i){
                    return(
                        <ListItem key={object.value}>
                            <Radio selected={selected === object.value} onPress={() => {
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
