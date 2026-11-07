const express = require("express")
const validarCompra = require("../middlewares/validarCompra")

const router = express.Router()

let compras = [
    { id: 1, cliente: "Ana", material: "Caderno", valor: 22, status: "entregue" },
    { id: 2, cliente: "Bruno", material: "Caneta", valor: 4, status: "confirmada" },
    { id: 3, cliente: "Carla", material: "Mochila", valor: 130, status: "confirmada" }
]

router.get("/", (req, res) => {
    const { status } = req.query
    const resultado = status === undefined
        ? compras
        : compras.filter(compra => compra.status === status)

    res.status(200).json(resultado)
})

router.get("/:id", (req, res) => {
    const compra = compras.find(item => item.id === Number(req.params.id))

    if (!compra) {
        return res.status(404).json({ erro: "Compra nao encontrado" })
    }

    res.status(200).json(compra)
})

router.post("/", validarCompra, (req, res) => {
    const { cliente, material, valor } = req.body
    const maiorId = Math.max(...compras.map(compra => compra.id))

    compras.push({
        id: maiorId + 1,
        cliente,
        material,
        valor,
        status: "orcamento"
    })

    res.status(201).json({
        mensagem: "Registro de compra criado"
    })
})

module.exports = router