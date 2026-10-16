function carregarConfig() {
    return {
        servico: process.env.SERVICO || "doceria",
        porta: Number(process.env.PORT || 3000)
    }
}

module.exports = { carregarConfig }