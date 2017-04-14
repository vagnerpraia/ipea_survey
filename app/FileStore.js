import RNFetchBlob from 'react-native-fetch-blob';
import QuizData from './data/QuizData';

const dirs = RNFetchBlob.fs.dirs;
const fs = RNFetchBlob.fs;

var dir_base = dirs.DownloadDir.substring(0, dirs.DownloadDir.lastIndexOf('/') + 1);
var dir_file = dir_base + 'Ipea/IpeaSurvey/';

class FileStore {
    static createFile(quiz, type) {
        let file_path = dir_file + quiz.id + '/' + type + '.json';
        let data = JSON.stringify(quiz);
        fs.createFile(file_path, data, 'utf8');
    }

    static readQuiz(quiz, callback) {
        let file_path = dir_file + quiz.id + '/domicilio.json';
        fs.readFile(file_path, 'utf8').then((data) => {
            /*
                TODO: Fazer leitura dos moradores e agrupar a data
            */
            let json = JSON.parse(data);
            return callback(json);
        }).catch((err) => {
            console.log(err);
        });
    };

    static readConfig(callback) {
        let file_path = dir_file + 'config.json';
        fs.readFile(file_path, 'utf8').then((data) => {
            var json = JSON.parse(data);
            return callback(json);
        }).catch((err) => {
            console.log(err);
        });
    };

    static saveFile(quiz, type) {
        let file_path = dir_file + quiz.id + '/' + type + '.json';
        let data = JSON.stringify(quiz);
        fs.writeFile(file_path, data, 'utf8').then(() => {
            console.log('Arquivo atualizado');
        });
    };

    static deleteQuiz(quiz) {
        let file_path = dir_file + quiz.id;
        console.log(file_path);
        fs.unlink(file_path).then(() => {
            console.log('Arquivo deletado');
        }).catch((error) => {
            console.log(error);
        })
    };
}

module.exports = FileStore;
