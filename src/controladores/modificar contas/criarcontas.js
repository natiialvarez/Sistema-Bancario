const { contas } = require("../../bancodedados")

let numero = 1

const criarConta = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body
    if (!nome || !cpf || !data_nascimento || !telefone || !email || !senha) {
        return res.status(400).json({ mensagem: "Todos os campos são obrigatórios" })
    }
    const conta = {
        numero: numero++,
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha,
        }
    }
    contas.push(conta)
    return res.status(200).json({ mensagem: "Conta cadastrada com sucesso", conta })
}

module.exports = {
    criarConta
}