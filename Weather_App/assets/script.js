// Function perform on load
window.addEventListener('load', ()=> {
    // Init long and lat variables
    let longc;
    let lat;
    let alt;
    let locationTimezone = document.querySelector('.location-timezone');
    // If location on, get long and lat, else return error
    if (navigator.geolocation) {
        // Get current position, log to console and store in long and lat
        navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        longc = position.coords.longitude;
        lat = position.coords.latitude;
        alt = position.coords.altitude;
        
        console.log(longc + ' by ' + lat + ' by ' + alt);
        
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const api = `${proxy}https://api.darksky.net/forecast/7229bf2a0fb8992daafd2f5367d76e0d/${longc},${lat}`;
        
        fetch(api)
            .then(response => {
                return response.json();
            })
                .then(data => {
                    console.log(data);
                    // Set DOM Element from the API
                    
                    // Convert temp to C
                    var tempC = data.currently.temperature - 32;
                    tempC *= 5;
                    tempC /= 9;
                    // Update local weather
                    document.querySelector('.temperature-degree-f').textContent = data.currently.temperature;
                    document.querySelector('.temperature-degree-c').textContent = tempC;
                    document.querySelector('.temperature-description').textContent = data.currently.summary;
                    
                    // Update More info
                    document.querySelector('.nearestStormDist').textContent = 'Distance to nearest storm : ' + data.currently.nearestStormDistance;
                    document.querySelector('.nearestStormBearing').textContent = 'Nearest storm\'s heading : ' + data.currently.nearestStormBearing;
                    document.querySelector('.precipIntense').textContent = 'Precipitaion intensity : ' + data.currently.precipIntensity;
                    document.querySelector('.precipProbable').textContent = 'Precipitation probability : ' + data.currently.precipProbability;
                    document.querySelector('.humid').textContent = 'Humidity : ' + data.currently.humidity;
                    document.querySelector('.pressure').textContent = 'Pressure : ' + data.currently.pressure;
                    document.querySelector('.windspeed').textContent = 'Wind speed : ' + data.currently.windSpeed;
                    document.querySelector('.windgust').textContent = 'Wind gust : ' + data.currently.windGust;
                    document.querySelector('.windBearing').textContent = 'Wind bearing : ' + data.currently.windBearing;
                    document.querySelector('.vis').textContent = 'Visibility : ' + data.currently.visibility;
                    document.querySelector('.ozone').textContent = 'Ozone : ' + data.currently.ozone;
                    
                    // Update current location
                    locationTimezone.textContent = data.timezone;
                    document.querySelector('.location-long').textContent = 'Long : ' + longc;
                    document.querySelector('.location-lat').textContent = 'Lat : ' + lat;
                    document.querySelector('.location-alt').textContent = 'Alt : ' + alt;
                });
        
        
    });
    } else {
        h1.textContent = 'Could not find location';
    }
});