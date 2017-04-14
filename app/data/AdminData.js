class AdminData {
    constructor() {
        this.indexPage = 0,
        this.maxQuestion = 1,
        this.flagVoltar = true,
        this.flagSeguir = true
    }

    setObject(obj) {
        this.indexPage = obj.indexPage,
        this.maxQuestion = obj.maxQuestion,
        this.flagVoltar = obj.flagVoltar,
        this.flagSeguir = obj.flagSeguir
    }

    static object(obj) {
        let object = new Quiz();
        object.setObject(obj);
        return object;
    }
};

module.exports = AdminData;
