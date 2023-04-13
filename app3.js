"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = require("./Carro");
const Concessionaria_1 = require("./Concessionaria");
const moto_1 = __importDefault(require("./moto"));
let carro = new Carro_1.Carro('veloster', 3);
let moto = new moto_1.default();
let conce = new Concessionaria_1.Concessionaria('', []);
moto.acelerar();
console.log(moto);
console.log(carro);
console.log(conce.ForneHoras());
