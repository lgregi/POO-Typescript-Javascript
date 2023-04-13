"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.NomeTabela = '';
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
        return Object();
    }
    seleciona(id) {
        console.log('lohgiac de selcet');
        return Object();
    }
    selecionartodos() {
        console.log('lohgiac de getall');
        return Object();
    }
}
exports.Dao = Dao;
