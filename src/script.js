import "./styles.css";
import { gettingWeather } from "./weatherAPI";

class domWorker {
    constructor() {
        this.start = this.renderClimate();
    }

    addListeners() {
        const location =  document.querySelector("#location");
        const form = document.querySelector(".form");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const place = location.value.trim();
            
            const info = gettingWeather(place); //todo No olvidar agregar la opcion de cambiar entre "metric" y "us"
            info.then(data => console.log(data))
        })
    }

    renderClimate() {
        const initialWeather = gettingWeather();

        const display = document.querySelector(".weather__display");
        
        
    }
}

const asd = new domWorker();