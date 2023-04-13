import {Veiculo} from './veiculo'

import {Pessoa} from './Pessoa'
import {Concessionaria} from './Concessionaria'
export class Carro extends Veiculo {
    
    private numerodeportas:number =0
    
    
    constructor(modelo:string, velocidade:number){
        super()
        this.modelo = modelo
        this.numerodeportas=velocidade
        
    }


   
    

}