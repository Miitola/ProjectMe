const apiKey= "6bd5be7e23de647523d753c7ff120826" ;
const  apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchInput = document.querySelector('.search input');
const searchButton = document.querySelector('.search button');
const weatherTag = document.querySelector('.weather-tag');


async function checkWeather (city) {
    const response= await fetch (apiUrl + city +`&appid=${apiKey}`) ;

    if(response.status===404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        var data = await response.json();

    console.log(data);

    document.querySelector('.city').innerHTML= data.city;
    document.querySelector('.temp').innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML= data.main.humidity + "%";
    document.querySelector('.wind').innerHTML= data.wind.speed + "km/h";

    if(data.weather[0].main =="Clouds"){
        weatherTag.src= "images/clouds.png";
    }
    else if (data.weather[0].main =="Clear"){
        weatherTag.src= "images/clear.png";
    }
    else if (data.weather[0].main =="Rain"){
        weatherTag.src= "images/rain.png";
    }
    else if (data.weather[0].main =="Drizzle"){
        weatherTag.src= "images/drizzle.png";
    }
    else if (data.weather[0].main =="Mist"){
        weatherTag.src= "images/mist.png";
    }
    }
    document.querySelector(".error").style.display = "block";
    
}




searchButton.addEventListener("click", ()=>{
    checkWeather(searchInput.value);
})
