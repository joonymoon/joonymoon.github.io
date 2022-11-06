const weather= document.querySelector("#weather span:first-child");
const city=document.querySelector("#weather span:last-child");
const API_KEY ="fd141695ab360401ca66da948897ca41";
const lang="kr";

function onGeoOk(position){

    const lat=position.coords.latitude;
    const lon=position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=${lang}`;
    console.log(lat);
    console.log(lon);
    fetch(url)
        .then((response)=>response.json())
        .then((data)=>{
            city.innerText=data.name;
            weather.innerText=`${data.weather[0].description}/${Math.round(data.main.temp)}℃`;
        })

}

function onGeoError(){
    alert("can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);