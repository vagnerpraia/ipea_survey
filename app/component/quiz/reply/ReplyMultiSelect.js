import React, { Component } from 'react';
import { StyleSheet, ToastAndroid, View } from 'react-native';
import { CheckBox, ListItem, Text } from 'native-base';

import { businessQuestion } from './../business/BusinessQuestion';
import { styles } from './../../../Styles';

Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};

export default class ReplyMultiSelect extends Component {
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

            let passQuestion = this.props.passQuestion;
            for(k in this.state.selected){
                let value = this.state.selected;
                for(key in passQuestion){
                    let passe = passQuestion[key];
                    if(numeroQuestao == passe.questao){
                        if(value != '' && passe.opcao.indexOf(Number(value)) > -1){
                            this.state.admin.maxQuestion = passe.passe;
                            for (i = numeroQuestao + 1; i < passe; i++) {
                                for(key in this.state.quiz){
                                    if(key.replace(/\D/g,'') == i){
                                        this.state.quiz[key] = -1;
                                    }
                                }
                            }
                            break;
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
    }

    render() {
        let selected = this.state.selected;
        let admin = this.state.admin;
        let quiz = this.state.quiz;
        let questao = this.state.questao;
        let idQuestao = 'questao_' + questao.id;
        let numeroQuestao = this.state.numeroQuestao;

        if(!Array.isArray(selected)){
            selected = new Array();
        }

        setQuestion = (value) => {
            let passQuestion = this.props.passQuestion;
            if(this.state.quiz[idQuestao] === -1){
                ToastAndroid.showWithGravity('Questão desativada\nPasse para a questão ' + admin.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
            }else{
                if(selected.indexOf(value) >= 0){
                    selected.remove(selected.indexOf(value));
                }else{
                    selected.push(value);
                }

                for(key_question in businessQuestion){
                    let business = businessQuestion[key_question];
                    if(business.questao == questao.id && business.opcao.indexOf(value) > -1){
                        for(key_business in business.bloqueio){
                            let idx = selected.indexOf(business.bloqueio[key_business]);
                            if(idx > -1){
                                selected.remove(idx);
                            }
                        }
                        break;
                    }
                }

                this.setState({
                    selected: selected
                });

                quiz[idQuestao] = selected;
                admin.maxQuestion = numeroQuestao + 1;

                for(key in passQuestion){
                    let passe = passQuestion[key];
                    if(numeroQuestao == passe.questao){
                        if(value != '' && passe.opcao.indexOf(Number(value)) > -1){
                            this.state.admin.maxQuestion = passe.passe;
                            for (i = numeroQuestao + 1; i < passe; i++) {
                                for(key in this.state.quiz){
                                    if(key.replace(/\D/g,'') == i){
                                        this.state.quiz[key] = -1;
                                    }
                                }
                            }
                            break;
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
            <View style={{paddingLeft: 20, flex: 1, flexDirection:'column'}}>
                {this.state.questao.opcoes.map(function(object, i){
                    return(
                        <ListItem key={i}>
                            <CheckBox style={{borderColor: '#000000'}} checked={selected.indexOf(object.value) >= 0} onPress={() => {this.setQuestion(object.value)}} />
                            <View style={styles.opcaoView}>
                                <View>
                                    <Text style={styles.opcaoTexto} onPress={() => {this.setQuestion(object.value)}}>{object.label}</Text>
                                </View>
                                <View>
                                    <Text style={styles.opcaoObservacao}>{object.observacao}</Text>
                                </View>
                            </View>
                        </ListItem>
                    );
                })}
            </View>
        );
    }
}
