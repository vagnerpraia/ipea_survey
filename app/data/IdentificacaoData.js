export default class IdentificacaoData {
    constructor(id) {
        this.id = id;
        this.completo = false;
        this.nomeAplicador = null;
    }

    setObject(obj){
        if(obj.id) this.id = obj.id;
        if(obj.completo) this.completo = obj.completo;
        if(obj.nomeAplicador) this.nomeAplicador = obj.nomeAplicador;
    }

    static object(obj){
        let object = new Identificacao(obj.id);
        object.setObject(obj);
        return object;
    }
}
