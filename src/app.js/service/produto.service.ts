

// ts

interface Produto {
  id: number;
  nome: string;
  preco: number;
}

interface DadosProduto {
  nome: string;
  preco: number;
}

const produtos: Produto[] = [
  { id: 1, nome: "Notebook", preco: 3500 },
  { id: 2, nome: "Mouse", preco: 120 }
];

function listar(): Produto[] {
  return produtos;
}

function buscarPorId(id: number | string): Produto | undefined {
  return produtos.find(p => p.id === Number(id));
}

function criar(dados: DadosProduto): Produto {
  if (!dados.nome || dados.preco == null) {
    throw new Error("nome e preco são obrigatórios");
  }

  const produto: Produto = {
    id: produtos.length + 1,
    nome: dados.nome,
    preco: dados.preco
  };

  produtos.push(produto);
  return produto;
}

export = { listar, buscarPorId, criar };