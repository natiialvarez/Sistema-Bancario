const express = require("express");
const rotas = express()

const { verificarSenha } = require("./intermediarios/query/senha");
const { listarContas } = require("./controladores/consultas/contas");


const { validarCpf, validarEmail } = require("./intermediarios/body/validarcpf&email");
const { verificarNumero } = require("./intermediarios/params/verificarId");
const { excluirConta } = require("./controladores/modificar contas/excluirconta");
const { validarBodyConta, validarBodyValor } = require("./intermediarios/body/validarBODYconta");
const { depositar } = require("./controladores/transacoes/depositar");
const { sacar } = require("./controladores/transacoes/sacar");
const { senhaConta, senhaContaOrigem } = require("./intermediarios/body/senhaconta");
const { transferir } = require("./controladores/transacoes/transferencia");
const { validarContaOrigem, validarContaDestino } = require("./intermediarios/body/contastransferencia");
const { numeroConta, senhaDaConta } = require("./intermediarios/query/conta&senha");
const { consultarSaldor } = require("./controladores/consultas/consultarsaldo");
const { extrato } = require("./controladores/consultas/extratos");
const { atualizarusuario } = require("./controladores/modificar contas/atualizarusuario");
const { criarConta } = require("./controladores/modificar contas/criarcontas");

rotas.get("/contas", verificarSenha, listarContas)
rotas.post("/contas", validarCpf, validarEmail, criarConta)
rotas.put("/contas/:numeroConta/usuario", verificarNumero, validarCpf, validarEmail, atualizarusuario)
rotas.delete("/contas/:numeroConta", verificarNumero, excluirConta)
rotas.post("/transacoes/depositar", validarBodyConta, validarBodyValor, depositar)
rotas.post("/transacoes/sacar", validarBodyConta, senhaConta, validarBodyValor, sacar)
rotas.post("/transacoes/transferir", validarContaOrigem, validarContaDestino, senhaContaOrigem, validarBodyValor, transferir)
rotas.get("/contas/saldo", numeroConta, senhaDaConta, consultarSaldor)
rotas.get("/contas/extrato", numeroConta, senhaDaConta, extrato)

module.exports = {
    rotas
}