const content = document.querySelector('#content');
const selected = document.querySelector('#sel');
let pocount = 0 ;

const pokeApi = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    criarCards(data);
}

const criarCards = (data) => {
    const card = document.createElement('article');
    card.setAttribute('class', 'card');
    const conteudo = `
        <img src="${data['sprites']['front_default']}" alt="${data.name}">
        <h3>${data.name}</h3>
    `
    card.innerHTML = conteudo;
    content.appendChild(card);
}

const criarPokemons = async () => {
    for (let i = 1; i < pocount + 1; i++){
        await pokeApi(i)
    };
}

const chgValor = () => {
    pocount = Number(selected.options[selected.selectedIndex].value);
    content.innerHTML = '';
    criarPokemons();
}
