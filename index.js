const express = require("express");
const produtoRoutes = require("./src/app.js/routes/produto.routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/produtos", produtoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
// npx kill-port 3001
// node index.js
// https://bug-free-barnacle-7v5jpv4jjx4q3r7x6-3001.app.github.dev/produtos
