
const express = require("express")
const rotas = require("./routes")

const app = express()

// Montando o Router Main
app.use("/api", rotas)

module.exports = app
