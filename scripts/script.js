
    const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");

    promisse.then(displayMovies);
    //promisse.catch(error);

function displayMovies(movies) {
    const div = document.querySelector(".movies");
    div.innerHTML = "";

    for (let i = 0; i < movies.data.length; i++) {
        
        div.innerHTML += `
        <div class="movie">
            <img src="${movies.data[i].imagem}">
            <div class="title">${movies.data[i].titulo}</div>
            <button id="${movies.data[i].id}" onclick="buyTicket(this)">
                Comprar
                <ion-icon name="cart-outline"></ion-icon>
            </button>
        </div>
        `
        
    }
    console.log(movies.data);

}

function buyTicket(id) {
    const name = prompt("Digite seu nome");
    const seats = prompt("Quantos lugares");
    const info = {
        nome: name,
        quantidade: seats
    }
    const promisse = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes/${id.getAttribute("id")}/ingresso`, info)
    promisse.then(confirmationScreen);
    //promisse.catch(error);
}

function confirmationScreen() {
    alert("Ingresso comprado com sucesso");
}