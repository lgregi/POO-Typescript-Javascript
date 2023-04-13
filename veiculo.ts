

import {Pessoa} from './Pessoa'
import {Concessionaria} from './Concessionaria'
export class Veiculo {
    protected modelo:string =""    
    protected velocidade : number=10
    
    

    public acelerar() :void {
        this.velocidade = this.velocidade *10
    }
    public parar() :void {
        this.velocidade = 0
    }
    public VelocidadeNormal() :number {
        
        return this.velocidade
    }
    

}