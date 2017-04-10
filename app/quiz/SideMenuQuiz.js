import React, { Component } from 'react';
import { List, ListItem, Text } from 'native-base';
import { questions } from './content/Questions';

export default class SideMenuQuiz extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <List>
                {questions.map(function(object, i){
                    return(
                        <ListItem key={object.id} onPress={() => this.props.onItemSelected(object.id)}>
                            <Text>Questão {object.id}</Text>
                        </ListItem>
                    );
                })}
                <ListItem onPress={() => this.props.onItemSelected('Voltar')}>
                    <Text>Voltar</Text>
                </ListItem>
            </List>
        );
    }
};
