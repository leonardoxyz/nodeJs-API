const express = require('express');
const app = express();
const port = 3300;

const users = [
    { id: 1, name: "João Silva", email: "joao.silva@email.com", senha: "teste@123" },
    { id: 2, name: "Maria Oliveira", email: "maria.oliveira@email.com", senha: "teste@123" },
    { id: 3, name: "Carlos Santos", email: "carlos.santos@email.com", senha: "teste@123" },
    { id: 4, name: "Ana Paula", email: "ana.paula@email.com", senha: "teste@123" },
    { id: 5, name: "Rafael Souza", email: "rafael.souza@email.com", senha: "teste@123" }
];

const docs = [
    { id: 1, id_user: 1, tipo: "Trabalho", titulo: "atividade prática 1", curso: "ADS", turno: "manhã" },
    { id: 2, id_user: 2, tipo: "Trabalho", titulo: "atividade prática 2", curso: "ADS", turno: "tarde" },
    { id: 3, id_user: 3, tipo: "Projeto", titulo: "projeto final", curso: "Engenharia", turno: "noite" },
    { id: 4, id_user: 4, tipo: "Artigo", titulo: "artigo científico", curso: "Ciências Sociais", turno: "manhã" },
    { id: 5, id_user: 5, tipo: "Relatório", titulo: "relatório técnico", curso: "Engenharia", turno: "tarde" }
];

app.get('/users', (req, res) => {
    res.json(users);
});

app.get('/docs', (req, res) => {
    res.json(docs);
});

app.use((req, res) => {
    res.status(404).send({ error: "Route not found" });
});

app.listen(port, () => {
    console.log(`Running - ${port}`);
});
