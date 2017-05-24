import React, { Component } from 'react';
import { ToastAndroid, View } from 'react-native';
import { List, ListItem, Radio, Text } from 'native-base';
import { passQuestion } from './../business/PassQuestion';
import { styles } from './../../../Styles';

const Dimensions = require('Dimensions');
const window = Dimensions.get('window');

export default class ReplyRadio extends Component {
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

    render() {
        let selected = this.state.selected;
        let admin = this.state.admin;
        let quiz = this.state.quiz;
        let questao = this.state.questao;
        let idQuestao = 'questao_' + questao.id;
        let numeroQuestao = this.state.numeroQuestao;

        setQuestion = (value) => {
            if(quiz[idQuestao] === -1){
                ToastAndroid.showWithGravity('Questão desativada\nPasse para a questão ' + admin.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
            }else{
                this.setState({
                    selected: value
                });

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

        return (
            <List style={{flex: 1, flexDirection:'column'}}>
                {questao.opcoes.map(function(item, i){
                    return(
                        <ListItem key={i} style={{paddingLeft: 20}} onPress={() => {this.setQuestion(item.value)}}>
                            <View>
                                <Radio selected={selected === item.value} />
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
                    );
                })}
            </List>
        );
    }
}
