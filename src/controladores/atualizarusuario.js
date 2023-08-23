const { contas } = require("../bancodedados")
const { validarCpfEmail } = require("../intermediarios/validarcdpf&email")

const atualizarusuario = (req, res) => {
    const { numeroConta } = req.params
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body

    const contaExistente = contas.find((conta) => conta.numero === Number(numeroConta))
    if (!contaExistente) {
        return res.status(400).json({ mensagem: "Numero da conta não encontrada" })
    }
    if (!nome && !cpf && !data_nascimento && !telefone && !email && !senha) {
        return res.status(400).json({ mensagem: "Pelo menos uma propriedade é obrigatória no corpo da requisição" });
    }
    if (cpf || email) {
        validarCpfEmail
        return res.status(400).json({ mensagem: "Cpf ou Email ja cadastrado" })
    }
}


module.exports = {
    atualizarusuario
}