interface ProdutoDados {
  id: number;
  nome: string;
  preco: number;
}

class Produto {
  id: number;
  nome: string;
  preco: number;

  constructor({ id, nome, preco }: ProdutoDados) {
    this.id = id;
    this.nome = nome;
    this.preco = preco;
  }

  estaEmPromocao(): boolean {
    return this.preco < 100;
  }
}

export = Produto;