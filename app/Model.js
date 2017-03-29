import { AsyncStorage } from 'react-native';

var readFile = (key) => {
    try {
        const value = AsyncStorage.getItem(key);
        if (value !== null){
            model.quiz = value;
        }
    } catch (error) {
        console.log(error);
    }
};

var deleteFile = (filename) => {
};

var saveFile = (key, attr, value) => {
    try {
        model.quiz[attr] = value;
        AsyncStorage.setItem(key, model.quiz);
    } catch (error) {
        console.log(error);
    }
};

var quiz = {
    nome_aplicador: ''
};

export var model = {
    quiz: quiz,
    readFile: readFile,
    deleteFile: deleteFile,
    saveFile: saveFile
};
