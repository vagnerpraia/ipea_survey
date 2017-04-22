import React, { Component } from 'react';
import { View } from 'react-native';
import { Body, Button, Left, List, ListItem, Icon, Right, Text } from 'native-base';
import FileStore from './../FileStore';

export default class ListMap extends Component {
    constructor(props) {
        super(props);

        this.state = {
            list: new Array(),
        }
    }

    componentWillMount(){
        if(this.props.items === 'quiz'){
            FileStore.getQuizList((result) => {
                this.state.list = result;
                //this.forceUpdate();
            });
        }
    }

    render() {
        return(
            <View>
                {this.state.list.map(function(object, i){
                    return(
                        <ListItem key={i}>
                            <Body>
                                <Text>{object}</Text>
                            </Body>
                            <Right>
                                <Button dark transparent onPress={() => {}}>
                                    <Icon name='md-trash' />
                                </Button>
                            </Right>
                        </ListItem>
                    );
                })}
            </View>
        );
    }
}
