export default class AdminData {
    constructor(id) {
        this.id = id;
        this.indexPage = 0;
        this.maxQuestion = 1;
        this.flagVoltar = true;
        this.flagSeguir = true;
        this.identificacaoCompleto = false;
        this.domicilioCompleto = false;
        this.moradorCompleto = false;
    }

    setObject(obj) {
        if(obj.id) this.id = obj.id;
        if(obj.indexPage) this.indexPage = obj.indexPage;
        if(obj.maxQuestion) this.maxQuestion = obj.maxQuestion;
        if(obj.flagVoltar) this.flagVoltar = obj.flagVoltar;
        if(obj.flagSeguir) this.flagSeguir = obj.flagSeguir;
        if(obj.identificacaoCompleto) this.identificacaoCompleto = obj.identificacaoCompleto;
        if(obj.domicilioCompleto) this.domicilioCompleto = obj.domicilioCompleto;
        if(obj.moradorCompleto) this.moradorCompleto = obj.moradorCompleto;
    }

    static object(obj) {
        let object = new AdminData(obj.id);
        object.setObject(obj);
        return object;
    }
};
