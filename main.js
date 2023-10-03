document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar o envio do formulário padrão

    // Obter os valores dos campos A e B
    var campoA = parseFloat(document.getElementById("campoA").value);
    var campoB = parseFloat(document.getElementById("campoB").value);

    // Validar se B é maior que A
    var mensagem = document.getElementById("mensagem");
    if (campoB > campoA) {
        mensagem.textContent = "Formulário válido. B é maior que A.";
        mensagem.className = "valid";
        campoA = '';
        campoB = '';
    } else {
        mensagem.textContent = "Formulário inválido. B deve ser maior que A.";
        mensagem.className = "invalid";
    }
});