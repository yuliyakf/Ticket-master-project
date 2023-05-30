// https://pro.openweathermap.org/data/2.5/forecast/climate?id="+value+"&appid=607d51094b8d7505384d31dc74a84976

let cityInput = document.getElementById("cityInput");
let searchBtn = document.getElementById("searchBtn");
let cityName = document.querySelector(".cityName");
let eventContainer = document.getElementById("event-container");
let historyItems = document.querySelector(".historyItems");
let eventInfoDiv = document.querySelector(".eventInfoDiv");
let button = document.querySelectorAll("button")

searchBtn.addEventListener("click", searchFunc);

//activates search button
function searchFunc(){
    if (searchBtn){
        fetchDataEvents(cityInput.value)
        setStorage()
    } cityInput.value=""
}

//fetches API events from ticketmaster and appends cards dynamically
function fetchDataEvents(value){
    eventContainer.innerHTML=""
    
fetch("https://app.ticketmaster.com/discovery/v2/events.json?city=["+value+"]&size=31&sort=date,asc&apikey=GC2GWOqVAojsGdOJA1N1FM1RbT4Hzc94")
    .then((res)=>res.json())
    .then((data)=>{
        cityName.innerHTML=data._embedded.events[0]._embedded.venues[0].city.name
        console.log(data)
        let events = data._embedded.events
        events.forEach(event=>{
            console.log(event)
            let cardObject = document.createElement("div");
            cardObject.className="card"
            let date = `${event.dates.start.localDate}, ${event.dates.start.localTime}` //used template literal to loop through data and pull data into card
            let address =`${event._embedded.venues[0].address.line1}, ${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].state.stateCode}`
            
            cardObject.innerHTML= `<h5>${event.name}</h5><img class="image" src=${event.images[0].url}><p>${date}</p><p>${address}</p><button class="cardBtn" value="${address}">See on Map</button>`

            eventContainer.appendChild(cardObject)

             let button;
             button.forEach(button)
        eventContainer.addEventListener("click", function(e){
           eventInfoDiv.innerHTML = ""
            if(e.target.tagName==="BUTTON"){
                const button = e.target;
                if(button.className === "cardBtn"){

                    
                    eventInfoDiv.innerHTML = `<p>${address}</p>`
               
              
                }
            }
        })
        


    
        })
    });
}
//made card clickable *only blue part*
// function addTopDiv(){
//     eventContainer.addEventListener("click", function(e){ 
        
//         if(e.target.tagName==="DIV"){
//             const div = e.target;
//                 if(div.className==="card"){
//                    // eventInfo();
//                 }
//                 }
//             });
          
            //this appends the child for cardInfo *need to add link to buy ticket and google maps API*
        //function eventInfo(){
            
            
//             let cardInfo = document.createElement("div")
//             cardInfo.className="cardInfoStyle"
//             eventInfoDiv.appendChild(cardInfo)
//             //}
//             eventInfoDiv.innerHTML=`<h5>${event.name}</h5><img class="image" src=${event.images[0].url}><p>${date}</p><span>${address}</span>`
// }



//function for setting storage
let cityArr=[]

function setStorage(){
    JSON.parse(localStorage.getItem("cityArr"))
    cityArr.push(cityInput.value)
    localStorage.setItem("cityArr", JSON.stringify(cityArr)) //setting up the array of cities in local storage

    cityArr.forEach(function(value){
        cityArr.shift(cityInput.value) //removes first item from array

//appending history buttons
        let newDiv= document.createElement("button");
        newDiv.innerHTML=value
        newDiv.className="historyBtn"
        historyItems.appendChild(newDiv)
    })
}

//makes clickable history buttons
historyItems.addEventListener("click", function(e){
    if (e.target.tagName==="BUTTON"){
        const button = e.target;
        if (button.className==="historyBtn"){
            fetchDataEvents(button.innerHTML)
        }
    }
})



// let cityInput = document.getElementById("cityInput");
// let searchBtn = document.getElementById("searchBtn");
// let cityName = document.querySelector(".cityName");
// let eventContainer=document.getElementById("event-container")
// let cardBtn = document.querySelectorAll("cardButton")
// searchBtn.addEventListener("click", searchFunc);

// function searchFunc(){
//     if (searchBtn){
        
//         fetchDataEvents(cityInput.value)
//         //fetchDataWeather(cityInput.value)
//         //setStorage()
         
//     }cityInput.value=""
    

// }

// function fetchDataEvents(value) {
//     fetch("https://app.ticketmaster.com/discovery/v2/events.json?city=['" + value + "']&size=30&sort=date,asc&apikey=GC2GWOqVAojsGdOJA1N1FM1RbT4Hzc94", {
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
                
//                let address =`${event._embedded.venues[0].address.line1}, ${event._embedded.venues[0].city.name}, ${event._embedded.venues[0].state.stateCode}`
//                let date= `${event.dates.start.localDate}, ${event.dates.start.localTime}`
            
//                 cardObject.innerHTML=`<h6>${event.name}</h6><img style="height:60px; object-fit:contain;" src=${event.images[0].url}><p>${date}</p><span>${address}</span>` ;
//                 eventContainer.appendChild(cardObject);
            
//                     let cardBtn = document.createElement('button');
//                     cardBtn.className = 'cardButton';
//                     cardBtn.value = address;
//                     cardObject.appendChild(cardBtn);
//                     console.log(cardBtn.value);                  
//                 })
                
//                 //fetchMap()
//             });
// }

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

// let cardObject

//     function fetchDataEvents(value) {
     
//         fetch("https://app.ticketmaster.com/discovery/v2/events.json?city=[" + value + "]&size=30&sort=date,desc&apikey=GC2GWOqVAojsGdOJA1N1FM1RbT4Hzc94", {
//             method: 'GET',
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 cityName.innerHTML = data._embedded.events[0]._embedded.venues[0].city.name

//                 let events= data._embedded.events;
//                 events.forEach(event => {
//                     console.log(event);
//                     cardObject = document.createElement('div');
                    
                    
//                     cardObject.className='card';
//                     cardObject.innerHTML = event.name;
//                     eventContainer.appendChild(cardObject);
                  
                   
//                 });

//             })
//     }
