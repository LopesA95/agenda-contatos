const form = document.getElementById('form-contacts');
const nomes = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
  e.preventDefault();

  adicionarLinha();
  atualizarTabela();

});

function adicionarLinha() {
  const inputNomeContato = document.getElementById('nome-contato');
  const inputNumeroContato = document.getElementById('telefone-contato');

  if(nomes.includes(inputNomeContato.value)) {
    alert(`O contato: ${inputNomeContato.value} ja foi inserido!`);
  }else {
    nomes.push(inputNomeContato.value);
    const numeroFormatado = formatarTelefone(inputNumeroContato.value);
    telefones.push(numeroFormatado);

    let linha = '<tr>';
    linha += `<td> ${inputNomeContato.value}</td>`;
    linha += `<td> ${numeroFormatado}</td>`;
    linha += `<tr>`;

    linhas += linha;
  }
  inputNomeContato.value = '';
  inputNumeroContato.value = '';
}

function atualizarTabela() {
  const finalTabela = document.getElementById('tbody')
  finalTabela.innerHTML = linhas;
}

function formatarTelefone(numero) {
  const parte1 = numero.slice(0, 5);
  const parte2 = numero.slice(5);
  return `${parte1}-${parte2}`;
}
