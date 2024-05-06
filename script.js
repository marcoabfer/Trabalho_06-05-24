function validarCampos() {
    let nome = document.getElementById("nome").value.trim(); // o método trim é para tirar os espaços a mais de cada campo
    let email = document.getElementById("email").value.trim();
    let numero = document.getElementById("numero").value.trim();

    let nomeRegex = /^[a-zA-ZÀ-ÿ\s]{1,100}$/; //Criando as expressões básicas
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let numeroRegex = /^[0-9]{2}\ [0-9]{4,5}-[0-9]{4}$/;

    if (!nomeRegex.test(nome)) { //Validando
        alert("Por favor, insira um nome válido.");
        return false;
    }

    if (!emailRegex.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    if (!numeroRegex.test(numero)) {
        alert("Por favor, insira um telefone válido no formato DD XXXXX-XXXX.");
        return false;
    }

    return true;
}