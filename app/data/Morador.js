export default class Morador {
    constructor() {
        this.questao_1 = null,
        this.questao_2 = null,
        this.questao_3 = null,
        this.questao_4 = null,
        this.questao_5 = null,
        this.questao_6 = null,
        this.questao_7 = null,
        this.questao_8 = null,
        this.questao_9 = null,
        this.questao_10 = null,
        this.questao_11 = null,
        this.questao_12 = null,
        this.questao_13 = null,
        this.questao_14 = null,
        this.questao_15 = null,
        this.questao_16 = null,
        this.questao_17 = null,
        this.questao_18 = null,
        this.questao_19 = null,
        this.questao_20 = null,
        this.questao_21 = null,
        this.questao_22 = null,
        this.questao_23 = null,
        this.questao_23_secundaria = null
    }

    setObject(obj){
        this.questao_1 = obj.questao_1,
        this.questao_2 = obj.questao_2,
        this.questao_3 = obj.questao_3,
        this.questao_4 = obj.questao_4,
        this.questao_5 = obj.questao_5,
        this.questao_6 = obj.questao_6,
        this.questao_7 = obj.questao_7,
        this.questao_8 = obj.questao_8,
        this.questao_9 = obj.questao_9,
        this.questao_10 = obj.questao_10,
        this.questao_11 = obj.questao_11,
        this.questao_12 = obj.questao_12,
        this.questao_13 = obj.questao_13,
        this.questao_14 = obj.questao_14,
        this.questao_15 = obj.questao_15,
        this.questao_16 = obj.questao_16,
        this.questao_17 = obj.questao_17,
        this.questao_18 = obj.questao_18,
        this.questao_19 = obj.questao_19,
        this.questao_20 = obj.questao_20,
        this.questao_21 = obj.questao_21,
        this.questao_22 = obj.questao_22,
        this.questao_23 = obj.questao_23,
        this.questao_23_secundaria = obj.questao_23_secundaria
    }

    static object(obj){
        let object = new Morador();
        object.setObject(obj);
        return object;
    }
}
