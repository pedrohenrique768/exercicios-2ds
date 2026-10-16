const http = require("node:http")
const handler = require("./index")
const { carregarConfig } = require("./config")

const { porta } = carregarConfig()

http.createServer(handler).listen(porta)