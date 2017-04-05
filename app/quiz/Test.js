import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, TextInput, ToastAndroid, View } from 'react-native';
import { Button, Card, CardItem, Container, Content, DeckSwiper, Footer, FooterTab, Header, Icon, Text, Title } from 'native-base';

export default class Test extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Test</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(value) => {
                        this.props.test = value;
                    }}
                    value={this.props.test}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
});
