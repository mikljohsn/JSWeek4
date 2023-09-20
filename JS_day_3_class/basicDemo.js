const server_url = "http://localhost:8080/api/cars";

fetch(server_url)
.then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok'); //check to see if response is working
    }
    return response.json(); // Call response.json() to parse the JSON data
  })
  .then(data => {
    console.log(JSON.stringify(data, null, 4))
  });
  
  const newCar = {
    brand: "Toyata",
    model: "RAV",
    pricePrDay: 500,
    bestDiscount: 25
  }  


const options =  { //used to create an object that tells my fetch to use a POST method with the right properties
  method: "POST",  //the http method we use
  headers: { //our headers
    "content-type" : "application/json",
  },
  body: JSON.stringify(newCar) //the body of our request with our pproperties //json.stringify parses the data to json
}

fetch(server_url,options)
  .then(response => response.json())
  .then(carResponse => console.log(carResponse));

