import { SERVER_URL } from "../../settings.js";
export function initAddCar(){
  document.querySelector("#add-car").addEventListener("click", addCar);
}

async function addCar(){
  const form = document.querySelector("#carForm")
  const newCar = {
    brand: form.brand.value,
    model: form.model.value,
    pricePrDay: form.pricePrDay.value,
    bestDiscount: form.bestDiscount.value
  }

  const options = {
    method: "POST",
    headers: {
      "accept":"application/json",
      "content-type":"application/json"
    },
    body: JSON.stringify(newCar)
  }

  await fetch(SERVER_URL, options)
  .then(response => {
    if(!response.ok){
      throw new Error("Car not found")
    }
    return response.json()
  })
  .then(carResponse  => {
    document.querySelector("#new-car-response").innerText = JSON.stringify(carResponse, null, 3)
})
}