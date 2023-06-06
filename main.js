const apiKey = "c42c745bf1314d6ff9567d185998c818";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityInput = document.querySelector(".search-box input");
const cityInputBtn = document.querySelector(".search-box button");
let temp = 0;
document.querySelector(".app").style.display = "none";

async function checkWeather(where){
    const response = await fetch(apiUrl + where + `&appid=${apiKey}`);
    const weatherImg = document.querySelector(".temperature img");
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
    } else {
        document.querySelector(".error").style.display = "none";
        document.querySelector(".app").style.display = "flex";
        let data = await response.json();
        console.log(data);
        temp = Math.round(data.main.temp);
        document.querySelector(".city-name").innerHTML = data.name;
        document.querySelector(".temperature h1").innerHTML = Math.round(data.main.temp) + '°C';
        document.querySelector(".feels").innerHTML = Math.round(data.main.feels_like) + '°C';
        document.querySelector(".wind").innerHTML = data.wind.speed + 'm/s';
        document.querySelector(".rain").innerHTML = data.weather[0].description.charAt(0).toUpperCase()
                                                    + data.weather[0].description.slice(1);
        switch(data.weather[0].main){
            case "Clouds":
                weatherImg.src = "img/clouds.png"
                break;
            case "Clear":
                weatherImg.src = "img/clear.png"
                break;
            case "Snow":
                weatherImg.src = "img/snow.png"
                break;
            case "Rain":
                weatherImg.src = "img/rain.png"
                break;
            case "Drizzle":
                weatherImg.src = "img/drizzle.png"
                break;
            case "Thunderstorm":
                weatherImg.src = "img/7.png"
                break;
            case "Mist":
                weatherImg.src = "img/mist.png"
                break;
                
            default:
        }                                            
    }
}
cityInputBtn.addEventListener("click", ()=>{
    checkWeather(cityInput.value);
});

const helpBtn = document.querySelector(".suggestion img");
helpBtn.addEventListener("click", ()=>{
    document.querySelector(".popup").style.display = "flex";
    if(temp <= -5){
        document.querySelector(".popup p").innerHTML = "Cold temperatures. A warm winter coat,\
         insulated pants, a hat, gloves, scarf, and warm boots are essential. Layering with\
          sweaters or thermal clothing is recommended."
        document.getElementById("popup-img-1").src = "img/jacket.svg";
        document.getElementById("popup-img-2").src = "img/pants.svg";
        document.getElementById("popup-img-3").src = "img/boots.svg";
    } else if(temp <= 0){
        document.querySelector(".popup p").innerHTML = "Cold temperatures. A puffer jacket or winter coat,\
         long pants, and boots. You should to add a sweater or cardigan\
          for additional warmth.";
        document.querySelector(".popup p").innerHTML = "It is very cold, just good luck"
        document.getElementById("popup-img-1").src = "img/jacket.svg";
        document.getElementById("popup-img-2").src = "img/pants.svg";
        document.getElementById("popup-img-3").src = "img/boots.svg";
    } else if(temp <= 5){
        document.querySelector(".popup p").innerHTML = "Cool temperatures. A light to medium-weight jacket,\
         long pants, and closed-toe shoes are suitable. You should to add a sweater or cardigan\
          for additional warmth.";
        document.querySelector(".popup p").innerHTML = "1"
        document.getElementById("popup-img-1").src = "img/jacket.svg";
        document.getElementById("popup-img-2").src = "img/pants.svg";
        document.getElementById("popup-img-3").src = "img/boots.svg";
    } else if(temp <= 10){
        document.querySelector(".popup p").innerHTML = "Cool temperatures. A light to medium-weight jacket,\
         long pants, and closed-toe shoes are suitable. You may want to add a sweater or cardigan\
          for additional warmth.";
          document.getElementById("popup-img-1").src = "img/jacket2.svg";
          document.getElementById("popup-img-2").src = "img/pants.svg";
          document.getElementById("popup-img-3").src = "img/sneakers.svg";
    } else if(temp <= 14){
        document.querySelector(".popup p").innerHTML = "Mild temperatures. A light jacket or sweater,\
         long pants, and closed-toe shoes are appropriate. Layering with a T-shirt or light sweater.";
        document.getElementById("popup-img-1").src = "img/jacket2.svg";
        document.getElementById("popup-img-2").src = "img/pants.svg";
        document.getElementById("popup-img-3").src = "img/sneakers.svg";
    } else if(temp <= 17){
        document.querySelector(".popup p").innerHTML = "Mild temperatures. A light jacket or sweater,\
         long pants, and closed-toe shoes are appropriate. Layering with a T-shirt or light blouse\
          is optional.";
        document.getElementById("popup-img-1").src = "img/sweat.svg";
        document.getElementById("popup-img-2").src = "img/pants.svg";
        document.getElementById("popup-img-3").src = "img/sneakers.svg";
    } else if(temp <= 20){
        document.querySelector(".popup p").innerHTML = "Warm temperatures. A T-shirt or light blouse,\
         shorts or light pants, and comfortable shoes are suitable.";
        document.getElementById("popup-img-1").src = "img/t-shirt.svg";
        document.getElementById("popup-img-2").src = "img/pants.svg";
        document.getElementById("popup-img-3").src = "img/sneakers.svg";
    } else if(temp <= 25){
        document.querySelector(".popup p").innerHTML = "Warm temperatures. A T-shirt or light blouse,\
         shorts or light pants, and comfortable shoes are suitable.";
        document.getElementById("popup-img-1").src = "img/t-shirt.svg";
        document.getElementById("popup-img-2").src = "img/shorts.svg";
        document.getElementById("popup-img-3").src = "img/sneakers.svg";
    } else if(temp <= 30){
        document.querySelector(".popup p").innerHTML = "Hot temperatures. A T-shirt or light blouse,\
         shorts or a skirt, and sandals or lightweight shoes are recommended. ";
        document.getElementById("popup-img-1").src = "img/t-shirt.svg";
        document.getElementById("popup-img-2").src = "img/shorts.svg";
        document.getElementById("popup-img-3").src = "img/sandals.svg";
    } else if(temp <= 35){
        document.querySelector(".popup p").innerHTML = "Very hot temperatures. Choose lightweight,\
         loose-fitting, and breathable clothing made from natural fabrics like cotton or linen.\
          Sleeveless tops, shorts, skirts, or dresses are suitable. Sandals or open-toe shoes are recommended." ;
        document.getElementById("popup-img-1").src = "img/t-shirt.svg";
        document.getElementById("popup-img-2").src = "img/shorts.svg";
        document.getElementById("popup-img-3").src = "img/sandals.svg";

    } else {
        document.querySelector(".popup p").innerHTML = "You will most likely get cooked";
        document.getElementById("popup-img-1").src = "img/t-shirt.svg";
        document.getElementById("popup-img-2").src = "img/shorts.svg";
        document.getElementById("popup-img-3").src = "img/sandals.svg";
    }
});
const closePopup = document.querySelector(".popup img");
closePopup.addEventListener("click", ()=>{
    document.querySelector(".popup").style.display = "none";
});
