const router = express.Router()

// Array de alunos
const alunos = [
    { id: 1, nome: "Ana", nota: 8 },
    { id: 2, nome: "Bruno", nota: 6 }
]

// Rota para listar todos os alunos
router.get("/", (req, res) => {
    res.status(200).json(alunos)
})

// Rota para listar alunos aprovados
router.get("/aprovados", (req, res) => {
    const aprovados = alunos.filter(aluno => aluno.nota >= 7)

    res.status(200).json(aprovados)
})

module.exports = router