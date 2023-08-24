const { contas } = require("../../bancodedados")

const numeroConta = (req, res, next) => {
    const { numero_conta } = req.query
    if (!numero_conta) {
        return res.status(400).json({ mensagem: "Número da conta é obrigatório" })
    }
    const conta = contas.find((conta) => conta.numero === Number(numero_conta))
    if (!conta) {
        return res.status(400).json({ mensagem: "Conta não encontrada" })
    }
    next()
}

const senhaDaConta = (req, res, next) => {
    const { senha } = req.query
    if (!senha) {
        return res.status(400).json({ mensagem: "A senha é obrigatória" })
    }
    const contaSenha = contas.find((conta) => conta.usuario.senha === senha)
    if (!contaSenha) {
        return res.status(400).json({ mensagem: "Senha incorreta" })
    }
    next()
}

module.exports = {
    numeroConta,
    senhaDaConta
} 