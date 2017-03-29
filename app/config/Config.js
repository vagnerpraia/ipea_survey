import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Container, Content, Header, Icon, ListItem, Text, Title, Radio, Right } from 'native-base';
import TextField from 'react-native-md-textinput';
import Selection from 'react-native-selection';

import { exitApp } from '../Util';

export default class Config extends Component {
    returnDataOnSelection(e){
        alert('Value : ' + e.value + ' Name : ' + e.name);
    }
    render() {
      const uf = [
          {
            name: 'RJ',
            value: 1,
          },
          {
            name: 'RN',
            value: 2,
          },
          {
            name: 'RO',
            value: 3,
          },
        ];

        const municipio = [
          {
            name: 'Rio de Janeiro',
            value: 1,
          },
          {
            name: 'São Gonçalo',
            value: 2,
          },
          {
            name: 'Duque de Caxias',
            value: 3,
          },
        ];
        return (
            <Container style={styles.container}>
                <Header>
                    <Button transparent onPress={() => { this.props.navigator.pop(); }}>
                        <Icon name='ios-arrow-back' />
                    </Button>

                    <Title>Configuração</Title>

                    <Button transparent onPress={exitApp}>
                        <Icon name='ios-close' />
                    </Button>
                </Header>
                <Content>
                  <TextField
                    label={'Nome do aplicador'}
                    highlightColor={'#00BCD4'}
                    dense={true}
                  />
                  <TextField
                    label={'Nome do entrevistado'}
                    highlightColor={'#00BCD4'}
                    dense={true}
                  />
                  <Text style={{color: '#999999'}}>UF</Text>
                <Selection
                  title="Selecione UF"
                  options={uf}
                  onSelection={(e)=>this.returnDataOnSelection.bind(this, e)}
                  style={{
                    body: null,
                    option: null,
                  }}
                />
                <Text style={{color: '#999999'}}>Município</Text>
                <Selection
                  title="Selecione Município"
                  options={municipio}
                  onSelection={(e)=>this.returnDataOnSelection.bind(this, e)}
                  style={{
                    body: null,
                    option: null,
                  }}
                />
                <TextField
                  label={'Localidade '}
                  highlightColor={'#00BCD4'}
                  dense={true}
                />
                <ListItem selected={false}>
                    <Text>Urbana</Text>
                    <Right>
                      <Radio selected={false} />
                    </Right>
                </ListItem>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5FCFF',
    },
});
