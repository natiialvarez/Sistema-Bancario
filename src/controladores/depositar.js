const { contas, depositos } = require("../bancodedados")

const depositar = (req, res) => {
    const { numero_conta, valor } = req.body
    const dinheiroDepositado = Number(valor)
    const conta = contas.find((conta) => conta.numero === Number(numero_conta))
    conta.saldo += dinheiroDepositado

    const extratoDeposito = {
        data: new Date(),
        numero_conta,
        valor
    }
    depositos.push(extratoDeposito)
    return res.status(200).json({ mensagem: "Depósito realizado com sucesso" })
}

module.exports = {
    depositar
}