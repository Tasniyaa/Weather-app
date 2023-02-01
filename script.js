let apik = "3045dd712ffe6e702e3245525ac7fa38";

const wrapper = document.querySelector(".wrapper"),
inputPart = wrapper.querySelector(".input-part"),
infoTxt = inputPart.querySelector(".info-txt"),
inputField = inputPart.querySelector("input");

// const apiKey= "b813f8cc1942ac99b0db62aacf473ed7";

inputField.addEventListener("keyup", e =>{
    
    if(e.key == "Enter" && inputField.value != ""){
        // console.log("hello");
        requestApi(inputField.value);
    }
})

function requestApi(city){
    console.log(city);
    api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apik}`;
    fetch(api).then(response => console.log(response.json()));
}