import RNFetchBlob from 'react-native-fetch-blob';
const dirs = RNFetchBlob.fs.dirs;
const fs = RNFetchBlob.fs;

var dirBase = dirs.DownloadDir.substring(0, dirs.DownloadDir.lastIndexOf('/') + 1);
var dirFile = dirBase + 'Ipea/IpeaSurvey/';
var dirQuiz = dirBase + 'Ipea/IpeaSurvey/Quiz/';

export default class FileStore {
    static createFile(quiz, type) {
        let file_path = dirQuiz + quiz.id + '/' + type + '.json';
        let data = JSON.stringify(quiz);
        fs.createFile(file_path, data, 'utf8');
    }

    static readQuiz(quiz, callback) {
        let dir_file_path = dirQuiz + quiz.id;

        flag = 0;

        fs.readFile(dir_file_path + '/identificacao.json', 'utf8').then((identificacao) => {
            quiz.identificacao = JSON.parse(identificacao);
            flag += 1;
        }).catch((err) => {
            console.log(err);
            flag += 1;
        });
        
        fs.readFile(dir_file_path + '/domicilio.json', 'utf8').then((domicilio) => {
            quiz.domicilio = JSON.parse(domicilio);
            flag += 1;
        }).catch((err) => {
            console.log(err);
            flag += 1;
        });

        fs.readFile(dir_file_path + '/moradores.json', 'utf8').then((moradores) => {
            quiz.moradores = JSON.parse(moradores);
            flag += 1;
        }).catch((err) => {
            console.log(err);
            flag += 1;
        });

        if(flag === 3){
            return callback(quiz);
        }
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

    static saveFileIdentificacao(quiz) {
        let data = JSON.stringify(quiz);
        let file_path = dirQuiz + quiz.id + '/identificacao.json';
        fs.writeFile(file_path, data, 'utf8').then(() => {
            console.log('Arquivo atualizado');
        });
    };

    static saveFileDomicilio(quiz) {
        let data = JSON.stringify(quiz);
        let file_path = dirQuiz + quiz.id + '/domicilio.json';
        fs.writeFile(file_path, data, 'utf8').then(() => {
            console.log('Arquivo atualizado');
        });
    };

    static saveFileMoradores(id, quiz) {
        let data = JSON.stringify(quiz);
        let file_path = dirQuiz + id + '/moradores.json';
        fs.writeFile(file_path, data, 'utf8').then(() => {
            console.log('Arquivo atualizado');
        });
    };

    static deleteDomicilio(idQuiz) {
        let file_path = dirQuiz + idQuiz + '/quiz.json';
        fs.unlink(file_path).then(() => {
            console.log('Arquivo deletado');
        }).catch((error) => {
            console.log(error);
        });
    };

    static deleteMorador(idQuiz, idMorador) {
        let file_path = dirQuiz + idQuiz + '/moradores.json';
        fs.unlink(file_path).then(() => {
            console.log('Arquivo deletado');
        }).catch((error) => {
            console.log(error);
        });
    };

    static deleteQuiz(idQuiz) {
        let file_path = dirQuiz + idQuiz;
        fs.unlink(file_path).then(() => {
            console.log('Arquivo deletado');
        }).catch((error) => {
            console.log(error);
        });
    };

    static getQuizList(callback){
        fs.ls(dirQuiz).then((files) => {
            callback(files);
        }).catch((error) => {
            console.log(error);
        });
    }

    static getMoradoresList(id, callback){
        let file_path = dirQuiz + id + '/moradores.json';
        fs.exists(file_path).then((exist) => {
            if(exist){
                fs.readFile(file_path, 'utf8').then((data) => {
                    var json = JSON.parse(data);
                    return callback(json);
                }).catch((err) => {
                    console.log(err);
                });
            }else{
                return callback(null);
            }
        }).catch((error) => {
            console.log(error);
        });
    }
}
