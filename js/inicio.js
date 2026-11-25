function mostrarMensagem(texto) {
    document.getElementById("resultado").innerHTML = texto;
}

function buscarTemperatura() {
    var cidade = document.getElementById("cidade").value.trim();

    if (cidade == "") {
        mostrarMensagem("Digite o nome de uma cidade.");
        return;
    }

    mostrarMensagem("Buscando...");

    var url = "https://geocoding-api.open-meteo.com/v1/search?count=1&language=pt&name=" + encodeURIComponent(cidade);

    fetch(url)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {
            if (!dados.results) {
                mostrarMensagem("Cidade não encontrada.");
            } else {
                buscarClima(dados.results[0]);
            }
        })
        .catch(function () {
            mostrarMensagem("Erro ao consultar a cidade.");
        });
}

function buscarClima(local) {
    var url = "https://api.open-meteo.com/v1/forecast?current=temperature_2m&latitude=" +
        local.latitude + "&longitude=" + local.longitude;

    fetch(url)
        .then(function (resposta) {
            return resposta.json();
        })
        .then(function (dados) {
            mostrarClima(local.name, dados.current.temperature_2m);
        })
        .catch(function () {
            mostrarMensagem("Erro ao consultar a temperatura.");
        });
}

function mostrarClima(cidade, temperatura) {
    var sugestao;

    if (temperatura < 18) {
        sugestao = "Está frio! Que tal um café quente na Prensa Francesa ou na Moka?";
    } else if (temperatura < 25) {
        sugestao = "Clima agradável. Um V60 combina bem!";
    } else {
        sugestao = "Está calor! Experimente um café gelado.";
    }

    mostrarMensagem("<strong>" + cidade + ": " + temperatura + " °C</strong><br>" + sugestao);
}
