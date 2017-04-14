import Domicilio from './Domicilio';
import Morador from './Morador';

class QuizData {
    constructor(id) {
        this.id = id,
        this.nome_aplicador = null,
        this.domicilio = null,
        this.morador = new Array()
    }

    setObject(obj){
        this.id = obj.id;
        this.nomeAplicador = obj.nomeAplicador,
        this.domicilio = Domicilio.object(obj.domicilio),
        this.morador = Morador.object(obj.morador)
    }

    static object(obj){
        let object = new Quiz(obj.id);
        object.setObject(obj);
        return object;
    }
};

module.exports = QuizData;
