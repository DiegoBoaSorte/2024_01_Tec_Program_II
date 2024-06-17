import { NomeAcomadacao } from "../enumeracoes/NomeAcomadacao"

export default class Acomodacao {
    private nomeAcomadacao: NomeAcomadacao
    private camaCasal: Number
    private camaSolteiro: Number
    private climatizacao: Boolean
    private garagem: Number
    private suite: Number

    constructor(nomeAcomadacao: NomeAcomadacao, camaCasal: Number, camaSolteiro: Number, climatizacao: Boolean, garagem: Number, suite: Number) {
        this.nomeAcomadacao = nomeAcomadacao
        this.camaCasal = camaCasal
        this.camaSolteiro = camaSolteiro
        this.climatizacao = climatizacao
        this.garagem = garagem
        this.suite = suite
        
    }

    public get NomeAcomadacao() { 
        return this.nomeAcomadacao 
    }

    public get CamaSolteiro() { 
        return this.camaSolteiro 
    }

    public get CamaCasal() { 
        return this.camaCasal 
    }

    public get Suite() { 
        return this.suite 
    }

    public get Climatizacao() { 
        return this.climatizacao 
    }

    public get Garagem() { 
        return this.garagem 
    }

}