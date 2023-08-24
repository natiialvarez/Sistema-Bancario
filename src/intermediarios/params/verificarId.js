const { contas } = require("../../bancodedados")

const verificarNumero = (req, res, next) => {
    const { numeroConta } = req.params
    if (isNaN(numeroConta)) {
        return res.status(400).json({ mensagem: "O número da conta não é valido, deve ser um número" })
    }
    const contaExistente = contas.find((conta) => conta.numero === Number(numeroConta))
    if (!contaExistente) {
        return res.status(400).json({ mensagem: "Numero da conta não encontrada" })
    }
    req.contaExistente = contaExistente
    next()
}

module.exports = {
    verificarNumero
}