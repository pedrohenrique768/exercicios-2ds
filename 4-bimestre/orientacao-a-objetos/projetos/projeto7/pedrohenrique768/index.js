const express = require("express")
const comprasRouter = require("./routes/compras")

const app = express()

app.use(express.json())
app.use("/compras", comprasRouter)

app.use((req, res) => {
    res.status(404).json({ erro: "Rota nao encontrada" })
})

module.exports = app