async function gettingWeather(place = "london,Uk", unit = "metric") {
    const apiInfo = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}/today?unitGroup=${unit}&key=2VHBYPYNMEL2T5NVPRCCKW4EF&include=days,current&elements=datetime,tempmax,tempmin,temp,conditions`,
        { mode: "cors" }
    );
    
    const weatherInfo = await apiInfo.json();

    return discerning(weatherInfo)
}

function discerning(data) {
    const today = data.days[0];
    const currentConditions = data.currentConditions;
    const address = data.resolvedAddress;

    const temp = currentConditions.temp;
    const conditions = currentConditions.conditions;

    const maxTemp = today.tempmax;
    const minTemp = today.tempmin;
    const date = today.datetime;

    return {
        date: date,
        address: address,
        temp: temp,
        max: maxTemp,
        min: minTemp,
        conditions: conditions,
    }
}

export {gettingWeather}