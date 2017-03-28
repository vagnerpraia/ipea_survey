import React, { Component } from 'react';
import { List, ListItem, Text } from 'native-base';

export default class SideMenuApp extends Component {
    render() {
        return (
            <List>
                <ListItem>
                    <Text>Item 1</Text>
                </ListItem>
                <ListItem>
                    <Text>Item 2</Text>
                </ListItem>
                <ListItem>
                    <Text>Item 3</Text>
                </ListItem>
            </List>
        );
    }
}
