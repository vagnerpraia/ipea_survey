export default class AdminData {
    constructor(id) {
        this.id = id;
        this.indexPage = 0;
        this.maxQuestion = 1;
        this.flagVoltar = true;
        this.flagSeguir = true;
    }

    setObject(obj) {
        if(obj.id) this.id = obj.id;
        if(obj.indexPage) this.indexPage = obj.indexPage;
        if(obj.maxQuestion) this.maxQuestion = obj.maxQuestion;
        if(obj.flagVoltar) this.flagVoltar = obj.flagVoltar;
        if(obj.flagSeguir) this.flagSeguir = obj.flagSeguir;
    }

    static object(obj) {
        let object = new AdminData(obj.id);
        object.setObject(obj);
        return object;
    }
};
