import type { Request, Response } from "express";
import service = require("../service/produto.service");

function listar(req: Request, res: Response) {
  const produtos = service.listar();
  return res.status(200).json(produtos);
}

function buscarPorId(req: Request, res: Response) {
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

function criar(req: Request, res: Response) {
  try {
    const produto = service.criar(req.body);
    return res.status(201).json(produto);
  } catch (error: unknown) {
    const mensagem =
      error instanceof Error
        ? error.message
        : "Erro ao criar produto";

    return res.status(400).json({ mensagem });
  }
}

export = { listar, buscarPorId, criar };