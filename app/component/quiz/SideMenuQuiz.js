import React, { Component } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { List, ListItem, Text } from 'native-base';
import { questoes } from './../../data/Questoes';

let admin;
let quiz;

export default class SideMenuQuiz extends Component {
    constructor(props) {
        super(props);

        admin = this.props.admin;
        quiz = this.props.quiz;
    }

    render() {
        let onItemSelected = this.props.onItemSelected;
        let navigator = this.props.navigator;

        return (
            <ScrollView scrollsToTop={false}>
                <List>
                    {questoes.map(function(object, i){
                        return(
                            <ListItem key={object.id} onPress={() => {
                                if(i < admin.indexPage){
                                    admin.indexPage = i;
                                    navigator.replacePreviousAndPop({
                                        name: 'quiz',
                                        admin: admin,
                                        quiz: quiz,
                                        newQuiz: false
                                    });
                                }else if (i > admin.indexPage) {
                                    let idQuestao = 'questao_' + object.id;
                                    let numeroQuestao = object.id.replace(/\D/g,'');

                                    if(numeroQuestao <= admin.maxQuestion){
                                        admin.indexPage = i;
                                        navigator.push({
                                            name: 'quiz',
                                            admin: admin,
                                            quiz: quiz,
                                            newQuiz: false
                                        });
                                    }else{
                                        ToastAndroid.showWithGravity('Responda a questão ' + admin.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
                                    }
                                }
                            }}>
                                <Text>Questão {object.id}</Text>
                            </ListItem>
                        );
                    })}
                </List>
            </ScrollView>
        );
    }
};
