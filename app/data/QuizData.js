import IdentificacaoData from './IdentificacaoData';
import DomicilioData from './DomicilioData';
import MoradorData from './MoradorData';

export default class QuizData {
    constructor() {
        this.identificacao = null;
        this.domicilio = null;
        this.morador = null;
    }

    setObject(obj){
        if(obj.identificacao) this.identificacao = IdentificacaoData.object(obj.identificacao);
        if(obj.domicilio) this.domicilio = DomicilioData.object(obj.domicilio);
        if(obj.morador) this.morador = MoradorData.object(obj.morador);
    }

    static object(obj){
        let object = new QuizData();
        object.setObject(obj);
        return object;
    }
};
