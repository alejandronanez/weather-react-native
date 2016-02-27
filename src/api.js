import _ from 'lodash';

const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?APPID=c8cffee9248c82e52349a94f517435ec';

function kelvinToC(kelvin) {
    return `${Math.round((kelvin - 273.15))} ºC`;
}

const Api = ({latitude, longitude}) => {
    const url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            return {
                city: json.name,
                temperature: kelvinToC(json.main.temp),
                description: _.capitalize(json.weather[0].description)
            }
        });
}

export default Api;
