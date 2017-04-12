import React, { Component } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { List, ListItem, Text } from 'native-base';
import { questions } from './content/Questions';

let id;
let model;
let indexPage;

export default class SideMenuQuiz extends Component {
    constructor(props) {
        super(props);

        id = this.props.id;
        model = this.props.model;
        indexPage = this.props.indexPage;
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
                                if(i < indexPage){
                                    model.saveFile(id, 'quiz', model.quiz);

                                    navigator.replacePreviousAndPop({
                                        name: 'quiz',
                                        id: id,
                                        model: model,
                                        indexPage: i,
                                        newQuiz: false
                                    });
                                }else if (i > indexPage) {
                                    model.saveFile(id, 'quiz', model.quiz);

                                    let idQuestao = 'questao_' + object.id;
                                    let numeroQuestao = object.id.replace(/\D/g,'');

                                    if(numeroQuestao <= model.maxQuestion){
                                        navigator.push({
                                            name: 'quiz',
                                            id: id,
                                            model: model,
                                            indexPage: i,
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
