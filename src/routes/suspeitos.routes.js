import { Router } from "express";

const suspeitosRoutes = Router();

// Array com suspeitos pré-cadastrados
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "P. Diddy",
    idade: 20,
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
    idade: 58,
    envolvido: false
  },
];