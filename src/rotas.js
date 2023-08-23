const express = require("express");
const rotas = express()
const { verificarSenha } = require("./intermediarios/senha");
const { listarContas } = require("./controladores/contas");
const { criarConta } = require("./controladores/criarcontas");
const { atualizarusuario } = require("./controladores/atualizarusuario");
const { validarCpfEmail } = require("./intermediarios/validarcdpf&email");

rotas.get("/contas", verificarSenha, listarContas)
rotas.post("/contas", validarCpfEmail, criarConta)
rotas.put("/contas/:numeroConta/usuario", atualizarusuario)

module.exports = {
    rotas
}