import express = require("express");
import produtoRoutes = require("./src/app.js/routes/produto.routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use("/produtos", produtoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
// npm run build...........Serve para compilar o seu TypeScript.
// npm start.....Serve para iniciar o seu projeto
// https://bug-free-barnacle-7v5jpv4jjx4q3r7x6-3001.app.github.dev/produtos
