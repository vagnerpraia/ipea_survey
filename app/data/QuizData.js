import Identificacao from './Identificacao';
import Domicilio from './Domicilio';
import Morador from './Morador';

export default class QuizData {
    constructor() {
        this.identificacao = new Identificacao();
        this.domicilio = new Domicilio(),
        this.morador = new Array()
    }

    setObject(obj){
        this.identificacao = Identificacao.object(obj.identificacao),
        this.domicilio = Domicilio.object(obj.domicilio),
        this.morador = Morador.object(obj.morador)
    }

    static object(obj){
        let object = new QuizData();
        object.setObject(obj);
        return object;
    }
};
