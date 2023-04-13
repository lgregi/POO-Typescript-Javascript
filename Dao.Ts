import{DaoInterfa} from "./DaoInterface"

export class Dao<T> implements DaoInterfa <T>{

    NomeTabela: string = ''
    Inserir(object: T) :boolean{
        console.log('lohgiac de insert')
        return true
    }
    atualizar(object: T) :boolean{
        console.log('lohgiac de atuazliar')
        return true
    }
    remover(id:number) : T{
        console.log('lohgiac de delete')
        return Object()
    }
    seleciona(id:number) :T{
        console.log('lohgiac de selcet')
        return Object()
    }
    selecionartodos():[T]{
        console.log('lohgiac de getall')
        return Object()
    }
}