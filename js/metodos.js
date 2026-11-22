var metodos = [
    {
        nome: "V60",
        imagem: "img/v60.jpg",
        resumo: "Filtrado manual que realça a acidez e as notas doces do café.",
        proporcao: "1:16",
        moagem: "Média-fina",
        tempo: "2 a 3 minutos",
        passos: [
            "Molhe o filtro com água quente e descarte a água.",
            "Adicione o café moído.",
            "Despeje um pouco de água e aguarde 30 segundos.",
            "Continue despejando a água em círculos.",
            "Espere escorrer e sirva."
        ]
    },
    {
        nome: "Prensa Francesa",
        imagem: "img/prensa.jpg",
        resumo: "Imersão simples, resulta em um café encorpado.",
        proporcao: "1:15",
        moagem: "Grossa",
        tempo: "4 minutos",
        passos: [
            "Coloque o café moído na prensa.",
            "Adicione a água quente.",
            "Mexa e tampe sem pressionar.",
            "Aguarde 4 minutos.",
            "Pressione o êmbolo devagar e sirva."
        ]
    },
    {
        nome: "AeroPress",
        imagem: "img/aeropress.jpg",
        resumo: "Rápida e versátil, faz um café limpo e intenso.",
        proporcao: "1:15",
        moagem: "Média-fina",
        tempo: "1 a 2 minutos",
        passos: [
            "Encaixe o filtro e molhe com água quente.",
            "Adicione o café e a água.",
            "Mexa por 10 segundos.",
            "Encaixe o êmbolo e pressione devagar.",
            "Sirva."
        ]
    },
    {
        nome: "Moka",
        imagem: "img/moka.jpg",
        resumo: "A cafeteira italiana de fogão, de sabor forte e marcante.",
        proporcao: "1:10",
        moagem: "Média-fina",
        tempo: "5 minutos",
        passos: [
            "Coloque água quente na base, até a válvula.",
            "Encha o filtro com café, sem apertar.",
            "Rosqueie a parte de cima.",
            "Leve ao fogo baixo.",
            "Quando o café subir, retire do fogo e sirva."
        ]
    }
];

function carregarMetodos() {
    var lista = document.getElementById("lista-metodos");
    lista.innerHTML = "";

    metodos.forEach(function (m, i) {
        lista.innerHTML +=
            '<div class="col-md-6 col-lg-3">' +
            '<div class="card card-cafe h-100 text-center shadow-sm">' +
            '<img src="' + m.imagem + '" class="card-img-top img-metodo" alt="' + m.nome + '">' +
            '<div class="card-body d-flex flex-column">' +
            '<h5 class="card-title">' + m.nome + '</h5>' +
            '<p class="card-text">' + m.resumo + '</p>' +
            '<button class="btn btn-cafe mt-auto" onclick="abrirDetalhes(' + i + ')">Ver detalhes</button>' +
            '</div></div></div>';
    });
}

function abrirDetalhes(i) {
    var m = metodos[i];

    document.getElementById("modal-titulo").textContent = m.nome;
    document.getElementById("modal-imagem").src = m.imagem;
    document.getElementById("modal-imagem").alt = m.nome;
    document.getElementById("modal-resumo").textContent = m.resumo;

    document.getElementById("modal-info").innerHTML =
        "<li>Proporção: " + m.proporcao + "</li>" +
        "<li>Moagem: " + m.moagem + "</li>" +
        "<li>Tempo: " + m.tempo + "</li>";

    var passos = document.getElementById("modal-passos");
    passos.innerHTML = "";
    m.passos.forEach(function (passo) {
        var item = document.createElement("li");
        item.textContent = passo;
        passos.appendChild(item);
    });

    var modal = new bootstrap.Modal(document.getElementById("modalMetodo"));
    modal.show();
}

carregarMetodos();
