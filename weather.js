


const apiKey = "e1ebb8300c88dc5d0a74dcc282c8f224"



const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.querySelector(".search-input");
const btn = document.querySelector(".btn");

const weather_icon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`)

    if(response.status==404){
        document.querySelector(".error").style.display = "block";
        //  document.querySelector(".weather").computedStyleMap.display = "none";
    }
    else{
          let data = await response.json();
           document.querySelector(".error").style.display = "none";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
     document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
     
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main === "Clouds"){

   weather_icon.src="images/clouds.png";

        
    }
    else if(data.weather[0].main === "Clear"){
         weather_icon.src="images/clear.png";
    }
      else if(data.weather[0].main === "Rain"){
         weather_icon.src="images/rain.png";
    }
      else if(data.weather[0].main === "Drizzle"){
         weather_icon.src="images/drizzle.png";
    }
      else if(data.weather[0].main === "Mist"){
         weather_icon.src="images/mist.png";
    }
   

    }
//     let data = await response.json();
  

//     document.querySelector(".city").innerHTML=data.name;
//     document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
//      document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
     
//     document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

//     if(data.weather[0].main === "Clouds"){

//    weather_icon.src="images/clouds.png";

        
//     }
//     else if(data.weather[0].main === "Clear"){
//          weather_icon.src="images/clear.png";
//     }
//       else if(data.weather[0].main === "Rain"){
//          weather_icon.src="images/rain.png";
//     }
//       else if(data.weather[0].main === "Drizzle"){
//          weather_icon.src="images/drizzle.png";
//     }
//       else if(data.weather[0].main === "Mist"){
//          weather_icon.src="images/mist.png";
//     }

}


btn.addEventListener("click",()=>{
    checkWeather(search.value);

})
