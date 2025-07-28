import "./styles.css";

async function gettingWeather(place = "london,Uk") {
    const apiInfo = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}/today?unitGroup=metric&key=2VHBYPYNMEL2T5NVPRCCKW4EF&include=days&elements=datetime,tempmax,tempmin,temp`,
        { mode: "cors" }
    );
    
    const weatherInfo = await apiInfo.json();

    return discerning(weatherInfo)
}

function discerning(data) {
    const today = data.days[0];
    const address = data.address;

    const temp = today.temp;
    const maxTemp = today.tempmax;
    const minTemp = today.tempmin;
    const date = today.datetime;

    return {
        date: date,
        address: address,
        temp: temp,
        max: maxTemp,
        min: minTemp,
    }
}

class domWorker {
    addListeners() {
        const location =  document.querySelector("#location");
        const form = document.querySelector(".form");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const place = location.value.trim();
            
            const info = gettingWeather(place);
            info.then(data => console.log(data))
        })
    }
}

const asd = new domWorker();
asd.addListeners();