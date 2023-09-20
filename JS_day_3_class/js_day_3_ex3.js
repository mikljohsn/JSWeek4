const server_url = "http://localhost:8080/api/cars"; //server url

//get all cars
const btnGetAll = document.querySelector("#btn-get-all"); //define your button variable

btnGetAll.addEventListener("click", getAllCars); //add event to button variable //could also have been coded as document.querySelector("#btn-get-all").addEventListener("click",...)

function getAllCars(){
    fetch(server_url)
    .then(response => response.json())//parses data to json and returns a promise
    .then(cars => {
        const tableRows = cars.map(car => `
            <tr>
                <td>${car.id}</td>
                <td>${car.brand}</td>
                <td>${car.model}</td>
                <td>${car.pricePrDay}</td>
                <td>${car.bestDiscount}</td>
            </tr>
        `)
        const rowsAsString = tableRows.join(""); //joins the rows as strings
        document.querySelector("#tbody").innerHTML = rowsAsString; //remember XSS(Cross side scripting)
    })
}

//get one car
document.querySelector("#btn-find-car").addEventListener("click", getACar);


function getACar(){
  const id = document.querySelector("#text-for-id").value;
  fetch(server_url + "/" + id)
     .then(response => {
        if(!response.ok){
          return alert("Car Not Found")
        }
        return response.json()
     })
     .then(car => {
        document.querySelector("#found-car").innerText = JSON.stringify(car, null, 2)
    })
};
//add item
document.querySelector("#add-car").addEventListener("click", addCar);

function addCar(){
    const form = document.querySelector("#carForm")
    const newCar = {
        brand: form.brand.value,
        model: form.model.value,
        pricePrDay: parseFloat(form.pricePrDay.value),
        bestDiscount: parseInt(form.bestDiscount.value),
      };

      const options = {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(newCar)
      }

      fetch(server_url, options)
        .then(response => response.json())
        .then(carResponse  => {
             document.querySelector("#new-car-response").innerText = JSON.stringify(carResponse, null, 3)
    })
}

