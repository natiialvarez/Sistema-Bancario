const express = require("express");
const rotas = express()

const { validarSenha } = require("./intermediarios/query/senha");
const { listarContas } = require("./controladores/consultas/contas");
const { validarCpf, validarEmail } = require("./intermediarios/body/validarcpf&email");
const { verificarNumero } = require("./intermediarios/params/verificarId");
const { excluirConta } = require("./controladores/modificar_contas/excluirconta");
const { validarBodyConta, validarBodyValor } = require("./intermediarios/body/validarBODYconta");
const { depositar } = require("./controladores/transacoes/depositar");
const { sacar } = require("./controladores/transacoes/sacar");
const { validarSenhaConta, validarSenhaContaOrigem } = require("./intermediarios/body/senhaconta");
const { transferir } = require("./controladores/transacoes/transferencia");
const { validarContaOrigem, validarContaDestino } = require("./intermediarios/body/contastransferencia");
const { validarNumeroConta, validarSenhaDaConta } = require("./intermediarios/query/conta&senha");
const { consultarSaldor } = require("./controladores/consultas/consultarsaldo");
const { extrato } = require("./controladores/consultas/extratos");
const { atualizarusuario } = require("./controladores/modificar_contas/atualizarusuario");
const { criarConta } = require("./controladores/modificar_contas/criarcontas");

rotas.get("/contas", validarSenha, listarContas)
rotas.post("/contas", validarCpf, validarEmail, criarConta)
rotas.put("/contas/:numeroConta/usuario", verificarNumero, validarCpf, validarEmail, atualizarusuario)
rotas.delete("/contas/:numeroConta", verificarNumero, excluirConta)
rotas.post("/transacoes/depositar", validarBodyConta, validarBodyValor, depositar)
rotas.post("/transacoes/sacar", validarBodyConta, validarSenhaConta, validarBodyValor, sacar)
rotas.post("/transacoes/transferir", validarContaOrigem, validarContaDestino, validarSenhaContaOrigem, validarBodyValor, transferir)
rotas.get("/contas/saldo", validarNumeroConta, validarSenhaDaConta, consultarSaldor)
rotas.get("/contas/extrato", validarNumeroConta, validarSenhaDaConta, extrato)

module.exports = {
    rotas
}