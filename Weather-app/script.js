const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const feelsLike = document.getElementById("feelsLike");
const weatherIcon = document.getElementById("weatherIcon");
const errorMessage = document.getElementById("errorMessage");


searchBtn.addEventListener("click", searchWeather);


cityInput.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        searchWeather();
    }

});


function searchWeather() {

    const city = cityInput.value.trim();

    if (city === "") {

        errorMessage.textContent = "Please enter a city name.";

        return;
    }

    errorMessage.textContent = "";

    // Demo weather data

    cityName.textContent = city;

    temperature.textContent = "28°C";

    condition.textContent = "Clear Sky";

    humidity.textContent = "60%";

    windSpeed.textContent = "12 km/h";

    feelsLike.textContent = "30°C";

    weatherIcon.textContent = "☀️";

}