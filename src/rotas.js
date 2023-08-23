const express = require("express");
const rotas = express()
const { verificarSenha } = require("./intermediarios/senha");
const { listarContas } = require("./controladores/contas");

rotas.get("/contas", verificarSenha, listarContas)


module.exports = {
    rotas
}