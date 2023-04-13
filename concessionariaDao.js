"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcessionariaDao = void 0;
const Concessionaria_1 = require("./Concessionaria");
class ConcessionariaDao {
    constructor() {
        this.NomeTabela = 'tb';
    }
    Inserir(object) {
        console.log('lohgiac de insert');
        return true;
    }
    atualizar(object) {
        console.log('lohgiac de atuazliar');
        return true;
    }
    remover(id) {
        console.log('lohgiac de delete');
        return new Concessionaria_1.Concessionaria('', []);
    }
    seleciona(id) {
        console.log('lohgiac de selcet');
        return new Concessionaria_1.Concessionaria("", []);
    }
    selecionartodos() {
        console.log('lohgiac de getall');
        return [new Concessionaria_1.Concessionaria("", [])];
    }
}
exports.ConcessionariaDao = ConcessionariaDao;
