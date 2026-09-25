import express = require("express");
import controller = require("../controller/produto.controller");

const router = express.Router();

router.get("/", controller.listar);
router.get("/:id", controller.buscarPorId);
router.post("/", controller.criar);

export = router;