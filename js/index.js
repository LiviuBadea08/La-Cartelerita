const requestURL = "../json/peliculas.json";

async function fetchMoviesJSON() {
  const response = await fetch(requestURL);
  const movies = await response.json();
  return movies;
}

fetchMoviesJSON().then((movies) => {
  for (let index = 0; index < movies.peliculas.length; index++) {
    let title = movies.peliculas[index].nombre;
    let director = movies.peliculas[index].director;
    let rating = movies.peliculas[index].clasificacion;
    let movieImage = movies.peliculas[index].imgUrl;
    moviesSection.innerHTML += `
    <div class="card container-fluid bg-dark mt-2" style="width: 18rem;">
        <img src="${movieImage}" class="card-img-top">
            <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <h5 class="card-title">${director}</h5>
        <h5 class="card-title">${rating}</h5>
        </div>
    </div>`;
  }
});
