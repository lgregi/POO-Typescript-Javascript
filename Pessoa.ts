import {Carro} from './Carro'

import {Concessionaria} from './Concessionaria'

export class Pessoa {
    private nome: string =""
    private carroPreferido: string =""
    private carro :any
    

    constructor(nome: string, carroPreferido: string){
        this.nome = nome
        this.carroPreferido = carroPreferido
        
        
        
    }

    public dizerNome(): string {
        return this.nome
    }
    public dizerCarroPreferido(): string {
        return this.carroPreferido
    }
    public CompraCarr(carro: Carro):void{
        this.carro = carro

    }
    public dizerCarroquetem(): Carro {
        return this.carro
    }

}
