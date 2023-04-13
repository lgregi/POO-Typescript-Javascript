
import {Carro} from './Carro'
import {Pessoa} from './Pessoa'
import {Concessionaria} from './Concessionaria'





let car = new Carro('Ferrai',10)
let car2 = new Carro('Monza',10)
let car3 = new Carro('Lamborguini',90)

let list: Array<Carro> = [car,car2,car3]
let conce = new Concessionaria('av. paulista', list )
console.log(conce.mostrarlistadecarros())

let pessoa = new Pessoa('lucas', 'Monza')
console.log(pessoa.dizerCarroPreferido())

conce.mostrarlistadecarros().map((carro:Carro)=>{
    if(carro['modelo']== pessoa.dizerCarroPreferido())
    {
        pessoa.CompraCarr(carro)
    } else{
        console.log('no')
    }
})

console.log(pessoa.dizerCarroquetem())