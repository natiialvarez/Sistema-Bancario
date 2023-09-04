
const atualizarusuario = (req, res) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = req.body
    const contaExistente = req.contaExistente
    if (!nome && !cpf && !data_nascimento && !telefone && !email && !senha) {
        return res.status(400).json({ mensagem: "Pelo menos uma propriedade é obrigatória no corpo da requisição" });
    }
    let informacoes = ["nome", "cpf", "data_nascimento", "telefone", "email", "senha"]
    for (let informacao of informacoes) {
        if (req.body[informacao]) {
            contaExistente.usuario[informacao] = req.body[informacao]
        }
    }
    return res.status(200).json({ mensagem: "Informações do usuário atualizadas com sucesso" });
}


module.exports = {
    atualizarusuario
}