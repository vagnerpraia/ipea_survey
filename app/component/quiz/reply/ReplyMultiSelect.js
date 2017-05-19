import React, { Component } from 'react';
import { StyleSheet, ToastAndroid, View } from 'react-native';
import { CheckBox, ListItem, Text } from 'native-base';

import { businessQuestion } from './../business/BusinessQuestion';
import { passQuestion } from './../business/PassQuestion';
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
            selected: this.props.quiz['questao_' + this.props.questao.id],
        }
    }

    render() {
        let selected = this.state.selected;
        let admin = this.state.admin;
        let quiz = this.state.quiz;
        let questao = this.state.questao;
        let idQuestao = 'questao_' + questao.id;
        let numeroQuestao = Number(questao.id.replace(/\D/g,''));

        if(!Array.isArray(selected)){
            selected = new Array();
        }

        setQuestion = (value) => {
            if(this.state.quiz[idQuestao] === -1){
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

                quiz[idQuestao] = selected;
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
            <View style={{paddingLeft: 20}}>
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
