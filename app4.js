"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { ConcessionariaDao } from "./concessionariaDao";
const Concessionaria_1 = require("./Concessionaria");
const Pessoa_1 = require("./Pessoa");
const Dao_1 = require("./Dao");
//import { PessoaDao } from "./PessoaDao";
//let dow: ConcessionariaDao = new ConcessionariaDao()
//let Pes: PessoaDao = new PessoaDao()
let conncer = new Concessionaria_1.Concessionaria('', []);
let teste = new Pessoa_1.Pessoa('', '');
let t = new Dao_1.Dao();
let P = new Dao_1.Dao();
t.Inserir(conncer);
P.Inserir(teste);
// dow.Inserir(conncer)
//Pes.atualizar(teste)
