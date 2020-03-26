const BASE = "https://swapi.co/api/";
const CHARACTERS = document.querySelector(".characters");
const PLANETS = document.querySelector(".planets");

async function renderCharacters(film) {
  try {
    CHARACTERS.innerHTML = "";
    let info = await axios.get(BASE + "films/" + film + "/");
    info.data.characters.forEach(characterUrl => {
      renderPeople(characterUrl);
    });
  } catch (err) {
    console.log(err);
  }
}

async function renderPeople(characterUrl) {
  let charResponse = await axios.get(characterUrl);
  let character = charResponse.data;
  const characterDiv = document.createElement("div");
  characterDiv.classList.add("item");
  characterDiv.dataset.key = characterUrl;
  characterDiv.innerHTML = `
      <p>name: ${character.name}</p>
      <p>gender: ${character.gender}</p>
      <p>birth year: ${character.birth_year}</p>
    `;
  CHARACTERS.append(characterDiv);
}

async function renderPlanets(page = 1) {
  try {
    PLANETS.innerHTML = "";
    let planets = await axios.get(BASE + "planets/?page=" + page);
    renderPlanet(planets.data.results);
  } catch (err) {
    console.log(err);
    renderPlanets(1);
  }
}
function renderPlanet(planetsObj) {
  planetsObj.forEach(planet => {
    const planetDiv = document.createElement("p");
    planetDiv.classList.add("item");
    planetDiv.innerHTML = `
    <h4>Planet: ${planet.name}</h4>
    `;
    PLANETS.append(planetDiv);
  });
}
document
  .getElementById("btn-info")
  .addEventListener("click", () =>
    renderCharacters(document.getElementById("info").value)
  );
renderPlanets();
document.getElementById("next").addEventListener("click", () => {
  let page = parseFloat(document.getElementById("next").value);
  page += 1;
  document.getElementById("next").value = page;
  renderPlanets(page);
});
