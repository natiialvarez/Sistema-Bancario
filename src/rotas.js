const express = require("express");
const rotas = express()

const { verificarSenha } = require("./intermediarios/senha");
const { listarContas } = require("./controladores/contas");
const { criarConta } = require("./controladores/criarcontas");
const { atualizarusuario } = require("./controladores/atualizarusuario");
const { validarCpf, validarEmail } = require("./intermediarios/validarcpf&email");
const { verificarNumero } = require("./intermediarios/verificarId");
const { excluirConta } = require("./controladores/excluirconta");
const { validarBodyConta, validarBodyValor } = require("./intermediarios/body/validarBODYconta");
const { depositar } = require("./controladores/transacoes/depositar");
const { sacar } = require("./controladores/transacoes/sacar");
const { senhaConta, senhaContaOrigem } = require("./intermediarios/body/senhaconta");
const { transferir } = require("./controladores/transacoes/transferencia");
const { validarContaOrigem, validarContaDestino } = require("./intermediarios/body/contastransferencia");

rotas.get("/contas", verificarSenha, listarContas)
rotas.post("/contas", validarCpf, validarEmail, criarConta)
rotas.put("/contas/:numeroConta/usuario", verificarNumero, validarCpf, validarEmail, atualizarusuario)
rotas.delete("/contas/:numeroConta", verificarNumero, excluirConta)
rotas.post("/transacoes/depositar", validarBodyConta, validarBodyValor, depositar)
rotas.post("/transacoes/sacar", validarBodyConta, senhaConta, validarBodyValor, sacar)
rotas.post("/transacoes/transferir", validarContaOrigem, validarContaDestino, senhaContaOrigem, validarBodyValor, transferir)

module.exports = {
    rotas
}