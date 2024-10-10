import { Router } from "express";

const suspeitosRoutes = Router();

// Array com suspeitos pré-cadastrados
let suspeitos = [
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "P. Diddy",
    idade: 75,
    envolvido: "sim",
    descriçãoFisica: [
      "Cabelo Preto",
      "wooow",
    ]
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Leonardo DiCaprio",
    idade: 92,
    envolvido: "sim",
    descriçãoFisica: [
      "Branquelo",
      "wooow",
    ]
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Felipe",
    idade: 11,
    envolvido: "sim",
    descriçãoFisica: [
      "Top 1 Dev Br",
      "wooow",
    ]
  },
  {
    id: Math.floor(Math.random() * 1000000),
    nome: "Slim Shady",
    idade: 51,
    envolvido: "nao",
    descriçãoFisica: [
      "Top 1 br",
      "wooow",
    ]
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
  if (envolvido != "sim" && envolvido != "não") {
    return res.status(400).send({
      message: "Digite 'sim' ou 'não'! em envolvido",
    });
  }

  // Criação de um novo suspeito
  const novoSuspeito = {
    id: Math.floor(Math.random() * 1000000),
    nome,
    idade,
    envolvido,
    descriçãoFisica,
  };

  // Adiciona o novo suspeito ao array de suspeitos
  suspeitos.push(novoSuspeito);

  return res.status(201).json({
    message: "suspeito cadastrado com sucesso!",
    novoSuspeito,
  });
});
// Rota para buscar um suspeito pelo id
suspeitosRoutes.get("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um suspeito pelo id no array de suspeitos
  const suspeito = suspeitos.find((suspect) => suspect.id == id);

  // Verifica se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `suspeito com id ${id} não encontrado!` });
  }
  return res.status(200).json(suspeito);
});
// Rota para atualizar um suspeito pelo id
suspeitosRoutes.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nome, idade, envolvido, descriçãoFisica} = req.body;

  // Busca um suspeito pelo id no array de suspeitos
  const suspeito = suspeitos.find((suspect) => suspect.id == id);

  // Validação dos campos obrigatórios  
  if (!nome ) {
    return res.status(400).json({
      message: "O campo nome é obrigatório!",
    });
  }

  // Validação se idade é um numero inteiro
  if ((Number.isInteger(idade)) == false  ) {
    return res.status(400).send({
      message: "Digite um numero inteiro para idade!!",
    });
  }
  suspeito.nome = nome;
  suspeito.idade = idade;
  suspeito.envolvido = envolvido;
  suspeito.descriçãoFisica = descriçãoFisica;

  return res.status(200).json({
    message: "Suspeito atualizado com sucesso!",
    suspeito,
  });
});
// Rota para deletar um suspeito
suspeitosRoutes.delete("/:id", (req, res) => {
  const { id } = req.params;

  // Busca um suspeito pelo id no array de suspeitos
  const suspeito = suspeitos.find((suspect) => suspect.id == id);

  // Verifica se o suspeito foi encontrado
  if (!suspeito) {
    return res
      .status(404)
      .json({ message: `suspeito com id ${id} não encontrado!` });
}

  // Remove o suspeito do array de suspeitos
suspeitos = suspeitos.filter((suspect) => suspect.id != id);

   return res.status(200).json({
    message: "suspeito removido com sucesso!",
    suspeito,
  });
});

export default suspeitosRoutes; 