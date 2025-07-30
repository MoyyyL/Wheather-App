import "./styles.css";
import { gettingWeather } from "./weatherAPI";

class domWorker {
    constructor() {
        this.start = this.ownData("london")
        this.startListeners = this.addListeners();
    }

    addListeners() {
        const location =  document.querySelector("#location");
        const form = document.querySelector(".form");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const place = location.value.trim();
            this.ownData(place);
        })
    }

    async ownData(place) {
        const data = await gettingWeather(place);
        console.log(data)

        this.renderClimate(data.address, data.icon, data.max, data.min, data.temp);
    }

    renderClimate(address, dataIcon, maxTemp, minTemp, currentTemp) {
        const display = document.querySelector(".weather__display");
        display.innerHTML = "";
        
        const icon = document.createElement("img");
        icon.classList.add("image");
        icon.src = dataIcon;

        const temp = document.createElement("p");
        temp.classList.add("temperature");
        temp.textContent = `${currentTemp}°C`

        const place = document.createElement("p");
        place.classList.add("place");
        place.textContent = `${address}`;

        const min = document.createElement("p");
        min.classList.add("min");
        min.textContent = `min: ${minTemp}°C`;

        const max = document.createElement("p");
        max.classList.add("max");
        max.textContent = `max: ${maxTemp}°C`;

        display.appendChild(icon);
        display.appendChild(temp);
        display.appendChild(place);
        display.appendChild(min);
        display.appendChild(max);
    }
}

const asd = new domWorker();
