const API_KEY = '81f6a3d379d655852e9cc9430ffa6df9';

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(URL)
        .then(res => res.json())
        .then(data => {
            const city = document.querySelector("#weather span:nth-child(1)");
            const weather = document.querySelector("#weather span:nth-child(2)");
            const temp = document.querySelector("#weather span:nth-child(3)");
            const wind = document.querySelector("#weather span:nth-child(4)");

            city.innerText = data.name;
            weather.innerText = `/ ${data.weather[0].main}`;
            temp.innerText = `/ ${data.main.temp} ℃`;
            wind.innerText = `/ ${data.wind.speed} m/s`;
        });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);