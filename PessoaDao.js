"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
const Pessoa_1 = require("./Pessoa");
class PessoaDao {
    constructor() {
        this.NomeTabela = 'tb_pessoa';
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
        return new Pessoa_1.Pessoa("", "");
    }
    seleciona(id) {
        console.log('lohgiac de selcet');
        return new Pessoa_1.Pessoa("", "");
    }
    selecionartodos() {
        console.log('lohgiac de getall');
        return [new Pessoa_1.Pessoa("", "")];
    }
}
exports.PessoaDao = PessoaDao;
