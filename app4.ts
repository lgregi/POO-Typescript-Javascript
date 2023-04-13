//import { ConcessionariaDao } from "./concessionariaDao";
import { Concessionaria } from "./Concessionaria";
import { Pessoa } from "./Pessoa";
import { Dao } from "./Dao";
//import { PessoaDao } from "./PessoaDao";

//let dow: ConcessionariaDao = new ConcessionariaDao()
//let Pes: PessoaDao = new PessoaDao()
 let conncer = new Concessionaria('',[])
let teste = new Pessoa('','')
let t : Dao<Concessionaria> = new Dao<Concessionaria>()
let P: Dao<Pessoa> = new Dao<Pessoa>()

t.Inserir(conncer)
P.Inserir(teste)
 
// dow.Inserir(conncer)
 //Pes.atualizar(teste)