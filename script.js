let search = document.getElementById("search");
let div = document.getElementById("div");

search.onclick = function () {
    let inputValue = document.getElementById("input").value;
    let key = "2178f0fb9ad5ddb8807a77d2cfe9a581";
    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + inputValue + "&appid=" + key)
        .then(function (res) {
            return res.json();
        })
        .then(function (res) {
            console.log(res);

            // country and city names
            let country = document.getElementById("country");
            country.innerHTML = res.name;

            let city = document.getElementById("city");
            city.innerHTML = res.sys.country + ', ' + res.name;

            // current date
            let time = document.getElementById("time");
            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            let today = new Date();

            let day = weekday[today.getDay()];
            let getMonth = today.getMonth();

            if (getMonth <= 10) {
                getMonth = '0' + today.getMonth();
            }
            time.innerHTML = today.getDate() + '.' + getMonth + '.' + today.getFullYear() + ' | ' + day;

            //temperature and other data 
            let temp = res.main.temp;
            temp = (temp - 273.15).toFixed(0);
            let temperature = document.getElementById("temp");
            temperature.innerHTML = temp + "°C" + ' | ' + res.main.temp.toFixed(0) + "°F";

            let humidity = document.getElementById("humidity");
            humidity.innerHTML = "Humidity: " + res.main.humidity;


            let wind = document.getElementById("wind");
            wind.innerHTML = "Wind Speed: " + res.wind.speed + " km/h";
        })
}