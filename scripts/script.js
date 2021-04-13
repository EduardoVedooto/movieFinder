
    const promisse = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/moviefinder/filmes");

    promisse.then(displayMovies);
   // promisse.catch(error);

function displayMovies(movies) {
    const div = document.querySelector(".movies");
    div.innerHTML = "";

    for (let i = 0; i < movies.data.length; i++) {
        
        div.innerHTML += `
        <div class="movie">
            <img src="${movies.data[i].imagem}">
            <div class="title">${movies.data[i].titulo}</div>
            <button>
                Comprar
                <ion-icon name="cart-outline"></ion-icon>
            </button>
        </div>
        `
        
    }
    console.log(movies.data[1].imagem);

}
