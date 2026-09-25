"use strict";
class Produto {
    id;
    nome;
    preco;
    constructor({ id, nome, preco }) {
        this.id = id;
        this.nome = nome;
        this.preco = preco;
    }
    estaEmPromocao() {
        return this.preco < 100;
    }
}
module.exports = Produto;
//# sourceMappingURL=produto.model.js.map