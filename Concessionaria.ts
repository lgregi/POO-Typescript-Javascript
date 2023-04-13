import {Carro} from './Carro'
import {Pessoa} from './Pessoa'
import {Concessionariainterface} from './concessinariainterface'

export class Concessionaria implements Concessionariainterface {
    private endereco: string =""
    private listaCarros: any

    constructor(endereco: string, listaCarros: Array<Carro>){
        this.endereco = endereco
        this.listaCarros = listaCarros
        
    }

    public fornecedorEndereco(): string {
        return this.endereco
    }
    public mostrartipodecarro(): any {
        return this.listaCarros
    }
    public mostrarlistadecarros(): Array<Carro> {
        return this.listaCarros
    }
    public ForneHoras ():string{
        return 'testando a interface'
    }

}