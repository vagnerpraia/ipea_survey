import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Routes from './app/Routes';

var SQLite = require('react-native-sqlite-storage')

export default class IpeaSurvey extends Component {
    render() {
        SQLite.openDatabase({name: 'ipeasurvey.db', location: 'default'}, (db) => {
            console.log('Banco de dados conectado');

            db.executeSql('SELECT name FROM sqlite_master WHERE type = "table";', [], (results) => {
                var len = results.rows.length;
                console.log('Length: ' + len);
                for (let i = 0; i < len; i++) {
                    let row = results.rows.item(i);
                    console.log(row);
                }
            }, (err) => {
                console.log('Ocorreu um erro na consulta com o banco de dados');
            });

        }, (err) => {
            console.log('Ocorreu um erro na conexão com o banco de dados');
        });

        return (
            <Routes />
        );
    }
}

AppRegistry.registerComponent('IpeaSurvey', () => IpeaSurvey);
