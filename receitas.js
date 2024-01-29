const receitas = [
    {
        titulo: "Arroz de couve-flor",
        imagem: "img/Arrozcouve.png",
        preparo: "Deixe a couve-flor picada. Adicione os ingredientes e refogue bem. Adicione sal, tampe a panela e deixe cozinhar.",
        ingredientes: ["Arroz", "Couve-flor", "Cebola Média", "Azeite"]
    },
    {
        titulo: "Bolo de Café",
        imagem: "img/bolodecafe.jpg",
        preparo: "Bata o açúcar, as gemas e o café. Adicione farinha e chocolate e mexa bem. Bata as claras e junte à mistura.",
        ingredientes: ["Farinha de trigo", "Açúcar", "Café Coado", "Chocolate em pó", "Ovos"]
    },
    {
        titulo: "Coxinha de Brigadeiro",
        imagem: "img/coxinhadebrigadeiro.png",
        preparo: "Junte o leite condensado, chocolate em pó e manteiga. Aqueça no fogo baixo. Envolva os morangos e passe granulado.",
        ingredientes: ["Leite condensado", "Chocolate em pó", "Manteiga", "Morango", "Chocolate granulado"]
    }
];

function getListaIngredientes(receita) {
    return `<ul>${receita.ingredientes.map(ingrediente => `<li>${ingrediente}</li>`).join('')}</ul>`;
}

function getCard(receita) {
    return `
    <div class="card text-center m-3" style="width: 300px;">
        <img class="card-img-top" src="${receita.imagem}" alt="${receita.titulo}">
        <div class="card-body">
            <h5 class="card-title">${receita.titulo}</h5>
            <hr>
            <div class="card-text">${getListaIngredientes(receita)}</div>
            <hr>
            <p>${receita.preparo}</p>
        </div>
    </div>`;
}

function preencheCatalogo() {
    const pnlCatalogo = document.getElementById('pnlCatalogo');
    const htmlReceitas = receitas.map(receita => getCard(receita)).join('');
    pnlCatalogo.innerHTML = htmlReceitas;
}