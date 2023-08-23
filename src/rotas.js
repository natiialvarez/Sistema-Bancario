const express = require("express");
const rotas = express()

const { verificarSenha } = require("./intermediarios/senha");
const { listarContas } = require("./controladores/contas");
const { criarConta } = require("./controladores/criarcontas");
const { atualizarusuario } = require("./controladores/atualizarusuario");
const { validarCpf, validarEmail } = require("./intermediarios/validarcpf&email");

rotas.get("/contas", verificarSenha, listarContas)
rotas.post("/contas", validarCpf, validarEmail, criarConta)
rotas.put("/contas/:numeroConta/usuario", validarCpf, validarEmail, atualizarusuario)

module.exports = {
    rotas
}