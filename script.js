function verificar() {
    let numero = document.getElementById("numero").value ;

    if (numero % 2 == 0) {
        document.getElementById("resultado").innerHTML = "O número é par"
    } else {
        document.getElementById("resultado").innerHTML = "O número é ímpar"
    }
}
