import { Carro } from "./Carro";
import { Concessionaria } from "./Concessionaria";
import Moto from "./moto"

let carro = new Carro('veloster',3)

let moto = new Moto()

let conce = new Concessionaria('',[])
moto.acelerar()

console.log(moto)
console.log(carro)
console.log(conce.ForneHoras())
