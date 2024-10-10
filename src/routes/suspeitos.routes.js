import { Router } from "express";

const suspeitosRoutes = Router();

// Array com suspeitos pré-cadastrados
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "P. Diddy",
    idade: 75,
    envolvido: true,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Leonardo DiCaprio",
    idade: 92,
    envolvido: true,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "FelipeDev",
    idade: 11,
    envolvido: true,
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Slim Shady",
    idade: 51,
    envolvido: false
  },
];
// Rota para listar todos os suspeitos
suspeitosRoutes.get("/", (req, res) => {
  return res.status(200).json(suspeitos);
});

// Rota para cadastrar um novo suspeito
suspeitosRoutes.post("/", (req, res) => {
  const { nome, idade, envolvido, descriçãoFisica} = req.body;

  // Validação dos campos obrigatórios
  if (!nome) {
    return res.status(400).json({
      message: "Os campos nome!",
    });
  }

  // Criação de um novo suspeito
  const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    idade,
    envolvido,
  };

  // Adiciona o novo suspeito ao array de suspeitos
  suspeitos.push(novoSuspeito);

  return res.status(201).json({
    message: "suspeito cadastrado com sucesso!",
    novoSuspeito,
  });
});
