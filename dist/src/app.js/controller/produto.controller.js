"use strict";
const service = require("../service/produto.service");
function listar(req, res) {
    const produtos = service.listar();
    return res.status(200).json(produtos);
}
function buscarPorId(req, res) {
    const id = req.params.id;
    if (typeof id !== "string") {
        return res.status(400).json({ mensagem: "ID do produto inválido" });
    }
    const produto = service.buscarPorId(id);
    if (!produto) {
        return res.status(404).json({
            mensagem: "Produto não encontrado"
        });
    }
    return res.status(200).json(produto);
}
function criar(req, res) {
    try {
        const produto = service.criar(req.body);
        return res.status(201).json(produto);
    }
    catch (error) {
        const mensagem = error instanceof Error
            ? error.message
            : "Erro ao criar produto";
        return res.status(400).json({ mensagem });
    }
}
module.exports = { listar, buscarPorId, criar };
//# sourceMappingURL=produto.controller.js.map