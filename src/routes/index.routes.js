import { Router } from "express";

// Lista de importação das rotas do projeto
import suspeitoRoutes from "./routes/suspeitos.routes.js";

const routes = Router();

// Rota raiz para teste
routes.get("/", (req, res) => {
  return res.status(200).json({ message: "Testado fio!" });
});

// Lista de uso das rotas do projeto
routes.use("/suspeitos", suspeitoRoutes);

export default routes;