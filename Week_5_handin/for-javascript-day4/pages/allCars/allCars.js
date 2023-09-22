import {SERVER_URL} from "../../settings.js"

export async function initAllCars(){
  console.log("initAllCars")

  const cars = await getCars() //SKAL bruge AWAIT for at få vores biler og indfri vores promise

  const markup = cars.map(car => `
  <li>${car.id}, ${car.brand}</li>
`).join("")
document.querySelector("#cars").innerHTML = markup;
}

async function getCars(){ //returnerer et PROMISE og derfor IKKE et array af cars
  const cars = await fetch(SERVER_URL).then(response => response.json())
  return cars
}

//gammel måde at fetche på uden async/await

/*
 fetch(SERVER_URL) //browseren fetcher hver gang vi trykker på all cars knappen, så hvis det er et problem kan man gemme tingene i en lokal variabel/array 
  .then(response => response.json())
  .then(cars => {
    const markup = cars.map(car => `
      <li>${car.id}, ${car.brand}</li>
    `).join("")
    document.querySelector("#cars").innerHTML = markup;
  }) 
*/