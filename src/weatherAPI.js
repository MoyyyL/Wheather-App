async function gettingWeather(place = "london,Uk", unit = "metric") {
    const apiInfo = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}/today?unitGroup=${unit}&key=2VHBYPYNMEL2T5NVPRCCKW4EF&iconSet=icons1&include=days,current&elements=tempmax,tempmin,temp,icon`,
        { mode: "cors" }
    );
    
    const weatherInfo = await apiInfo.json();
    return discerning(weatherInfo)
}

function discerning(data) {
    const today = data.days[0];
    const maxTemp = today.tempmax;
    const minTemp = today.tempmin;
    
    const currentConditions = data.currentConditions;
    const icon = getIconURL(currentConditions.icon);

    const temp = currentConditions.temp;
    
    const address = data.resolvedAddress;

    return {
        temp: temp,
        max: maxTemp,
        min: minTemp,
        icon: icon,
        address: address,
    }
}

function getIconURL(name) {
    return `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/refs/heads/main/SVG/2nd%20Set%20-%20Color/${name}.svg`
}


export {gettingWeather}