const { contas } = require("../../bancodedados")

const senhaConta = (req, res, next) => {
    const { numero_conta, senha } = req.body
    const conta = contas.find((conta) => conta.numero === Number(numero_conta))
    if (!senha) {
        return res.status(400).json({ mensagem: "A senha é obrigatória" })
    }
    if (senha !== conta.usuario.senha) {
        return res.status(404).json({ mensagem: "A senha esta incorreta" })
    }
    next()
}
const senhaContaOrigem = (req, res, next) => {
    const { numero_conta_origem, senha } = req.body
    const conta = contas.find((conta) => conta.numero === Number(numero_conta_origem))
    if (!senha) {
        return res.status(400).json({ mensagem: "A senha é obrigatória" })
    }
    if (senha !== conta.usuario.senha) {
        return res.status(404).json({ mensagem: "A senha esta incorreta" })
    }
    next()
}

module.exports = {
    senhaConta,
    senhaContaOrigem
}