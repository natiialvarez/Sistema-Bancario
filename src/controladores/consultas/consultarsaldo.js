const { contas } = require("../../bancodedados")


const consultarSaldor = (req, res) => {
    const { numero_conta } = req.query
    const conta = contas.find((conta) => conta.numero === Number(numero_conta))
    return res.status(200).json({ saldo: conta.saldo })
}

module.exports = {
    consultarSaldor
}