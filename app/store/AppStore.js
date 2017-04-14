import React, { AsyncStorage } from 'react-native';

import FileStore from './FileStore';
import QuizData from './../data/QuizData';

class AppStore {
    static saveQuiz(obj = new QuizData(), callback) {
        AsyncStorage.setItem('@IpeaSurvey:quiz', JSON.stringify(obj))
            .then((cb) => {
                return callback();
            })
            .catch((err) => {
                console.log(err);
            })
            .done();
    }

    static readQuiz() {
        AsyncStorage.getItem('@IpeaSurvey:quiz')
            .then((value) => {
                if (value !== null) {
                    return callback(JSON.parse(value));
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .done();
    }

    static restartQuiz() {
        try {
            this.saveQuiz(new QuizData(), () => {
                return QuizData();
            });
        } catch (err) {
            console.log(err);
        }
    }

    static deleteQuiz(id) {
        try {
            this.FileStore.deleteQuiz(id);
            this.saveQuiz(new QuizData(), () => {
                return QuizData();
            });
        } catch (err) {
            console.log(err);
        }
    }
}

module.exports = AppStore;
