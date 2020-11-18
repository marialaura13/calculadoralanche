let lancheAtual = 1;
let fim = 1;

function calcular() {
    if (document.calc.txt.value !== "") {
        try {
            const valorCalculado = eval(calc.txt.value);

            document.calc.txt.value = valorCalculado;
            document.tot.txt[lancheAtual++ - 1].value = valorCalculado;
            document.calc.txt.value = "";
        } catch (err) {
            console.log("deu erro");
        }
    } else {
        alert("Campo não pode ser vazio");
    }
}

function calcularfim() {
    if (document.calc.txt.tot !== "") {
        try {
            const fim = eval(calc.txt.tot);

            document.calc.txt.tot = fim;
            document.fim.txt[fim++ - 1].tot = fim;
            document.calc.txt.tot = "";
        } catch (err) {
            console.log("deu erro");
        }
    } else {
        alert("Campo não pode ser vazio");
    }
//    document.getElementById("fim");
}

// SHIFT + ALT + F
