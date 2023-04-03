const COORD_LS = 'coords';
const API_KEY = '622ede7db737b146e8bc00ff3faea256';
const weather_container = document.querySelector('.js-weather');


function getWeather (lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    })
    .then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather_container.innerHTML = `&nbsp &nbsp &nbsp${temperature}°<br>${place}`
    })
}

function GeoSucessHandler(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const ObjWithPosition = {
        latitude: latitude,  //latitude,
        longitude: longitude //longitude
    }
    localStorage.setItem(COORD_LS, JSON.stringify(ObjWithPosition));
    getWeather(latitude, longitude);
}

function GeoErrorHandler() {
    console.log('Error identification geolocation');
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(GeoSucessHandler, GeoErrorHandler);
}

function getCoords () {
    const coords = localStorage.getItem(COORD_LS);
    if (coords !==null) {
        const loadedCoords = JSON.parse(coords);
        getWeather(loadedCoords.latitude, loadedCoords.longitude)
    } else {
        askForCoords ();
    }
}



function init() {
    getCoords();
}

window.onload = init();