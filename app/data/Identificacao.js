export default class Identificacao {
    constructor() {
        this.id = null,
        this.nome_aplicador = null
    }

    static object(obj){
        let object = new Morador();
        object.setObject(obj);
        return object;
    }
}
