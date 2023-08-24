const { contas } = require("../../bancodedados")
const validarCpf = (req, res, next) => {
    const { cpf } = req.body
    const cpfUnico = contas.find((conta) => conta.usuario.cpf === cpf)
    if (cpfUnico) {
        return res.status(400).json({ mensagem: `Este CPF, ${cpf} ja contem uma conta cadastrada` })
    }
    next()
}
const validarEmail = (req, res, next) => {
    const { email } = req.body
    const emailUnico = contas.find((conta) => conta.usuario.email === email)
    if (emailUnico) {
        return res.status(400).json({ mensagem: `Este email, ${email} ja contem uma conta cadastrada` })
    }
    next()
}

module.exports = {
    validarCpf,
    validarEmail

}