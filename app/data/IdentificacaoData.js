export default class IdentificacaoData {
    constructor(id) {
        this.id = id;
        this.nomeAplicador = null;
    }

    setObject(obj){
        if(obj.id) this.id = obj.id;
        if(obj.nomeAplicador) this.nomeAplicador = obj.nomeAplicador;
    }

    static object(obj){
        let object = new Identificacao(obj.id);
        object.setObject(obj);
        return object;
    }
}
