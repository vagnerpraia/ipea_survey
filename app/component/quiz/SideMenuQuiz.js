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

    passQuestion(index, numeroQuestao){
        let navigator = this.props.navigator;

        if(index < admin.indexPage){
            admin.indexPage = index;
            navigator.replacePreviousAndPop({
                name: 'quiz',
                admin: admin,
                quiz: quiz,
                newQuiz: false
            });
        }else if (index > admin.indexPage) {
            if(numeroQuestao <= admin.maxQuestion){
                admin.indexPage = index;
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
    }

    render() {
        return (
            <ScrollView scrollsToTop={false}>
                <List>
                    <ListItem key={1} onPress={() => {this.passQuestion(0, 1)}}>
                        <Text>Questão 1</Text>
                    </ListItem>
                    <ListItem key={2} onPress={() => {this.passQuestion(1, 2)}}>
                        <Text>Questão 2</Text>
                    </ListItem>
                    <ListItem key={3} onPress={() => {this.passQuestion(2, 3)}}>
                        <Text>Questão 3</Text>
                    </ListItem>
                    <ListItem key={4} onPress={() => {this.passQuestion(3, 4)}}>
                        <Text>Questão 4</Text>
                    </ListItem>
                    <ListItem key={5} onPress={() => {this.passQuestion(4, 5)}}>
                        <Text>Questão 5</Text>
                    </ListItem>
                </List>
            </ScrollView>
        );
    }
};
