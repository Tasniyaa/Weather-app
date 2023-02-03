let apik = "3045dd712ffe6e702e3245525ac7fa38";
let api;

const wrapper = document.querySelector(".wrapper"),
inputPart = document.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input"),
locationBtn = inputPart.querySelector("button"),
weatherPart = wrapper.querySelector(".weather-part"),
wIcon = weatherPart.querySelector("img"),
arrowBack = wrapper.querySelector("header i");

// const apiKey= "b813f8cc1942ac99b0db62aacf473ed7";

inputField.addEventListener("keyup", e =>{
    
    if(e.key == "Enter" && inputField.value != ""){
        // console.log("hello");
        requestApi(inputField.value);
    }
})

locationBtn.addEventListener("click", () =>{
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }else{
        alert("Your browser not support geolocation api");
    }
});
function onSuccess(position){
    const {latitude, longitude} = position.coords;
     api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apik}`;
    fetchData();
}

function onError(error){ 
    infoTxt.innerText = error.message;
    infoTxt.classList.add("error");
}

function requestApi(city){  
         api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apik}`;  
        fetchData();
}

function fetchData(){
    infoTxt.innerText = "Getting weather details...";
    infoTxt.classList.add("pending");

    // fetch(api).then(response => response.json()).then(result => weatherDetails(result));
    fetch(api).then(response => response.json()).then(result => weatherDetails(result)).catch(() =>{
        infoTxt.innerText = "Something went wrong";
        infoTxt.classList.replace("pending", "error");
    });
}

function weatherDetails(info){
    infoTxt.classList.replace("pending", "error");
    if(info.cod == "404"){
        infoTxt.innerText = `${inputField.value} isn't a valid city name`;
    }else{
        const city = info.name;
        const country = info.sys.country;
        const {description, id} = info.weather[0];
        const {feels_like, humidity, temp} = info.main;

        weatherPart.querySelector(".temp .numb").innerText = Math.floor(temp);
        weatherPart.querySelector(".weather").innerText = description;
        weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
        weatherPart.querySelector(".temp .numb-2").innerText = Math.floor(feels_like);
        weatherPart.querySelector(".humidity span").innerText = `${humidity}%`;
        
        infoTxt.classList.remove("pending", "error");
        wrapper.classList.add("active");
    }
    console.log(info);
}

arrowBack.addEventListener("click", ()=>{
    wrapper.classList.remove("active");
});