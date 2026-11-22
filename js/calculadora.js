// ----- Calculadora de água -----
function calcularAgua() {
    var cafe = Number(document.getElementById("cafe").value);
    var proporcao = Number(document.getElementById("proporcao").value);

    if (cafe <= 0) {
        document.getElementById("resultado-agua").innerHTML = "Digite uma quantidade de café válida.";
        return;
    }

    var agua = cafe * proporcao;

    document.getElementById("resultado-agua").innerHTML =
        "Para <strong>" + cafe + " g</strong> de café use <strong>" + agua + " ml</strong> de água.";
}

// ----- Calculadora de custo -----
function calcularCusto() {
    var cafe = Number(document.getElementById("cafe-custo").value);
    var preco = Number(document.getElementById("preco").value);
    var peso = Number(document.getElementById("peso").value);

    if (cafe <= 0 || preco <= 0 || peso <= 0) {
        document.getElementById("resultado-custo").innerHTML = "Preencha todos os campos com valores válidos.";
        return;
    }

    var custo = cafe * preco / peso;

    document.getElementById("resultado-custo").innerHTML =
        "Custo do preparo: <strong>R$ " + custo.toFixed(2) + "</strong>";

    buscarDolar(custo);
}

function buscarDolar(custo) {
    // API: cotação do dólar (AwesomeAPI)
    var url = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

    fetch(url)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {
            var dolar = Number(dados.USDBRL.bid);
            var emDolar = custo / dolar;

            document.getElementById("resultado-custo").innerHTML =
                "Custo do preparo: <strong>R$ " + custo.toFixed(2) + "</strong>" +
                "<br>Em dólar: US$ " + emDolar.toFixed(2) +
                " (dólar a R$ " + dolar.toFixed(2) + ")";
        })
        .catch(function () {
            document.getElementById("resultado-custo").innerHTML =
                "Custo do preparo: <strong>R$ " + custo.toFixed(2) + "</strong>" +
                "<br>Não foi possível consultar o dólar.";
        });
}
