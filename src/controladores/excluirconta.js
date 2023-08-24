const { contas } = require("../bancodedados")

const excluirConta = (req, res) => {
    const { numeroConta } = req.params
    const conta = contas.find((conta) => conta.numero === Number(numeroConta))
    if (conta.saldo === 0) {
        const contaExcluida = contas.splice(conta, 1)
        return res.status(200).json({ mensagem: "Conta excluida com sucesso" })
    }
    return res.status(400).json({ mensagem: "Saldo superior a 0" })
}

module.exports = {
    excluirConta
}