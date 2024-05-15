// fetch all movies method and populate carousel

const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${'00c1b5e88753a295e3e24559a228428a'}`;
const moviesContainer = document.getElementById("movies");

async function fetchMovies() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        data.results.forEach((media, index) => {
            const movieCard = createMovieCard(media);
            if(index === 0){
                movieCard.classList.add("carousel-item","active");
            } else{
                movieCard.classList.add("carousel-item");
            }
            moviesContainer.appendChild(movieCard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function createMovieCard(media) {
    const { title, name, backdrop_path } = media;

    const movieCard = document.createElement("div");
    movieCard.classList.add("movie_item")

    movieCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="movie_img_rounded">
        <div class = "title ">${title || name}</div>
    `;
    return movieCard;
}

fetchMovies();

// fetch a single movie wrapped in a link method and populate carousel

const apiUrlM = `https://api.themoviedb.org/3/movie/now_playing?api_key=${'00c1b5e88753a295e3e24559a228428a'}`;
const moviesContainer2 = document.getElementById("movie");

async function fetchMovies2() {
    try {
        const response = await fetch(apiUrlM);
        const data = await response.json();

        data.results.forEach(media => {
            const movieCard = createMovieCard(media);
            moviesContainer2.appendChild(movieCard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function createMovieCard(media) {
    const {id, title, name, backdrop_path } = media;

    const movieCard = document.createElement("div");
    movieCard.classList.add("onemovie_item")

    const movieLink = document.createElement("a");
    movieLink.href = `Movie.html?id=${id}`;

    movieLink.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="onemovie_img_rounded">
        <div class = "title">${title || name}</div>
    `;

    movieCard.appendChild(movieLink);
    return movieCard;
}

fetchMovies2();

///////////////////////////////////// Start of code block to get one movie by id ///////////////////////

// Function to parse URL query parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const movieDetailsContainer = document.getElementById("movieDetails");

// Function to fetch movie details based on ID
async function fetchMovieDetails() {
    try {
        // Get movie ID from URL query parameter
        const movieId = getParameterByName("id");
        if (!movieId) {
            throw new Error("Movie ID not found in URL");
        }

        // Fetch movie details from API using the movie ID
        const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${'00c1b5e88753a295e3e24559a228428a'}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display movie details on the page
        displayMovieDetails(data);
    } catch (error) {
        console.error("Error fetching movie details:", error);
        // Display error message or handle error as needed
    }
}

// Function to display movie details on the page
function displayMovieDetails(movie) {
    // Clear previous movie details
    movieDetailsContainer.innerHTML = "";

    // Create elements to display movie details
    const backdropImage = document.createElement("img");
    backdropImage.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    backdropImage.alt = movie.title;
    backdropImage.classList.add("img-fluid", "mb-3");

    const titleElement = document.createElement("h2");
    titleElement.textContent = movie.title;

    const overviewElement = document.createElement("p");
    overviewElement.textContent = movie.overview;

    const releaseDateElement = document.createElement("p");
    releaseDateElement.textContent = `Release Date: ${movie.release_date}`;

    // Append movie details to container

    movieDetailsContainer.appendChild(backdropImage);
    movieDetailsContainer.appendChild(titleElement);
    movieDetailsContainer.appendChild(overviewElement);
    movieDetailsContainer.appendChild(releaseDateElement);
}

// Fetch movie details when the page loads
fetchMovieDetails();

////////////////////////////////////////////// fetch movie by id code block ends here /////////////////////



// fetchMovies();

// fetch trending Tv Shows method and populate carousel

const apiUrl2 = `https://api.themoviedb.org/3/discover/tv?api_key=${'00c1b5e88753a295e3e24559a228428a'}`;
const tvshowsContainer = document.getElementById("tvshows");

async function fetchTvShows() {
    try {
        const response = await fetch(apiUrl2);
        const data = await response.json();

        data.results.forEach((media, index) => {
            const tvshowsCard = createTvshowsCard(media);
            if(index === 0){
                tvshowsCard.classList.add("carousel-item","active");
            } else{
                tvshowsCard.classList.add("carousel-item");
            }
            tvshowsContainer.appendChild(tvshowsCard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function createTvshowsCard(media) {
    const { title, name, backdrop_path } = media;

    const tvshowsCard = document.createElement("div");
    tvshowsCard.classList.add("tvshows_item")

    tvshowsCard.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="tvshows_img_rounded">
        <div class = "title ">${title || name}</div>
    `;
    return tvshowsCard;
}

fetchTvShows();

// one tvshow
const apiUrltv = `https://api.themoviedb.org/3/discover/tv?api_key=${'00c1b5e88753a295e3e24559a228428a'}`;
const tvshowsContainer2 = document.getElementById("tvshow");

async function fetchTvShows2() {
    try {
        const response = await fetch(apiUrltv);
        const data = await response.json();

        data.results.forEach(media => {
            const tvshowsCard = createshowCard(media);
            tvshowsContainer2.appendChild(tvshowsCard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function createshowCard(media) {
    const {id, title, name, backdrop_path } = media;

    const tvshowsCard = document.createElement("div");
    tvshowsCard.classList.add("onetvshow_item")

    const tvshowLink = document.createElement("a");
    tvshowLink.href = `TvShow.html?id=${id}`;

    tvshowLink.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="onetvshow_img_rounded">
        <div class = "title">${title || name}</div>
    `;

    tvshowsCard.appendChild(tvshowLink);
    return tvshowsCard;
}

fetchTvShows2();


////////////////////////////// fetch tv show by id code block starts here ////////////////////////////

// Function to parse URL query parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const tvShowDetailsContainer = document.getElementById("tvShowDetails");

// Function to fetch TV show details based on ID
async function fetchTVShowDetails() {
    try {
        // Get TV show ID from URL query parameter
        const tvShowId = getParameterByName("id");
        if (!tvShowId) {
            throw new Error("TV show ID not found in URL");
        }

        // Fetch TV show details from API using the TV show ID
        const apiUrl = `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${'00c1b5e88753a295e3e24559a228428a'}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display TV show details on the page
        displayTVShowDetails(data);
    } catch (error) {
        console.error("Error fetching TV show details:", error);
        // Display error message or handle error as needed
    }
}

// Function to display TV show details on the page
function displayTVShowDetails(tvShow) {
    // Clear previous TV show details
    tvShowDetailsContainer.innerHTML = "";

    // Create elements to display TV show details
    const titleElement = document.createElement("h2");
    titleElement.textContent = tvShow.name;

    const backdropImage = document.createElement("img");
    backdropImage.src = `https://image.tmdb.org/t/p/w500/${tvShow.backdrop_path}`;
    backdropImage.alt = tvShow.name;
    backdropImage.classList.add("img-fluid", "mb-3");

    const overviewElement = document.createElement("p");
    overviewElement.textContent = tvShow.overview;

    const firstAirDateElement = document.createElement("p");
    firstAirDateElement.textContent = `First Air Date: ${tvShow.first_air_date}`;

    // Append TV show details to container
    tvShowDetailsContainer.appendChild(titleElement);
    tvShowDetailsContainer.appendChild(backdropImage);
    tvShowDetailsContainer.appendChild(overviewElement);
    tvShowDetailsContainer.appendChild(firstAirDateElement);
}

// Fetch TV show details when the page loads
fetchTVShowDetails();



////////////////////////////// fetch tv show by id code block ends here ////////////////////////////


//fetch all games and apps method and populate carousel

const apiUrl3 = `https://api.rawg.io/api/games?key=${'9743a992de984eeb8aa45bc4e8f0f28f'}`;
const gamesContainer = document.getElementById("games");


async function fetchGames() {
    try {
        const response = await fetch(apiUrl3);
        const data = await response.json();

        data.results.forEach((media, index) => {
            const gamesCard = createGamesCard(media);
            if(index === 0){
                gamesCard.classList.add("carousel-item","active");
            } else{
                gamesCard.classList.add("carousel-item");
            }
            gamesContainer.appendChild(gamesCard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function createGamesCard(media) {
    
    const { title, name, background_image } = media;

    const gamesCard = document.createElement("div");
    gamesCard.classList.add("games_item")
    

    // <img src="https://media.rawg.io/media/games/${background_image}" class="games_img_rounded">
    // <img src="https://media.rawg.io/media/resize/420/-/games/${background_image}" class="games_img_rounded">

    gamesCard.innerHTML = `
        <img src="https://media.rawg.io/media/games/${background_image}" class="games_img_rounded">
        <div class = "title ">${title || name}</div>
    `;
    return gamesCard;
}

fetchGames();


//fetch one game

// Function to fetch games from RAWG API
const apiUrlGames = `https://api.rawg.io/api/games?key=${'9743a992de984eeb8aa45bc4e8f0f28f'}`;
const gamesContainer2 = document.getElementById("game");

async function fetchGamesone() {
    try {
        const response = await fetch(apiUrlGames);
        const data = await response.json();

        data.results.forEach(game => {
            const gameCard = createGameCard(game);
            gamesContainer2.appendChild(gameCard);
        });
    } catch (error) {
        console.error("Error fetching games:", error);
    }
}

function createGameCard(game) {
    const { id, name, background_image } = game;

    const gameCard = document.createElement("div");
    gameCard.classList.add("onegame_item");

    const gameLink = document.createElement("a");
    gameLink.href = `Game.html?id=${id}`;

    gameLink.innerHTML = `
        <img src="${background_image}" class="onegame_img_rounded">
        <div class="title">${name}</div>
    `;

    gameCard.appendChild(gameLink);
    return gameCard;
}

fetchGamesone();



///////////////////////// fetch game by id code block starts here /////////////
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}


const gameDetailsContainer = document.getElementById("gameDetails");
// Function to fetch game details based on ID
async function fetchGameDetails() {
    try {
        // Get game ID from URL query parameter
        const gameId = getParameterByName("id");
        if (!gameId) {
            throw new Error("Game ID not found in URL");
        }

        // Fetch game details from API using the game ID
        const apiUrl = `https://api.rawg.io/api/games/${gameId}?key=${'9743a992de984eeb8aa45bc4e8f0f28f'}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display game details on the page
        displayGameDetails(data);
    } catch (error) {
        console.error("Error fetching game details:", error);
        // Display error message or handle error as needed
    }
}

// Function to display game details on the page
function displayGameDetails(game) {
    // Clear previous game details
    gameDetailsContainer.innerHTML = "";

    // Create elements to display game details
    const backdropImage = document.createElement("img");
    backdropImage.src = `https://media.rawg.io/media/games/${game.background_image}`;
    backdropImage.alt = game.name;
    backdropImage.classList.add("img-fluid", "mb-3");
    
    const titleElement = document.createElement("h2");
    titleElement.textContent = game.name;


    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = `Released ${game.description_raw}`;

    // Append game details to container
    gameDetailsContainer.appendChild(backdropImage);
    gameDetailsContainer.appendChild(titleElement);
    gameDetailsContainer.appendChild(descriptionElement);
}

// Fetch game details when the page loads
fetchGameDetails();



///////////////////////// fetch game by id code block ends here ////////////


// fetch all collections and populate carousel

const apiUrl4 = `https://api.themoviedb.org/3/trending/all/day?api_key=${'00c1b5e88753a295e3e24559a228428a'}`;
const collectionsContainer = document.getElementById("collections");


async function fetchCollections() {
    try {
        const response = await fetch(apiUrl4);
        const data = await response.json();

        data.results.forEach((media, index) => {
            const collecctionsCard = createCollectionsCard(media);
            if(index === 0){
                collecctionsCard.classList.add("carousel-item","active");
            } else{
                collecctionsCard.classList.add("carousel-item");
            }
            collectionsContainer.appendChild(collecctionsCard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function createCollectionsCard(media) {
    
    const { title, name, backdrop_path } = media;

    const collecctionsCard = document.createElement("div");
    collecctionsCard.classList.add("collection_item")

    // <img src="https://media.rawg.io/media/games/${background_image}" class="games_img_rounded">

    collecctionsCard.innerHTML = `
    <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="collections_img_rounded">
        <div class = "title ">${title || name}</div>
    `;
    return collecctionsCard;
}

fetchCollections();


// one collection
const apiUrlcol = `https://api.themoviedb.org/3/trending/all/day?api_key=${'00c1b5e88753a295e3e24559a228428a'}`;
const colontainer2 = document.getElementById("collection");

async function fetchCollection2() {
    try {
        const response = await fetch(apiUrlcol);
        const data = await response.json();

        data.results.forEach(media => {
            const colCard = createcolCard(media);
            colontainer2.appendChild(colCard);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

function createcolCard(media) {
    const {id, title, name, backdrop_path } = media;

    const colCard = document.createElement("div");
    colCard.classList.add("onecollection_item")

    const colLink = document.createElement("a");
    colLink.href = `Collection.html?id=${id}`;

    colLink.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500/${backdrop_path}" class="onecollection_img_rounded">
        <div class = "title">${title || name}</div>
    `;

    colCard.appendChild(colLink);
    return colCard;
}

fetchCollection2();


///////////////// get collection by id code block starts here ////////////////

// Function to parse URL query parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

const collectionDetailsContainer = document.getElementById("collectionDetails");

// Function to fetch collection details based on ID
async function fetchCollectionDetails() {
    try {
        // Get collection ID from URL query parameter
        const collectionId = getParameterByName("id");
        if (!collectionId) {
            throw new Error("Collection ID not found in URL");
        }

        // Fetch collection details from API using the collection ID
        const apiUrl = `https://api.themoviedb.org/3/collection/${collectionId}?api_key=${'00c1b5e88753a295e3e24559a228428a'}`;
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Display collection details on the page
        displayCollectionDetails(data);
    } catch (error) {
        console.error("Error fetching collection details:", error);
        // Display error message or handle error as needed
    }
}

// Function to display collection details on the page
function displayCollectionDetails(collection) {
    // Clear previous collection details
    collectionDetailsContainer.innerHTML = "";

    // Create elements to display collection details
    const titleElement = document.createElement("h2");
    titleElement.textContent = collection.name;

    const backdropImage = document.createElement("img");
    backdropImage.src = `https://image.tmdb.org/t/p/w500/${collection.backdrop_path}`;
    backdropImage.alt = collection.name;
    backdropImage.classList.add("img-fluid", "mb-3");

    const overviewElement = document.createElement("p");
    overviewElement.textContent = collection.overview;

    // Append collection details to container
    collectionDetailsContainer.appendChild(titleElement);
    collectionDetailsContainer.appendChild(backdropImage);
    collectionDetailsContainer.appendChild(overviewElement);
}

// Fetch collection details when the page loads
fetchCollectionDetails();



///////////////// get collection by id code block ends here ////////////////