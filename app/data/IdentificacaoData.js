export default class IdentificacaoData {
    constructor(id) {
        this.id = id;
        this.completo = false;
        this.nomeAplicador = null;
        this.nomeEntrevistado = null;
        this.estado = null;
        this.municipio = null;
        this.localidade = null;
        this.localizacao = null;
        this.localizacaoDiferenciada = null;
        this.barragem = null;
    }

    setObject(obj){
        if(obj.id) this.id = obj.id;
        if(obj.completo) this.completo = obj.completo;
        if(obj.nomeAplicador) this.nomeAplicador = obj.nomeAplicador;
        if(obj.nomeEntrevistado) this.nomeEntrevistado = obj.nomeEntrevistado;
        if(obj.estado) this.estado = obj.estado;
        if(obj.municipio) this.municipio = obj.municipio;
        if(obj.localidade) this.localidade = obj.localidade;
        if(obj.localizacao) this.localizacao = obj.localizacao;
        if(obj.localizacaoDiferenciada) this.localizacaoDiferenciada = obj.localizacaoDiferenciada;
        if(obj.barragem) this.barragem = obj.barragem;
    }

    static object(obj){
        let object = new Identificacao(obj.id);
        object.setObject(obj);
        return object;
    }
}
