const botaoJurosSimples = document.getElementById('calculaJurosSimples');
const botaoJurosComposto = document.getElementById('calculaJurosComposto');

const limpaCampos = (id: string[]) =>  {
    id.map(id => 
        (document.getElementById(`${id}`) as HTMLInputElement).value = ''
    )
}

const calculaJurosSimples = (): void => {
    const valorPrincipal = parseFloat(
        (document.getElementById('principal') as HTMLInputElement).value
    )
    const taxaDeJuros = parseFloat(
        (document.getElementById('taxaDeJuros') as HTMLInputElement).value
    )
    const tempo = parseFloat(
        (document.getElementById('tempo') as HTMLInputElement).value
    )
    
    if(isNaN(valorPrincipal) || isNaN(taxaDeJuros) || isNaN(tempo)) {
        alert("Por favor, preencha todos os campos");
        return;
    }

    const jurosSimples: number = (valorPrincipal * taxaDeJuros * tempo) / 100;
    
    (document.getElementById('resultado') as HTMLInputElement).innerText = `Juros simples: R$ ${jurosSimples.toFixed(2)}`;

    limpaCampos(["principal", "taxaDeJuros", "tempo"]);
}

const calculaJurosComposto = (): void => {
    const valorPrincipal = parseFloat((document.getElementById('principal') as HTMLInputElement).value)
    const taxaDeJuros = parseFloat((document.getElementById('taxaDeJuros') as HTMLInputElement).value)
    const tempo = parseFloat((document.getElementById('tempo') as HTMLInputElement).value)
    
    if(isNaN(valorPrincipal) || isNaN(taxaDeJuros) || isNaN(tempo)) {
        alert("Por favor, preencha todos os campos");
        return;
    }

    const jurosComposto: number = valorPrincipal * (Math.pow((1 + taxaDeJuros / 100), tempo) - 1);
    
    (document.getElementById('resultado') as HTMLInputElement).innerText = `Juros composto: R$ ${jurosComposto.toFixed(2)}`;

    limpaCampos(["principal", "taxaDeJuros", "tempo"]);
}

botaoJurosSimples!.addEventListener('click', calculaJurosSimples)
botaoJurosComposto!.addEventListener('click', calculaJurosComposto)