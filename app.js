/* 4 Durum Var : ikonlar ve background color değişecek.
    - güneşli - güneş ikonu + orange color
    - parçalı bulutlu - bulut ikonu + smokewhite color
    - yağmurlu - rain icon + skyblue 
    - karlı - snow icon + white 
*/

// API den veri çekmek için url ve key değişkenleri: 
const url = "https://api.openweathermap.org/data/2.5/";
const key = '42e8ed287053d3c3f6df9d0a11739258';

const searchBar = document.getElementById("searchBar");
searchBar.addEventListener("keypress", setQuery); 

function setQuery(e) {
    if(e.keyCode == '13') {// Enter'a basıldığında 
    getResult(searchBar.value);
    clearInput(searchBar);
    }
}

function clearInput(a) {
    a.value = "";
}

function getResult(cityName) {
    let query =  `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=en`
    fetch(query)
    .then(weather => {
        return weather.json();
    })
    .then(displayResult);
    
}

const displayResult = (result) => {
    let city = document.querySelector(".city");
    city.innerText = `${result.name} | ${result.sys.country}`

    let temp = document.querySelector(".temp");
    temp.innerText = `${Math.round(result.main.temp)}°C`

    let desc = document.querySelector(".desc-text");
    desc.innerText = `${result.weather[0].description}`
    
    changeBackground(result.weather[0].description);
}

function changeBackground(desc2) {

    // let app = document.getElementsByClassName("app")[0];
    // let container = document.getElementsByClassName("container")[0];
    let desc_icon = document.getElementsByClassName("desc-icon")[0];

    if(desc2 == "sunny") {
        desc_icon.innerHTML = `<img width="24px" height="24px" src="photos/gunes.png" alt="">`
    }
    if(desc2 == "scattered clouds") {
        desc_icon.innerHTML = `<img width="24px" height="24px" src="photos/bulut.png" alt="">`
    }
    if(desc2 == "few clouds") {
        desc_icon.innerHTML = `<img width="24px" height="24px" src="photos/gunes-bulut.png" alt="">`
    }
    if(desc2 == "clear sky") {
        desc_icon.innerHTML = `<img width="24px" height="24px" src="photos/bulut.png" alt="">`
    }
}

