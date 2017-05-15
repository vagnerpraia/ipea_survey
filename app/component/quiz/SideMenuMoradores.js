import React, { Component } from 'react';
import { ScrollView, ToastAndroid } from 'react-native';
import { List, ListItem, Text } from 'native-base';

let admin;
let quiz;

export default class SideMenuMoradores extends Component {
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
                name: 'morador',
                admin: admin,
                quiz: quiz
            });
        }else if (index > admin.indexPage) {
            if(numeroQuestao <= admin.maxQuestion){
                admin.indexPage = index;
                navigator.push({
                    name: 'morador',
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
                    <ListItem key={6} onPress={() => {this.passQuestion(5, 6)}}>
                        <Text>Questão 6</Text>
                    </ListItem>
                    <ListItem key={7} onPress={() => {this.passQuestion(6, 7)}}>
                        <Text>Questão 7</Text>
                    </ListItem>
                    <ListItem key={8} onPress={() => {this.passQuestion(7, 8)}}>
                        <Text>Questão 8</Text>
                    </ListItem>
                    <ListItem key={9} onPress={() => {this.passQuestion(8, 9)}}>
                        <Text>Questão 9</Text>
                    </ListItem>
                    <ListItem key={10} onPress={() => {this.passQuestion(9, 10)}}>
                        <Text>Questão 10</Text>
                    </ListItem>
                    <ListItem key={11} onPress={() => {this.passQuestion(10, 11)}}>
                        <Text>Questão 11</Text>
                    </ListItem>
                    <ListItem key={12} onPress={() => {this.passQuestion(11, 12)}}>
                        <Text>Questão 12</Text>
                    </ListItem>
                    <ListItem key={13} onPress={() => {this.passQuestion(12, 13)}}>
                        <Text>Questão 13</Text>
                    </ListItem>
                    <ListItem key={14} onPress={() => {this.passQuestion(13, 14)}}>
                        <Text>Questão 14</Text>
                    </ListItem>
                    <ListItem key={15} onPress={() => {this.passQuestion(14, 15)}}>
                        <Text>Questão 15</Text>
                    </ListItem>
                    <ListItem key={16} onPress={() => {this.passQuestion(15, 16)}}>
                        <Text>Questão 16</Text>
                    </ListItem>
                    <ListItem key={17} onPress={() => {this.passQuestion(16, 17)}}>
                        <Text>Questão 17</Text>
                    </ListItem>
                    <ListItem key={18} onPress={() => {this.passQuestion(17, 18)}}>
                        <Text>Questão 18</Text>
                    </ListItem>
                    <ListItem key={19} onPress={() => {this.passQuestion(18, 19)}}>
                        <Text>Questão 19</Text>
                    </ListItem>
                    <ListItem key={20} onPress={() => {this.passQuestion(19, 20)}}>
                        <Text>Questão 20</Text>
                    </ListItem>
                    <ListItem key={21} onPress={() => {this.passQuestion(20, 21)}}>
                        <Text>Questão 21</Text>
                    </ListItem>
                    <ListItem key={22} onPress={() => {this.passQuestion(21, 22)}}>
                        <Text>Questão 22</Text>
                    </ListItem>
                    <ListItem key={23} onPress={() => {this.passQuestion(22, 23)}}>
                        <Text>Questão 23</Text>
                    </ListItem>
                </List>
            </ScrollView>
        );
    }
};
