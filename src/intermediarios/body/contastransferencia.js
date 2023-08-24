const { contas } = require("../../bancodedados")

const validarContaOrigem = (req, res, next) => {
    const { numero_conta_origem } = req.body
    if (isNaN(numero_conta_origem)) {
        return res.status(400).json({ mensagem: "O numero da conta não é valido, deve ser um numero." })
    }
    const conta = contas.find((conta) => conta.numero === Number(numero_conta_origem))
    if (!conta) {
        return res.status(400).json({ mensagem: "O numero da conta de ORIGEM não foi encontrado." })
    }
    next()
}

const validarContaDestino = (req, res, next) => {
    const { numero_conta_destino } = req.body
    if (isNaN(numero_conta_destino)) {
        return res.status(400).json({ mensagem: "O numero da conta não é valido, deve ser um numero." })
    }
    const conta = contas.find((conta) => conta.numero === Number(numero_conta_destino))
    if (!conta) {
        return res.status(400).json({ mensagem: "O numero da conta de DESTINO não foi encontrado." })
    }
    next()
}

module.exports = {
    validarContaOrigem,
    validarContaDestino
}