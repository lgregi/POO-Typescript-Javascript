export interface DaoInterfa <T>{
    NomeTabela: string;

    Inserir(object: T) :boolean
    atualizar(object: T) :boolean
    remover(id:number) : T
    seleciona(id:number) :T
    selecionartodos():[T]

}