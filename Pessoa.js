"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = "";
        this.carroPreferido = "";
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    CompraCarr(carro) {
        this.carro = carro;
    }
    dizerCarroquetem() {
        return this.carro;
    }
}
exports.Pessoa = Pessoa;
