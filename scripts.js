let cadastro = false

document.getElementById("toggle").onclick = () => {
    cadastro = !cadastro;
    document.getElementById("titulo").innerText = cadastro ? "Cadastro" : "Login";
    document.querySelector("botton").innerText = cadastro ? "Cadastro" : "Entrar";
    document.getElementById("toggle").innerText = cadastro

}