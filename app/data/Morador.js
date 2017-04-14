class Morador {
    constructor() {
        this.questao_69 = null,
        this.questao_70 = null,
        this.questao_71 = null,
        this.questao_72 = null,
        this.questao_73 = null,
        this.questao_74 = null,
        this.questao_75 = null,
        this.questao_76 = null,
        this.questao_77 = null,
        this.questao_78 = null,
        this.questao_79 = null,
        this.questao_80 = null,
        this.questao_81 = null,
        this.questao_82 = null,
        this.questao_83 = null,
        this.questao_84 = null,
        this.questao_85 = null,
        this.questao_86 = null,
        this.questao_87 = null,
        this.questao_88 = null,
        this.questao_89 = null,
        this.questao_90 = null,
        this.questao_91 = null,
        this.questao_92 = null,
        this.questao_93 = null,
        this.questao_93_secundaria = null
    }

    setObject(obj){
        this.questao_69 = obj.questao_69,
        this.questao_70 = obj.questao_70,
        this.questao_71 = obj.questao_71,
        this.questao_72 = obj.questao_72,
        this.questao_73 = obj.questao_73,
        this.questao_74 = obj.questao_74,
        this.questao_75 = obj.questao_75,
        this.questao_76 = obj.questao_76,
        this.questao_77 = obj.questao_77,
        this.questao_78 = obj.questao_78,
        this.questao_79 = obj.questao_79,
        this.questao_80 = obj.questao_80,
        this.questao_81 = obj.questao_81,
        this.questao_82 = obj.questao_82,
        this.questao_83 = obj.questao_83,
        this.questao_84 = obj.questao_84,
        this.questao_85 = obj.questao_85,
        this.questao_86 = obj.questao_86,
        this.questao_87 = obj.questao_87,
        this.questao_88 = obj.questao_88,
        this.questao_89 = obj.questao_89,
        this.questao_90 = obj.questao_90,
        this.questao_91 = obj.questao_91,
        this.questao_92 = obj.questao_92,
        this.questao_93 = obj.questao_93,
        this.questao_93_secundaria = obj.questao_93_secundaria
    }

    static object(obj){
        let object = new Morador();
        object.setObject(obj);
        return object;
    }
}

module.exports = Morador;
