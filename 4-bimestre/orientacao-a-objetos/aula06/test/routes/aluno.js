
const express = require("express")
const alunosRouter = require("./alunos")

const router = express.Router()

// Rota principal da API
router.get("/", (req, res) => {
    res.status(200).json({
        mensagem: "API da Escola"
    })
})

// Montando as rotas de alunos
router.use("/alunos", alunosRouter)

module.exports = router
