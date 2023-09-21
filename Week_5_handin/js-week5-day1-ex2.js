const country_api = "https://countries.plaul.dk/api/countries";

document.querySelector("#svg2").addEventListener("click", mapHandler);
let previousCountry;
let previousCountryFill;

function mapHandler(event){
    const elementPressed = event.target;
    const id = elementPressed.id;
    //const id = event.target.id;
    console.log(id);

    if(previousCountry){ //chatGPT solution for resestting the color of a clicked element
        previousCountry.style.fill = previousCountryFill; 
    }

    previousCountry = elementPressed;
    previousCountryFill = elementPressed.style.fill;

    elementPressed.style.fill="blue"


    fetch(country_api + "/" + id)
    .then(response => response.json())
    .then(data => {

        const currencyCode = Object.keys(data.currencies)[0]; //finds the first object in the currencies object
        const currencyInfo = data.currencies[currencyCode]; //access to the first object

        const markup = `
        <img src="${data.flag}"/>
        <li>Country: ${data.name.common}</li>
        <li>UN member: ${data.unMember}</li>
        <li>Currencies: ${currencyCode}, ${currencyInfo.name}, ${currencyInfo.symbol}</li>
        <li>Capital: ${data.capital}</li>
        <li>Borders: ${data.borders}</li>
        `;
        document.querySelector(".info").innerHTML = markup;
    })
    .catch(error => {
        console.log(error);
    })
}