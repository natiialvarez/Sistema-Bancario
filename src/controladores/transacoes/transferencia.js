const { contas, transferencias } = require("../../bancodedados")
const format = require("date-fns/format")

const transferir = (req, res) => {
    const { numero_conta_origem, numero_conta_destino, valor } = req.body
    const dinheiroTransferido = Number(valor)
    const contaOrigem = contas.find((conta) => conta.numero === Number(numero_conta_origem))
    const contaDestino = contas.find((conta) => conta.numero === Number(numero_conta_destino))
    if (contaOrigem.saldo < dinheiroTransferido) {
        return res.status(400).json({ mensagem: "Saldo insuficiente" })
    }
    contaOrigem.saldo -= dinheiroTransferido
    contaDestino.saldo += dinheiroTransferido
    const data = format(new Date(), "yyyy-MM-dd H:mm:ss")
    const tranferenciaExtrato = {
        data: data,
        numero_conta_origem,
        numero_conta_destino,
        valor
    }
    transferencias.push(tranferenciaExtrato)
    return res.status(200).json({ mensagem: "Dinheiro transferido com sucesso" })
}

module.exports = {
    transferir
}