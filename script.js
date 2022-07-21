var input = document.querySelector("input");
var button = document.querySelector("button");
var resultDiv = document.querySelector(".result");

button.addEventListener("click",function(event){
    event.preventDefault(); 
    button.textContent = "loading...";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=5d2aba5a660006ca5936ff57f5905f9e&units=metric`)
    .then(function(res){
        return res.json();
    })
    .then(function(data){
        var value = data.weather[0].description;
        button.textContent = "show";
        resultDiv.innerHTML = `
        <div>
            <div>
                <p>${Math.floor(data.main.temp)}<sup>o</sup>C</p>
                <img src = "https://openweathermap.org/img/w/${data.weather[0].icon}.png"/>
            </div>
            <h2>${value}</h2>
        </div>`;
        input.value = "";
    })
    .catch(function(error){
        console.log(error);
        button.textContent = "show";
        input.value = "";
    })
})
