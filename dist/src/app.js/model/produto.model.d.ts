interface ProdutoDados {
    id: number;
    nome: string;
    preco: number;
}
declare class Produto {
    id: number;
    nome: string;
    preco: number;
    constructor({ id, nome, preco }: ProdutoDados);
    estaEmPromocao(): boolean;
}
export = Produto;
//# sourceMappingURL=produto.model.d.ts.map