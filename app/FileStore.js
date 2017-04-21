import RNFetchBlob from 'react-native-fetch-blob';
const dirs = RNFetchBlob.fs.dirs;
const fs = RNFetchBlob.fs;

var dirBase = dirs.DownloadDir.substring(0, dirs.DownloadDir.lastIndexOf('/') + 1);
var dirFile = dirBase + 'Ipea/IpeaSurvey/';

export default class FileStore {
    static createFile(quiz, type) {
        let file_path = dirFile + quiz.id + '/' + type + '.json';
        let data = JSON.stringify(quiz);
        fs.createFile(file_path, data, 'utf8');
    }

    static readQuiz(quiz, callback) {
        let file_path = dirFile + quiz.id + '/domicilio.json';
        fs.readFile(file_path, 'utf8').then((data) => {
            /*
             *  ====================================================================================================
             *  TODO: Fazer leitura dos moradores e agrupar a data
             *  ====================================================================================================
             */
            let json = JSON.parse(data);
            return callback(json);
        }).catch((err) => {
            console.log(err);
        });
    };

    static readConfig(callback) {
        let file_path = dirFile + 'config.json';
        fs.readFile(file_path, 'utf8').then((data) => {
            var json = JSON.parse(data);
            return callback(json);
        }).catch((err) => {
            console.log(err);
        });
    };

    static saveFile(quiz, type) {
        let data = JSON.stringify(quiz);
        let file_path = dirFile + quiz.id + '/' + type + '.json';
        fs.writeFile(file_path, data, 'utf8').then(() => {
            console.log('Arquivo atualizado');
        });
    };

    static deleteQuiz(quiz) {
        let file_path = dirFile + quiz.id;
        fs.unlink(file_path).then(() => {
            console.log('Arquivo deletado');
        }).catch((error) => {
            console.log(error);
        });
    };

    static getQuizList(callback){
        fs.ls(dirFile).then((files) => {
            callback(files);
        }).catch((error) => {
            console.log(error);
        });
    }
}
