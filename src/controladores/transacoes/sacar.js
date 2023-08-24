const { contas, saques } = require("../../bancodedados")
const format = require("date-fns/format")

const sacar = (req, res) => {
    const { numero_conta, valor } = req.body
    const dinheiroSacado = Number(valor)
    const conta = contas.find((conta) => conta.numero === Number(numero_conta))
    if (conta.saldo < Number(dinheiroSacado)) {
        return res.status(400).json({ mensagem: "Saldo insuficiente" })
    }
    conta.saldo -= dinheiroSacado
    const data = format(new Date(), "yyyy-dd-MM H:mm:ss")
    const extratoSaldo = {
        data: data,
        numero_conta,
        valor
    }
    saques.push(extratoSaldo)
    return res.status(200).json({ mensagem: "Saque realizado com sucesso" })
}

module.exports = {
    sacar
}