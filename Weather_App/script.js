// Selecting the Element of HTML 

const input = document.querySelector("#inputbox");
const searchBtn = document.querySelector("#searchbtn");
const weather = document.querySelector(".weather-icon");
const temp = document.querySelector(".temp");
const city = document.querySelector(".city");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");






async function checkWeather(city){
    // API Asking
    const api_key="6299b300aedaccbf68da83bfb069f403";
    const url=`  https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;



    const weather_data =  await fetch(`${url}`).then(response => response.json());

    // changing data of elements coming from API
    temp.innerHTML =`${Math.round(weather_data.main.temp-273.15)}°C`;
    console.log(weather_data);

    city.innerHTML =`${weather_data.name}`;

    humidity.innerHTML =`${weather_data.main.humidity} %`;
    wind.innerHTML =`${weather_data.wind.speed} km/h`


    // Changing weather-icon img
    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather.src="./images/clouds.png";
        case 'Clear':
                weather.src="./images/clear.png";
        case 'Rain':
            weather.src="./images/rain.png";
        case 'Snow':
            weather.src="./images/snow";
        case 'Drizzle':
            weather.src="./images/drizzle.png";
        case "Haze":
            weather.src="./images/rain.png";
        case "Mist":
            weather.src="./images/mist.png"
    }
}


// Making the function made above run according to input
searchBtn.addEventListener('click',()=>{
    checkWeather(input.value);
})