const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

let checkWeather = async (city) => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c0dba613eac42f2ea1f4a530466fa09e&units=metric`);
    var data = await response.json();

    console.log(data);

    if(data.cod == "404"){
        alert("city not found");
    }else{
        document.querySelector(".city").innerText = data.name;
    }
    
    document.querySelector(".temp").innerText = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerText = data.main.humidity + '%';
    document.querySelector(".wind").innerText = data.wind.speed + 'km/h';

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/clouds.png";
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
}

searchBtn.addEventListener("click", ()=> {
    checkWeather(searchBox.value);
    document.querySelector(".weather").style.display = "block";
});








