import { SERVER_URL } from "../../settings.js"
export function initEditCar(){
  document.querySelector("#edit-car-response").innerText = ""
  document.querySelector("#find-item").addEventListener("click", findEditCar)
  document.querySelector("#submit-edit").addEventListener("click", editCar)
}

let carIdToEdit = null;

async function findEditCar(){
 const carId =  document.querySelector("#text-for-id2").value;

 const car = await fetch(SERVER_URL + "/" + carId)
 .then(response => {
  if(!response.ok){
    throw new Error("Car not found")
  }
  return response.json()
})
document.querySelector("#edit-car-response").innerText = JSON.stringify(car, null, 3)
carIdToEdit = car.id;
}

async function editCar(){
  const editedCar = {
    id: carIdToEdit,
    brand: document.querySelector("#brand-edit").value,
    model: document.querySelector("#model-edit").value,
    pricePrDay: parseFloat(document.querySelector("#pricePrDay-edit").value),
    bestDiscount: parseInt(document.querySelector("#bestDiscount-edit").value),
  };
  const options = {
    method: "PUT",
    headers: {"content-type":"application/json"},
    body: JSON.stringify(editedCar)
  }
  fetch(SERVER_URL + "/" + carIdToEdit, options)
    .then(response => response.json())
    .then(carResponse => {
      document.querySelector("#edit-car-response").innerText = JSON.stringify(carResponse, null, 3);
    });
    carIdToEdit = null;
}