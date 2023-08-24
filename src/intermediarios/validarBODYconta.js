const { contas } = require("../bancodedados")

const validarBodyConta = (req, res, next) => {
    const { numero_conta } = req.body
    if (isNaN(numero_conta)) {
        return res.status(400).json({ mensagem: "O numero da conta não é valido, deve ser um numero." })
    }
    const conta = contas.find((conta) => conta.numero === Number(numero_conta))
    if (!conta) {
        return res.status(400).json({ mensagem: "O numero da conta não foi encontrado." })
    }
    next()
}

const validarBodyValor = (req, res, next) => {
    const { valor } = req.body
    if (valor <= 0) {
        return res.status(400).json({ mensagem: "O Valor a depositar deve ser maior que 0" })
    }
    if (!valor) {
        return res.status(400).json({ mensagem: "O valor a ser depositado é obrigatório" })
    }
    next()
}
module.exports = {
    validarBodyConta,
    validarBodyValor
}