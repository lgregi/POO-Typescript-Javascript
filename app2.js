"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = require("./Carro");
const Pessoa_1 = require("./Pessoa");
const Concessionaria_1 = require("./Concessionaria");
let car = new Carro_1.Carro('Ferrai', 10);
let car2 = new Carro_1.Carro('Monza', 10);
let car3 = new Carro_1.Carro('Lamborguini', 90);
let list = [car, car2, car3];
let conce = new Concessionaria_1.Concessionaria('av. paulista', list);
console.log(conce.mostrarlistadecarros());
let pessoa = new Pessoa_1.Pessoa('lucas', 'Monza');
console.log(pessoa.dizerCarroPreferido());
conce.mostrarlistadecarros().map((carro) => {
    if (carro['modelo'] == pessoa.dizerCarroPreferido()) {
        pessoa.CompraCarr(carro);
    }
    else {
        console.log('no');
    }
});
console.log(pessoa.dizerCarroquetem());
