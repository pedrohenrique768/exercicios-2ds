
const express = require("express")

const app = express()

app.use(express.json())

// Array de pedidos
const pedidos = [
    { id: 1, cliente: "Ana", valor: 100 },
    { id: 2, cliente: "Bruno", valor: 250 }
]

app.get("/pedidos", (req, res) => {
    const valorMin = Number(req.query.valorMin)

    if (!req.query.valorMin) {
        return res.status(200).json(pedidos)
    }

    const resultado = pedidos.filter(
        pedido => pedido.valor >= valorMin
    )

    res.status(200).json(resultado)
})