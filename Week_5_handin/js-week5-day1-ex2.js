const country_api = "https://countries.plaul.dk/api/countries";

document.querySelector("#svg2").addEventListener("click", mapHandler);

function mapHandler(event){
    const elementPressed = event.target;
    const id = elementPressed.id;
    //const id = event.target.id;
    console.log(id);

    elementPressed.style.fill="blue"
    fetch(country_api + "/" + id)
    .then(response => response.json())
    .then(data => {
        //update DOM //see dev tools - console for info specifics
        console.log(data)
    })
}