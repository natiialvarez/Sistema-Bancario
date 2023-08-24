const { contas, depositos } = require("../../bancodedados")
const format = require("date-fns/format")


const depositar = (req, res) => {
    const { numero_conta, valor } = req.body
    const dinheiroDepositado = Number(valor)
    const conta = contas.find((conta) => conta.numero === Number(numero_conta))
    conta.saldo += dinheiroDepositado
    const data = format(new Date(), "yyyy-dd-MM H:mm:ss")
    const extratoDeposito = {
        data: data,
        numero_conta,
        valor
    }
    depositos.push(extratoDeposito)
    return res.status(200).json({ mensagem: "Depósito realizado com sucesso" })
}

module.exports = {
    depositar
}