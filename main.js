const form = document.getElementById('form-agenda')
let addLinha = '';
form.addEventListener('submit', function(e) {
    e.preventDefault();

    const inputNome = document.getElementById('nome')
    const inputTelefone = document.getElementById('telefone')

    let linha = '<tr>'
    linha += `<td> <strong>${inputNome.value}</strong></td>`;
    linha += `<td>${inputTelefone.value}</td>`;
    linha += '</tr>';

    addLinha += linha;

    const lista = document.querySelector('tbody');
    lista.innerHTML = addLinha;
})