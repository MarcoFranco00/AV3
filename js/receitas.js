var receitas = [];

function salvarNoNavegador() {
    localStorage.setItem("receitas", JSON.stringify(receitas));
}

function carregarReceitas() {
    var salvo = localStorage.getItem("receitas");

    if (salvo) {
        receitas = JSON.parse(salvo);
    }

    mostrarReceitas();
}

function adicionarReceita() {
    var nome = document.getElementById("nome").value.trim();
    var metodo = document.getElementById("metodo").value;
    var preparo = document.getElementById("preparo").value.trim();

    if (nome == "" || preparo == "") {
        document.getElementById("aviso").textContent = "Preencha o nome e o preparo.";
        return;
    }

    document.getElementById("aviso").textContent = "";

    receitas.push({ nome: nome, metodo: metodo, preparo: preparo });
    salvarNoNavegador();

    document.getElementById("nome").value = "";
    document.getElementById("preparo").value = "";

    mostrarReceitas();
}

function excluirReceita(i) {
    if (confirm("Deseja excluir esta receita?")) {
        receitas.splice(i, 1);
        salvarNoNavegador();
        mostrarReceitas();
    }
}

function mostrarReceitas() {
    var lista = document.getElementById("lista-receitas");
    lista.innerHTML = "";

    if (receitas.length == 0) {
        lista.innerHTML = '<p class="text-center">Nenhuma receita cadastrada ainda.</p>';
        return;
    }

    receitas.forEach(function (r, i) {
        var coluna = document.createElement("div");
        coluna.className = "col-md-6";

        var card = document.createElement("div");
        card.className = "card card-cafe h-100 shadow-sm";

        var corpo = document.createElement("div");
        corpo.className = "card-body";

        var titulo = document.createElement("h5");
        titulo.textContent = r.nome;

        var metodo = document.createElement("span");
        metodo.className = "badge bg-secondary mb-2";
        metodo.textContent = r.metodo;

        var texto = document.createElement("p");
        texto.style.whiteSpace = "pre-line";
        texto.textContent = r.preparo;

        var botao = document.createElement("button");
        botao.className = "btn btn-sm btn-danger";
        botao.textContent = "Excluir";
        botao.addEventListener("click", function () {
            excluirReceita(i);
        });

        corpo.appendChild(titulo);
        corpo.appendChild(metodo);
        corpo.appendChild(texto);
        corpo.appendChild(botao);
        card.appendChild(corpo);
        coluna.appendChild(card);
        lista.appendChild(coluna);
    });
}

carregarReceitas();
