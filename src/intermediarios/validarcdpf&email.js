const { contas } = require("../bancodedados")
const validarCpfEmail = (req, res, next) => {
    const { cpf, email } = req.body
    const cpfUnico = contas.find((conta) => conta.usuario.cpf === cpf)
    if (cpfUnico) {
        return res.status(400).json({ mensagem: `Este CPF, ${cpf} ja contem uma conta cadastrada` })
    }
    const emailUnico = contas.find((conta) => conta.usuario.email === email)
    if (emailUnico) {
        return res.status(400).json({ mensagem: `Este email, ${email} ja contem uma conta cadastrada` })
    }
    next()
    return console.log(cpfUnico)
}

module.exports = {
    validarCpfEmail
}