const { contas } = require("../bancodedados")

const listarContas = (req, res) => {
    if (contas.length === 0) {
        return res.status(200).json({ mensagem: "Nenhuma conta existente.", contas })
    }
    return res.status(200).json(contas)
}


module.exports = {
    listarContas
}