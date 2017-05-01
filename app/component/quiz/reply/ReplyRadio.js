import React, { Component } from 'react';
import { StyleSheet, ToastAndroid, View } from 'react-native';
import { Body, Left, List, ListItem, Radio, Text } from 'native-base';
import { passQuestion } from './../business/PassQuestion';
import { styles } from './../../../Styles';

export default class ReplyRadio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            admin: this.props.admin,
            quiz: this.props.quiz,
            questao: this.props.questao,
            selected: this.props.quiz.domicilio['questao_' + this.props.questao.id],
        }
    }

    setQuestion(value){
        let idQuestao = 'questao_' + value;

        if(this.state.quiz.domicilio[idQuestao] === -1){
            ToastAndroid.showWithGravity('Questão desativada\nPasse para a questão ' + this.state.admin.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
        }else{
            this.state.selected = value;
            this.state.quiz.domicilio[idQuestao] = value;

            let numeroQuestao = Number(String(value).replace(/\D/g,''));
            this.state.admin.maxQuestion = numeroQuestao + 1;

            for(key in passQuestion){
                let item = passQuestion[key];
                if(item){
                    if(numeroQuestao == item.questao){
                        if(item.opcao.indexOf(value) >= 0){
                            this.state.admin.maxQuestion = item.passe;
                            for (i = numeroQuestao + 1; i < item.passe; i++) {
                                for(key in this.state.quiz.domicilio){
                                    if(key.replace(/\D/g,'') == i){
                                        this.state.quiz.domicilio[key] = -1;
                                    }
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
            <List dataArray={this.state.questao.opcoes}
                renderRow={(item) =>
                    <ListItem style={{paddingLeft: 20}} onPress={() => {this.setQuestion(item.value)}}>
                        <View>
                            <Radio selected={this.state.selected === item.value} />
                        </View>
                        <View style={styles.opcaoView}>
                            <View>
                                <Text style={styles.opcaoTexto}>{item.label}</Text>
                            </View>
                            <View>
                                <Text note style={styles.opcaoObservacao}>{item.observacao}</Text>
                            </View>
                        </View>
                    </ListItem>
                }>
            </List>
        );
    }
}
