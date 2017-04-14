import React, { Component } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { List, ListItem, Text } from 'native-base';
import { questions } from './content/Questions';
import AppStore from './../store/AppStore';

let admin;

export default class SideMenuQuiz extends Component {
    constructor(props) {
        super(props);

        admin = this.props.admin;
    }

    render() {
        let onItemSelected = this.props.onItemSelected;
        let navigator = this.props.navigator;

        return (
            <ScrollView scrollsToTop={false}>
                <List>
                    {questions.map(function(object, i){
                        return(
                            <ListItem key={object.id} onPress={() => {
                                if(i < admin.indexPage){
                                    AppStore.saveQuiz();

                                    navigator.replacePreviousAndPop({
                                        name: 'quiz',
                                        admin: admin,
                                        newQuiz: false
                                    });
                                }else if (i > admin.indexPage) {
                                    AppStore.saveQuiz();

                                    let idQuestao = 'questao_' + object.id;
                                    let numeroQuestao = object.id.replace(/\D/g,'');

                                    if(numeroQuestao <= admin.maxQuestion){
                                        navigator.push({
                                            name: 'quiz',
                                            admin: admin,
                                            newQuiz: false
                                        });
                                    }else{
                                        ToastAndroid.showWithGravity('Responda a questão ' + model.maxQuestion, ToastAndroid.SHORT, ToastAndroid.CENTER);
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
