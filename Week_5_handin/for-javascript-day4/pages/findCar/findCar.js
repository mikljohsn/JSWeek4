import {SERVER_URL} from "../../settings.js"

export function initFindCar(){
  document.querySelector("#result").innerText = "" //hver gang funktionen bliver kørt, bliver vores result <p> tag clearet
  document.querySelector("#btn").addEventListener("click",findCar)
}

async function findCar(){
  document.querySelector("#error").innerHTML = "" //hver gang man finder en bil, bliver tagget clearet
  const id = document.querySelector("#car-id").value //find ID
  try{ //når vi bruger async/await kan vi bruge try catch
    const car = await fetch(SERVER_URL + "/" + id) //indsæt ID i URL
                .then(response => {
                  if(!response.ok){
                    throw new Error("Car not found")
                  }
                  return response.json()
                })
  document.querySelector("#result").innerText = JSON.stringify(car, null, 3)
              } catch(e) {
                document.querySelector("#error").innerHTML = e.message;
              }
}

