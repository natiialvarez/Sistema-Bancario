const { banco, contas } = require("../bancodedados")

const verificarSenha = (req, res, next) => {
    const { senha_banco } = req.query
    if (!senha_banco) {
        return res.status(400).json({ mensagem: "Senha não informada" })
    }
    if (senha_banco !== banco.senha) {
        return res.status(400).json({ mensagem: "Senha incorreta" })
    }
    if (senha_banco === banco.senha) {
        console.log("mensagem: Senha Correta, passa pro prox.")
    }
    next()
}

module.exports = {
    verificarSenha
}