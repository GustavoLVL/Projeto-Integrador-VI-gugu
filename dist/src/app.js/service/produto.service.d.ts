interface Produto {
    id: number;
    nome: string;
    preco: number;
}
interface DadosProduto {
    nome: string;
    preco: number;
}
declare function listar(): Produto[];
declare function buscarPorId(id: number | string): Produto | undefined;
declare function criar(dados: DadosProduto): Produto;
declare const _default: {
    listar: typeof listar;
    buscarPorId: typeof buscarPorId;
    criar: typeof criar;
};
export = _default;
//# sourceMappingURL=produto.service.d.ts.map