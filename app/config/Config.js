import React, { Component } from 'react';
import { Navigator, StyleSheet, View } from 'react-native';
import { Container, Content, List, ListItem, Text, Icon, Badge } from 'native-base';

import HeaderApp from '../HeaderApp';
import { exitApp } from '../Util';

export default class Config extends Component {
    render() {
        var nav = this.props.navigator;

        return (
            <View>
                <HeaderApp navigator={nav} />
                <Container style={styles.container}>
                    <Content>
                        <Text style={styles.text}>Config 1</Text>
                        <Text style={styles.text}>Config 2</Text>
                        <Text style={styles.text}>Config 3</Text>
                        <Text style={styles.text}>Config 4</Text>
                        <Text style={styles.text}>Config 5</Text>
                    </Content>
                </Container>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
});
