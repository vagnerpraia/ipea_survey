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

    componentDidMount(){
        this.forceUpdate();
    }

    render() {
        let selected = this.state.selected;
        let admin = this.state.admin;
        let quiz = this.state.quiz;
        let questao = this.state.questao;
        let idQuestao = 'questao_' + questao.id;

        setQuestion = (value) => {
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
            <List dataArray={questao.opcoes}
                renderRow={(item) =>
                    <ListItem>
                        <View>
                            <Radio selected={selected === item.value} onPress={() => {this.setQuestion(item.value)}} />
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
