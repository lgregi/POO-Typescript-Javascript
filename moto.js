"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const veiculo_1 = require("./veiculo");
class Moto extends veiculo_1.Veiculo {
    acelerar() {
        this.velocidade = this.velocidade * 20;
    }
}
exports.default = Moto;
