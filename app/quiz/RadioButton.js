import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { ListItem, Radio, Text } from 'native-base';

let modelQuiz;
let questao;

export default class RadioButton extends Component {
    constructor(props) {
        super(props);

        modelQuiz = this.props.model;
        block = this.props.block;
        questao = this.props.questao;

        this.state = {
            radioSelected: modelQuiz.quiz['questao_' + questao.id]
        }
    }

    render() {
        var radioSelected = this.state.radioSelected;

        onSelect = (value) => {
            this.setState({
                radioSelected: value
            });
            modelQuiz.quiz['questao_' + questao.id] = value;
            let idQuestao = Number(questao.id.replace(/\D/g,''));
            modelQuiz.maxQuestion = idQuestao + 1;
            for(key in block){
                let item = block[key];
                if(item){
                    if(idQuestao == item.questao){
                        if(item.opcao.indexOf(value) >= 0){
                            modelQuiz.block.push(item.bloqueio);
                            modelQuiz.maxQuestion = item.passe;
                        }
                    }
                }
            }
        }

        return (
            <View>
                {questao.opcoes.map(function(object, i){
                    return(
                        <ListItem key={object.value} onPress={() => {
                            this.onSelect(object.value);
                        }}>
                            <Radio selected={radioSelected === object.value} onPress={() => {
                                this.onSelect(object.value);
                            }} />
                            <Text onPress={() => {
                                this.onSelect(object.value);
                            }}>{object.label}</Text>
                        </ListItem>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
});
