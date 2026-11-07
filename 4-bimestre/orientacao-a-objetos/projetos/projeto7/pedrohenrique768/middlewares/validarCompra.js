function validarCompra(req, res, next) {
    const { cliente, valor } = req.body ?? {}

    if (!cliente) {
        return res.status(400).json({
            erro: "O campo cliente e obrigatorio"
        })
    }

    if (typeof valor !== "number") {
        return res.status(400).json({
            erro: "O campo valor deve ser um numero"
        })
    }

    next()
}

module.exports = validarCompra