// https://pro.openweathermap.org/data/2.5/forecast/climate?id="+value+"&appid=607d51094b8d7505384d31dc74a84976

let cityInput = document.getElementById("cityInput").value;
let searchBtn = document.getElementById("searchBtn");
let cityName = document.querySelector(".cityName");

searchBtn.addEventListener("click", searchFunc);

function searchFunc(){
    if (searchBtn){
        fetchDataEvents(cityInput.value)
        fetchDataWeather(cityInput.value)
        setStorage()
    } cityInput.value=""
}

function fetchDataEvents(cityInput){
fetch("https://app.ticketmaster.com/discovery/v2/events.json?size=31&apikey=GC2GWOqVAojsGdOJA1N1FM1RbT4Hzc94")
    .then((res)=>res.json())
    .then((discovery)=>{
        console.log(discovery)
    })
}

function fetchDataWeather(value){

}

function setStorage(){

}

// fetch("https://app.ticketmaster.com/discovery/v2/events.json?size=31&apikey=GC2GWOqVAojsGdOJA1N1FM1RbT4Hzc94")
//     .then((res)=>res.json())
//     .then(console.log)

    // fetch("https://app.ticketmaster.com/discovery/v2/events.json?city=charlotte&apikey=GC2GWOqVAojsGdOJA1N1FM1RbT4Hzc94")
    // .then((res)=>res.json())
    // .then(console.log)
