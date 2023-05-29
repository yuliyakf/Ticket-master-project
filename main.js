// https://pro.openweathermap.org/data/2.5/forecast/climate?id="+value+"&appid=607d51094b8d7505384d31dc74a84976

let cityInput = document.getElementById("cityInput");
let searchBtn = document.getElementById("searchBtn");
let cityName = document.querySelector(".cityName");
let eventContainer=document.getElementById("event-container")
let cardBtn = document.querySelectorAll("cardButton")
searchBtn.addEventListener("click", searchFunc);

function searchFunc(){
    if (searchBtn){
        fetchDataEvents(cityInput.value)
        //fetchDataWeather(cityInput.value)
        //setStorage()
    } cityInput.value=""
}

function fetchDataEvents(value) {
    fetch("https://app.ticketmaster.com/discovery/v2/events.json?city=['" + value + "']&size=30&sort=date,asc&apikey=GC2GWOqVAojsGdOJA1N1FM1RbT4Hzc94", {
        method: 'GET',
    })
        .then((res) => res.json())
        .then((data) => {
            cityName.innerHTML = data._embedded.events[0]._embedded.venues[0].city.name
            let events= data._embedded.events;
            events.forEach(event => {
                console.log(event);
                let cardObject = document.createElement('div');
                cardObject.className = 'card';
               let address =`${event._embedded.venues[0].address.line1}, ${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].state.stateCode}`
               let date= `${event.dates.start.localDate}, ${event.dates.start.localTime}`
            
                cardObject.innerHTML=`<h6>${event.name}</h6><img style="height:60px; object-fit:contain;" src=${event.images[0].url}><p>${date}</p><span>${address}</span>` ;
                eventContainer.appendChild(cardObject);
            
                    let cardBtn = document.createElement('button');
                    cardBtn.className = 'cardButton';
                    cardBtn.value = address;
                    cardObject.appendChild(cardBtn);
                    console.log(cardBtn.value);                  
                })
                
                //fetchMap()
            });
}

// function fetchDataWeather(value){

// }

// function setStorage(){

// }

// fetch("https://app.ticketmaster.com/discovery/v2/events.json?size=31&apikey=GC2GWOqVAojsGdOJA1N1FM1RbT4Hzc94")
//     .then((res)=>res.json())
//     .then(console.log)

    // fetch("https://app.ticketmaster.com/discovery/v2/events.json?city=charlotte&apikey=GC2GWOqVAojsGdOJA1N1FM1RbT4Hzc94")
    // .then((res)=>res.json())
    // .then(console.log)


    // function fetchDataEvents(value) {
    //     fetch("https://app.ticketmaster.com/discovery/v2/events.json?city=['" + value + "']&size=30&sort=date,desc&apikey=GC2GWOqVAojsGdOJA1N1FM1RbT4Hzc94", {
    //         method: 'GET',
    //     })
    //         .then((res) => res.json())
    //         .then((data) => {
    //             cityName.innerHTML = data._embedded.events[0]._embedded.venues[0].city.name
    //             let events= data._embedded.events;
    //             events.forEach(event => {
    //                 console.log(event);
    //                 let cardObject = document.createElement('div');
    //                 cardObject.className = 'card';
    //                 cardObject.innerHTML = event.name;
    //                 eventContainer.appendChild(cardObject);
    //             });
    //         })
    // }