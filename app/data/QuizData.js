export default class QuizData {
    constructor(id) {
        this.id = id;
        this.identificacao = null;
        this.domicilio = null;
        this.moradores = null;
    }

    setObject(obj){
        if(obj.id) this.id = obj.id;
        if(obj.identificacao) this.identificacao = obj.identificacao;
        if(obj.domicilio) this.domicilio = obj.domicilio;
        if(obj.moradores) this.moradores = obj.moradores;
    }

    static object(obj){
        let object = new QuizData(obj.id);
        object.setObject(obj);
        return object;
    }
};
