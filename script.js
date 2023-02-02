let apik = "3045dd712ffe6e702e3245525ac7fa38";
let api;
const wrapper = document.querySelector(".wrapper"),
inputPart = wrapper.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input");
locationBtn = inputPart.querySelector("button"),

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
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apik}`;
    fetchData();
}

function onError(error){ 
    infoTxt.innerText = error.message;
    infoTxt.classList.add("error");
}

function requestApi(city){  
        let api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apik}`;  
        fetchData();
}

function fetchData(){
    infoTxt.innerText = "Getting weather details...";
    infoTxt.classList.add("pending");
    // fetch(api).then(res => res.json()).then(result => weatherDetails(result)).catch(() =>{
    //     infoTxt.innerText = "Something went wrong";
    //     infoTxt.classList.replace("pending", "error");
    // });
}

function weatherDetails(info){
    infoTxt.classList.add("pending", "error");
    if(info.cod == "404"){
        infoTxt.innerText = `${inputField.value} isn't a valid city name`;
   
    }
    console.log(info);
}