const API_KEY="b1145b0a9bec0534d31cc17ef79ae187";

function onGeoSuccess(position){
    const lat=position.coords.latitude;
    const long=position.coords.longitude;
    console.log("you live in",lat, long);
    
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${API_KEY}&unit=metric`;
    console.log(url);
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        const weather=document.querySelector("#weather span:first-child");
        const city=document.querySelector("#weather span:last-child");
        console.log(data.name, data.weather[0].main);
        city.innerText=data.name;
        weather.innerText=data.weather[0].main;
    });
}
function onGeoError(){
    alert("cant find you.")
}
navigator.geolocation.getCurrentPosition(onGeoSuccess,onGeoError);