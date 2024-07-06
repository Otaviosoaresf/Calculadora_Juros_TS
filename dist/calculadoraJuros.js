"use strict";
const botaoJurosSimples = document.getElementById('calculaJurosSimples');
const botaoJurosComposto = document.getElementById('calculaJurosComposto');
const limpaCampos = (id) => {
    id.map(id => document.getElementById(`${id}`).value = '');
};
const calculaJurosSimples = () => {
    const valorPrincipal = parseFloat(document.getElementById('principal').value);
    const taxaDeJuros = parseFloat(document.getElementById('taxaDeJuros').value);
    const tempo = parseFloat(document.getElementById('tempo').value);
    if (isNaN(valorPrincipal) || isNaN(taxaDeJuros) || isNaN(tempo)) {
        alert("Por favor, preencha todos os campos");
        return;
    }
    const jurosSimples = (valorPrincipal * taxaDeJuros * tempo) / 100;
    document.getElementById('resultado').innerText = `Juros simples: R$ ${jurosSimples.toFixed(2)}`;
    limpaCampos(["principal", "taxaDeJuros", "tempo"]);
};
const calculaJurosComposto = () => {
    const valorPrincipal = parseFloat(document.getElementById('principal').value);
    const taxaDeJuros = parseFloat(document.getElementById('taxaDeJuros').value);
    const tempo = parseFloat(document.getElementById('tempo').value);
    if (isNaN(valorPrincipal) || isNaN(taxaDeJuros) || isNaN(tempo)) {
        alert("Por favor, preencha todos os campos");
        return;
    }
    const jurosComposto = valorPrincipal * (Math.pow((1 + taxaDeJuros / 100), tempo) - 1);
    document.getElementById('resultado').innerText = `Juros composto: R$ ${jurosComposto.toFixed(2)}`;
    limpaCampos(["principal", "taxaDeJuros", "tempo"]);
};
botaoJurosSimples.addEventListener('click', calculaJurosSimples);
botaoJurosComposto.addEventListener('click', calculaJurosComposto);
