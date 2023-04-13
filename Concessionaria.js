"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concessionaria = void 0;
class Concessionaria {
    constructor(endereco, listaCarros) {
        this.endereco = "";
        this.endereco = endereco;
        this.listaCarros = listaCarros;
    }
    fornecedorEndereco() {
        return this.endereco;
    }
    mostrartipodecarro() {
        return this.listaCarros;
    }
    mostrarlistadecarros() {
        return this.listaCarros;
    }
    ForneHoras() {
        return 'testando a interface';
    }
}
exports.Concessionaria = Concessionaria;
