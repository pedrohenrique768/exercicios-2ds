
const express = require("express")

const app = express()

app.use(express.json())

// Array de tarefas
const tarefas = [
    { id: 1, titulo: "Estudar Express", feita: false },
    { id: 2, titulo: "Instalar o Bruno", feita: true }
]

// Rota para listar todas as tarefas
app.get("/tarefas", (req, res) => {
    res.status(200).json(tarefas)
})

// Rota para listar tarefas pendentes
app.get("/tarefas/pendentes", (req, res) => {
    const pendentes = tarefas.filter(tarefa => tarefa.feita === false)

    res.status(200).json(pendentes)
})

// Rota para criar tarefa
app.post("/tarefas", (req, res) => {
    res.status(201).json({
        mensagem: "Tarefa criada"
    })
})

// Coleção de requisições
const colecao = [
    {
        nome: "Listar tarefas",
        metodo: "GET",
        caminho: "/tarefas"
    },
    {
        nome: "Listar pendentes",
        metodo: "GET",
        caminho: "/tarefas/pendentes"
    },
    {
        nome: "Criar tarefa",
        metodo: "POST",
        caminho: "/tarefas",
        body: {
            titulo: "Nova tarefa",
            feita: false
        },
        headers: {
            "Content-Type": "application/json"
        }
    }
]

module.exports = { app, colecao }
