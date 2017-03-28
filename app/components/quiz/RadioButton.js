import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { ListItem, Radio, Text } from 'native-base';

export default class RadioButton extends Component {
    constructor(props) {
        super(props);

        this.state = {
            option: null
        };
    }

    option = 0;

    render() {

        setButton = function(){
            this.option = 0;
        };

        return(
            <View>
                {this.props.opcoes.map(function(item, index){
                    return(
                        <ListItem selected={this.option === item.value}>
                            <Text>{item.label}</Text>

                            <Radio
                                selected={this.option === item.value}
                                onPress={this.setButton()}
                            />
                        </ListItem>
                    )
                })}
            </View>
        );
    }
}
