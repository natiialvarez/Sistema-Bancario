const { contas, saques, depositos, transferencias } = require("../../bancodedados")

const extrato = (req, res) => {
    const { numero_conta } = req.query
    const conta = contas.find((conta) => conta.numero === Number(numero_conta))
    const saquesConta = saques.filter((saque) => saque.numero_conta === numero_conta)
    const depositosConta = depositos.filter((deposito) => deposito.numero_conta === numero_conta)
    const transferenciasEnviadas = transferencias.filter((transferencia) => transferencia.numero_conta_origem === numero_conta)
    const transferenciasRecebidas = transferencias.filter((transferencia) => transferencia.numero_conta_destino === numero_conta)

    return res.status(200).json({
        saques: saquesConta,
        depositos: depositosConta,
        transferenciasEnviadas: transferenciasEnviadas,
        transferenciasRecebidas: transferenciasRecebidas
    })
}

module.exports = {
    extrato
}